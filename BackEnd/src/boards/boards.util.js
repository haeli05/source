const Columns = require("../pgModels/columns");
const BoardColumns = require("../pgModels/board_columns");
const Tasks = require("../pgModels/tasks");
const ColumnTasks = require("../pgModels/column_tasks");
let P = require("bluebird");

const boardData = {
  board_id: "42e0d014-ba6c-4412-b1f3-b6ff5b3a4d6d",
  data: {
    tasks: {
      "tasking-1": {
        id: "tasking-1",
        title: "Database Migration",
        content: "MongoDB to PostGreSQL",
        due_date: "",
        compensation: 1500,
        tags: []
      },
      "tasking-2": {
        id: "tasking-2",
        title: "Git Hosting",
        content: "GitLab to Gitolite",
        due_date: "",
        compensation: 1500,
        tags: []
      },
      "tasking-3": {
        id: "tasking-3",
        title: "Social Logins (FB, Twitter, GitHub,Google)",
        content: "Integrate logins with these methods",
        due_date: "",
        compensation: 1000,
        tags: []
      },
      "tasking-4": {
        id: "tasking-4",
        title: "Real Time Notifications",
        content: "Apollo",
        due_date: "",
        compensation: 500,
        tags: []
      },
      "tasking-5": {
        id: "tasking-5",
        title: "Riot Chat integration",
        content: "Riot.im",
        due_date: "",
        compensation: 500,
        tags: []
      },
      "tasking-6": {
        id: "tasking-6",
        title: "Marketing funnel",
        content: "Discuss",
        due_date: "",
        compensation: 500,
        tags: []
      }
    },
    columns: {
      "columning-1": {
        column_id: "columning-1",
        title: "Front End",
        taskids: ["tasking-3", "tasking-4", "tasking-6"]
      },
      "columning-2": {
        column_id: "columning-2",
        title: "Back End",
        taskids: ["tasking-1", "tasking-2", "tasking-3"]
      },
      "columning-3": {
        column_id: "columning-3",
        title: "Misc",
        taskids: ["tasking-5"]
      }
    }
  },
  columnOrder: ["columning-1", "columning-2", "columning-3"]
};

const boardUpdate = async boardData => {
  // console.log("boardData: ", boardData);
  return P.try(async () => {
    try {
      const { board_id } = boardData;
      //Getting all the board columns
      const boardColumns = await Columns.get({ board_id });

      //Selecting the Columns to delete
      let columnsToDelete = boardColumns.filter(boardColumn => {
        if (!boardData.data.columns[boardColumn.column_id]) return true;
      });
      //Deleting Columns
      columnsToDelete = await Promise.all(
        columnsToDelete.map(async ({ column_id, board_columns_id }) => {
          await Columns.update({ column_id, deleted: true });
          await BoardColumns.update({ board_columns_id, deleted: true });
        })
      );
      //Upserting columns
      const columns = await Promise.all(
        boardData.columnOrder.map((column, order) => {
          column = JSON.parse(JSON.stringify(boardData.data.columns[column]));
          column.board_id = board_id;
          delete column.taskids;
          return Columns.upsert(column);
        })
      );
      //Upserting column order
      const a = await Promise.all(
        columns.map((column, order) => {
          const { board_id, column_id } = column;
          return BoardColumns.upsert({
            board_id,
            column_id,
            order,
            deleted: false
          });
        })
      );

      //Manage Tasks for Each column
      columns.map(async ({ column_id }) => {
        const { taskids } = boardData.data.columns[column_id];
        const columnTasks = await Tasks.get({ column_id });
        //Selecting Tasks to delete
        let tasksToDelete = columnTasks.filter(columnTask => {
          if (!boardData.data.tasks[columnTask.task_id]) return true;
        });
        //Deleting task
        tasksToDelete = await Promise.all(
          tasksToDelete.map(async ({ column_id, task_id }) => {
            // console.log("in delete column_id, task_id: ", column_id, task_id);
            await Tasks.update({ task_id, deleted: true });
            await ColumnTasks.update({
              column_id,
              task_id,
              deleted: true
            });
          })
        );
        // Upserting tasks
        const tasks = await Promise.all(
          taskids.map(task_id => {
            let task = boardData.data.tasks[task_id];
            delete task.id;
            task.task_id = task_id;
            task.due_date = isNaN(Date.parse(task.due_date))
              ? null
              : new Date(task.due_date);
            task = Object.assign({ column_id, board_id }, task);

            return Tasks.upsert(task);
          })
        );

        // Upserting task order
        const a = await Promise.all(
          tasks.map((task, order) => {
            const { task_id, column_id } = task;
            return ColumnTasks.upsert({
              task_id,
              column_id,
              order,
              deleted: false
            });
          })
        );
      });
    } catch (error) {
      throw error;
    }
    return true;
  });
};

const boardFetch = board_id => {
  return P.try(async () => {
    try {
      const data = { board_id };

      const boardColumns = await BoardColumns.get({ board_id }).then(
        boardColumns =>
          boardColumns.sort((a, b) =>
            a.order > b.order ? 1 : b.order > a.order ? -1 : 0
          )
      );
      //set column order
      data.columnOrder = boardColumns.map(({ column_id }) => column_id);

      const columns = await P.all(
        boardColumns.map(({ column_id }) =>
          Columns.get({ column_id }).then(x => x[0])
        )
      );

      data.columns = {};
      data.tasks = {};

      await P.all(
        columns.map(column => {
          return P.try(async () => {
            const { column_id, title } = column;
            data.columns[column_id] = { column_id, title };

            const columnTasks = await ColumnTasks.get({ column_id }).then(
              columnTasks =>
                columnTasks.sort((a, b) =>
                  a.order > b.order ? 1 : b.order > a.order ? -1 : 0
                )
            );
            // console.log("columnTasks: ", columnTasks);
            // set task order
            data.columns[column_id].taskids = columnTasks.map(
              ({ task_id }) => task_id
            );

            await Promise.all(
              data.columns[column_id].taskids.map(async task_id => {
                const [task] = await Tasks.get({ task_id });

                if (task) {
                  const {
                    task_id: id,
                    title,
                    content,
                    due_date,
                    compensation,
                    tags
                  } = task;
                  data.tasks[id] = {
                    id,
                    title,
                    content,
                    due_date,
                    compensation,
                    tags
                  };
                }
              })
            );
          });
        })
      );

      return data;
    } catch (error) {
      throw error;
    }
  });
};

// boardFetch("42e0d014-ba6c-4412-b1f3-b6ff5b3a4d6d").then(x => console.log(x));
// boardUpdate(boardData).then(x => console.log(x));

module.exports = {
  boardUpdate,
  boardFetch
};
