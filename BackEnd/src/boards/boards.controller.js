import { sanitizeTags } from "../util/helpers.util";
import Boards from "../pgModels/boards";
import Users from "../pgModels/users";
import Columns from "../pgModels/columns";
import BoardColumns from "../pgModels/board_columns";
import Tasks from "../pgModels/tasks";
import UserTasks from "../pgModels/user_tasks";
import * as BoardManager from "./boards.util";
/**
 * Get 50 boards, sorted by date, includes pagination functionality, can filter by tag
 * @param req.body.limit - the number of boards to get per page
 * @param req.body.offset - offset for the query based on the previous paginated (used for pagination)
 * @param req.body.tag - tag to filter by
 * @returns void
 */

export function getAll(req, res) {
  let limit;
  try {
    limit = parseInt(req.body.limit);
  } catch (err) {
    limit = undefined;
  }
  if (limit == undefined || limit == NaN) {
    limit = 50;
  }
  let offset = req.body.last == undefined ? 0 : parseInt(req.body.offset);
  let tag = req.body.tag == undefined ? null : req.body.tag;

  return Boards.getAll(offset, limit, tag)
    .then(i => {
      res.status(200).json(i);
    })
    .catch(error => {
      res.status(400).json({ message: "Failed to fetch boards", error: error });
    });
}

// /**
//  * Get a single board based on its board_id
//  * @param req.params.id - board_id of the board
//  * @returns void
//  */
export function getBoard(req, res) {
  console.log("getBoard: ", getBoard);
  let id = req.params.id;
  const user_id = req.user.id;
  Boards.get({ board_id: id })
    .then(i => {
      if (i.length && i[0].creator !== user_id)
        return res
          .status(401)
          .json({ message: "Not authorised to access the board" });

      res.status(200).json(i);
    })
    .catch(error => {
      console.log("error: ", error);
      res.status(400).json({ message: "Failed to fetch board", error: error });
    });
}

// /**
//  * Create a new board
//  * @param req.body.board_name - title of the board (string)
//  * @param req.body.description - text body of the board [non specified type, in order to accept Quill]
//  * @param req.body.tags - tags, represented as COMMA SEPARATED WORD STRINGS
//  * @param req.body.description - text description of the board (string)
//  * @param req.user - JWT payload of authenticated user
//  * @returns void
//  */
export async function newBoard(req, res) {
  let i = {};
  if (req.body.title != undefined) {
    i.title = req.body.title;
  }
  if (req.body.description != undefined) {
    i.description = req.body.description;
  }
  i.creator = req.user.id;

  if (req.body.tags != undefined) {
    i.tags = sanitizeTags(req.body.tags);
  }
  if (req.body.body != undefined) {
    i.body = req.body.body;
  }
  if (req.body.tags != undefined) {
    i.tags = req.body.tags;
  }

  try {
    const user = await Users.get({ user_id: i.creator });
    if (user.length === 0)
      res.status(400).json({
        success: false,
        message: "The user does not exist"
      });

    const [newBoard] = await Boards.create(i);
    return res.status(200).json(newBoard);
  } catch (error) {
    console.log("error: ", error);
    res.status(400).json({ message: "Failed to create board", error: error });
  }
}

// /**
//  * Edit the tags and/or body of an board
//  * @param req.params.id - board_id of the board being edited
//  * @param req.body.body - board content for editing
//  * @param req.body.tags - board tags for editing... COMMA SEPARATED WORD STRINGS
//  * @param req.body.stringBody - string form of body, used for search indexing
//  * @param req.user - JWT payload of authenticated user
//  * @returns void
//  */
export async function editBoard(req, res) {
  let id = req.params.id;
  let i = {};
  if (req.body.title != undefined) {
    i.title = req.body.title;
  }
  if (req.body.description != undefined) {
    i.description = req.body.description;
  }
  i.creator = req.user.id;

  if (req.body.tags != undefined) {
    i.tags = sanitizeTags(req.body.tags);
  }
  if (req.body.body != undefined) {
    i.body = req.body.body;
  }
  if (req.body.tags != undefined) {
    i.tags = req.body.tags;
  }

  try {
    const [oldBoard] = await Boards.get({ board_id: id });
    if (!oldBoard)
      return res.status(404).json({ message: "The board doesn't exist" });
    if (oldBoard.creator != i.creator);
    return res
      .status(401)
      .json({ message: "User not authorised to edit the board" });
    i.board_id = id;
    await Boards.update(i)
      .then(i => {
        res.status(200).json(["Successfully edited board", i]);
      })
      .catch(error => {
        console.log("error: ", error);
        res.status(400).json({ message: "Failed to edit board", error: error });
      });
  } catch (err) {
    console.log("err: ", err);
    res.status(400).json({ message: "Failed to edit board", error: err });
  }
}

/**
 * Delete a board
 * @param req.params.id - board_id of board to be removed
 * @param req.user - JWT payload of authenticated user
 * @returns void
 */
export async function deleteBoard(req, res) {
  let id = req.params.id;
  let user_id = req.user.id;
  try {
    const [board] = await Boards.get({ board_id: id });
    if (!board)
      return res.status(404).json({ message: "The board doesn't exist" });

    if (board.creator === user_id)
      return Boards.update({ board_id: id, deleted: true })
        .then(i => {
          res.status(200).json(["Successfully deleted board"]);
        })
        .catch(error => {
          res
            .status(400)
            .json({ message: "Failed to delete board", error: error });
        });
    return res.status(200).json(["The user Provided is incorrect", i]);
  } catch (error) {
    res.status(400).json({ message: "Failed to delete board", error: error });
  }
}

// /**
//  * Update the whole board based on its board_id
//  * @param req.params.id - board_id of the board
//  * @returns void
//  */
export async function manangeBoard(req, res) {
  console.log("manage board:");
  let board_id = req.params.id;
  const data = req.body;

  try {
    const boardUpdated = await BoardManager.boardUpdate(
      Object.assign({ board_id }, data)
    );

    if (boardUpdated) {
      const newBoard = await BoardManager.boardFetch(board_id);
      return res.status(200).json(newBoard);
    }
    return res.status(500).json({ message: "Something went wront" });
  } catch (error) {
    console.log("error: ", error);
    res.status(400).json({ message: "Failed to update board", error: error });
  }
}

// /**
//  * Get  all the columns on of board
//  * @param req.params.board_id - board_id of the board
//  * @returns void
//  */
export async function getColumns(req, res) {
  let board_id = req.params.board_id;
  let user_id = req.user.id;
  try {
    const [board] = await Boards.get({ board_id: board_id });
    if (!board)
      return res.status(404).json({ message: "The board doesn't exist" });

    if (!board)
      res.status(404).json({ message: "Board doesn't exist", error: error });
    if (board.creator != user_id)
      res.status(401).json({
        message: "User not authorised to access the board columns",
        error: error
      });
    const boardColumns = await BoardColumns.get({ board_id: board_id });
    console.log("boardColumns: ", boardColumns);
    const columns = await Promise.all(
      boardColumns.map(({ column_id }) =>
        Columns.get({ column_id: column_id }).then(x => x[0])
      )
    );
    return res.status(200).json(columns);
  } catch (error) {
    console.log("error: ", error);
    res.status(400).json({ message: "Failed to fetch columns", error: error });
  }
}

// /**
//  * Get  all the columns on of board
//  * @param req.params.column_id - column_id of the column
//  * @returns void
//  */
export async function getColumn(req, res) {
  let column_id = req.params.column_id;
  let user_id = req.user.id;
  try {
    const [column] = await Columns.get({ column_id: column_id });
    if (!column)
      res.status(404).json({ message: "Column doesn't exist", error: error });
    const [board] = await Boards.get({ board_id: column.board_id });
    if (!board)
      return res.status(404).json({ message: "The board doesn't exist" });
    if (board.creator != user_id)
      return res.status(401).json({
        message: "User not authorised to access the board columns"
      });
    return res.status(200).json(column);
  } catch (error) {
    console.log("error: ", error);
    res.status(400).json({ message: "Failed to fetch columns", error: error });
  }
}

// /**
//  * Get  all the task on a board
//  * @param req.params.task_id - task_id of the column
//  * @returns void
//  */
export async function getTask(req, res) {
  console.log("getTask: ", getTask);
  let task_id = req.params.task_id;
  let user_id = req.user.id;
  try {
    const [task] = await Tasks.get({ task_id: task_id });
    if (!task) return res.status(404).json({ message: "Task doesn't exist" });
    const [userTask] = await UserTasks.get({ task_id: task.task_id });
    if (!userTask)
      return res.status(404).json({ message: "Taks doesn exist for user" });

    if (userTask.user_id != user_id)
      return res.status(401).json({
        message: "User not authorised to access this task"
      });
    return res.status(200).json(task);
  } catch (error) {
    console.log("error: ", error);
    res.status(400).json({ message: "Failed to fetch task", error: error });
  }
}

// /**
//  * Get  all the tasks of a user
//  * @param req.body.id - user_id of the user
//  * @returns void
//  */
export async function getAllTasks(req, res) {
  let user_id = req.user.id;
  try {
    const userTasks = await UserTasks.get({ user_id: user_id });
    console.log("userTasks: ", userTasks);

    const tasks = await Promise.all(
      userTasks.map(({ task_id }) => Tasks.get({ task_id }).then(x => x[0]))
    );
    console.log("tasks: ", tasks);
    return res.status(200).json(tasks);
  } catch (error) {
    console.log("error: ", error);
    res.status(400).json({ message: "Failed to fetch task", error: error });
  }
}
