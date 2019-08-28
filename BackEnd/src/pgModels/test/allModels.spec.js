const expect = require("chai").expect;
const uuid = require("uuid/v4");
const Users = require("../users");

const testBed = {};

const userTemplate = () => {
  return {
    settings: { a: 1, b: 3, c: 4 },
    full_name: "Harish ",
    username: "harishy" + uuid().slice(0, 3),
    bio: "This is the bio I am working with",
    email: "harishy@protonmail.com" + uuid().slice(0, 3),
    password: uuid(),
    location: "India",
    website: "harish.com",
    skills: ["javascript", "react", "html"],
    social_links: ["facebook.com", "twitter.com"],
    wallet_links: ["stripe.com", "paypal.com", "transferwise"],
    avatar: "https://s3.aws.lalala/adafafafda",
    tags_following: ["yolo, yola", "tota"]
  };
};

describe("Testing User Model", function() {
  it("Should Create User", async function() {
    const userData = userTemplate();
    const user = await Users.create(userData);
    testBed.user = user[0];
    Object.keys(userData).map(key => {
      if (key) expect(testBed.user[key]).eql(userData[key]);
    });
  });
  it("Should Get User Data", async function() {
    const userFetched = await Users.get({ user_id: testBed.user.user_id });
    Object.keys(userFetched[0]).map(key => {
      if (key) expect(testBed.user[key]).eql(userFetched[0][key]);
    });
  });
  it("Should Edit User", async function() {
    const newName = userTemplate().full_name + uuid().slice(0, 3);
    const updateUser = await Users.update({
      user_id: testBed.user.user_id,
      full_name: newName
    });
    testBed.user = updateUser[0];
    expect(testBed.user.full_name).eql(newName);
  });

  describe("Should Test Delete User", async function() {
    it("Should Create Dummy User", async function() {
      const dummyUserData = userTemplate();
      const user = await Users.create(dummyUserData);
      testBed.dummyUser = user[0];
      Object.keys(dummyUserData).map(key => {
        if (key) expect(testBed.dummyUser[key]).eql(dummyUserData[key]);
      });
    });
    it("Should check Dummy User Exists", async function() {
      const dummyFetched = await Users.get({
        user_id: testBed.dummyUser.user_id
      });
      Object.keys(dummyFetched[0]).map(key => {
        if (key) expect(testBed.dummyUser[key]).eql(dummyFetched[0][key]);
      });
    });
    it("Should Delete Dummy User", async function() {
      const deleted = await Users.delete({
        user_id: testBed.dummyUser.user_id
      });
      console.log("deleted: ", deleted);

      expect(deleted).equals(1);
    });
    it("Should Test Dummy User Doesn't exist in Database anymore", async function() {
      const dummyFetched = await Users.get({
        user_id: testBed.dummyUser.user_id
      });
      delete testBed.dummyUser;
      expect(dummyFetched.length).equals(0);
    });
    expect(0).equals(0);
  });
});

const Projects = require("../projects");

const projectTemplate = () => {
  return {
    creator: testBed.user.user_id,
    contributors: "Harish Yadav" + uuid().slice(0, 3),
    settings: { a: 1, b: 3, c: 4 },
    project_name: "New Project" + uuid().slice(0, 3),
    description: "This is the new project I am working with",
    tags: ["yolo, yola", "tota"],
    social_links: ["facebook.com", "twitter.com"],
    wallet_links: ["stripe.com", "paypal.com", "transferwise"],
    private: true
  };
};

describe("Testing Project Model", function() {
  it("Should Create Project", async function() {
    const projectData = projectTemplate();
    const project = await Projects.create(projectData);
    testBed.project = project[0];
    Object.keys(projectData).map(key => {
      if (key) expect(testBed.project[key]).eql(projectData[key]);
    });
  });
  it("Should Get Project Data", async function() {
    const projectFetched = await Projects.get({
      project_id: testBed.project.project_id
    });
    Object.keys(projectFetched[0]).map(key => {
      if (key) expect(testBed.project[key]).eql(projectFetched[0][key]);
    });
  });
  it("Should Edit Project Data", async function() {
    const newContributor = projectTemplate().contributors + uuid().slice(0, 3);
    const updatedProject = await Projects.update({
      project_id: testBed.project.project_id,
      contributors: newContributor
    });
    testBed.project = updatedProject[0];
    expect(testBed.project.contributors).eql(newContributor);
  });

  describe("Should Test Delete Project", async function() {
    it("Should Create Dummy Project", async function() {
      const dummyProjectData = projectTemplate();
      const project = await Projects.create(dummyProjectData);
      testBed.dummyProject = project[0];
      Object.keys(dummyProjectData).map(key => {
        if (key) expect(testBed.dummyProject[key]).eql(dummyProjectData[key]);
      });
    });
    it("Should check Dummy Project Exists", async function() {
      const dummyFetched = await Projects.get({
        project_id: testBed.dummyProject.project_id
      });
      Object.keys(dummyFetched[0]).map(key => {
        if (key) expect(testBed.dummyProject[key]).eql(dummyFetched[0][key]);
      });
    });
    it("Should Delete Dummy Project", async function() {
      const deleted = await Projects.delete({
        project_id: testBed.dummyProject.project_id
      });
      expect(deleted).equals(1);
    });
    it("Should Test Dummy Project Doesn't exist in Database anymore", async function() {
      const dummyFetched = await Projects.get({
        project_id: testBed.dummyProject.project_id
      });
      delete testBed.dummyUser;
      expect(dummyFetched.length).equals(0);
    });
    expect(0).equals(0);
  });
});

const Ideas = require("../ideas");

const ideaTemplate = () => {
  return {
    idea_name: "Best Idea Ever" + uuid().slice(0, 3),
    body: "This is the new project I am working with",
    string_body: "This is the new project I am working with",
    creator: testBed.user.user_id,
    tags: ["yolo, yola", "tota"],
    upvotes: 100,
    private: true
  };
};

describe("Testing Idea Model", function() {
  it("Should Create Idea", async function() {
    const ideaData = ideaTemplate();
    const idea = await Ideas.create(ideaData);
    testBed.idea = idea[0];
    Object.keys(ideaData).map(key => {
      if (key) expect(testBed.idea[key]).eql(ideaData[key]);
    });
  });
  it("Should Get Idea Data", async function() {
    const ideaFetched = await Ideas.get({
      idea_id: testBed.idea.idea_id
    });
    Object.keys(ideaFetched[0]).map(key => {
      if (key) expect(testBed.idea[key]).eql(ideaFetched[0][key]);
    });
  });
  it("Should Edit Idea Data", async function() {
    const newIdeaName = ideaTemplate().idea_name + uuid().slice(0, 3);
    const updatedIdea = await Ideas.update({
      idea_id: testBed.idea.idea_id,
      idea_name: newIdeaName
    });
    testBed.idea = updatedIdea[0];
    expect(testBed.idea.idea_name).eql(newIdeaName);
  });

  describe("Should Test Delete Idea", async function() {
    it("Should Create Dummy Idea", async function() {
      const dummyIdeaData = ideaTemplate();
      const idea = await Ideas.create(dummyIdeaData);
      testBed.dummyIdea = idea[0];
      Object.keys(dummyIdeaData).map(key => {
        if (key) expect(testBed.dummyIdea[key]).eql(dummyIdeaData[key]);
      });
    });
    it("Should check Dummy Idea Exists", async function() {
      const dummyFetched = await Ideas.get({
        idea_id: testBed.dummyIdea.idea_id
      });
      Object.keys(dummyFetched[0]).map(key => {
        if (key) expect(testBed.dummyIdea[key]).eql(dummyFetched[0][key]);
      });
    });
    it("Should Delete Dummy Idea", async function() {
      const deleted = await Ideas.delete({
        idea_id: testBed.dummyIdea.idea_id
      });
      expect(deleted).equals(1);
    });
    it("Should Test Dummy Idea Doesn't exist in Database anymore", async function() {
      const dummyFetched = await Ideas.get({
        idea_id: testBed.dummyIdea.idea_id
      });
      delete testBed.dummyUser;
      expect(dummyFetched.length).equals(0);
    });
    expect(0).equals(0);
  });
});

//Testing Comments

const Comments = require("../comments");

const commentTemplate = () => {
  return {
    user: testBed.user.user_id,
    body: "Another Greate comment Ever" + uuid().slice(0, 3),
    upvotes: 100
  };
};
describe("Testing Comment Model", function() {
  it("Should Create Comment", async function() {
    const commentData = commentTemplate();
    const comment = await Comments.create(commentData);
    testBed.comment = comment[0];
    Object.keys(commentData).map(key => {
      if (key) expect(testBed.comment[key]).eql(commentData[key]);
    });
  });
  it("Should Get Comment Data", async function() {
    const commentFetched = await Comments.get({
      comment_id: testBed.comment.comment_id
    });
    Object.keys(commentFetched[0]).map(key => {
      if (key) expect(testBed.comment[key]).eql(commentFetched[0][key]);
    });
  });
  it("Should Edit Comment Data", async function() {
    const newCommentBody = commentTemplate().body + uuid().slice(0, 3);
    const updatedComment = await Comments.update({
      comment_id: testBed.comment.comment_id,
      body: newCommentBody
    });
    testBed.comment = updatedComment[0];
    expect(testBed.comment.body).eql(newCommentBody);
  });

  describe("Should Test Delete Comment", async function() {
    it("Should Create Dummy Comment", async function() {
      const dummyCommentData = commentTemplate();
      const comment = await Comments.create(dummyCommentData);
      testBed.dummyComment = comment[0];
      Object.keys(dummyCommentData).map(key => {
        if (key) expect(testBed.dummyComment[key]).eql(dummyCommentData[key]);
      });
    });
    it("Should check Dummy Comment Exists", async function() {
      const dummyFetched = await Comments.get({
        comment_id: testBed.dummyComment.comment_id
      });
      Object.keys(dummyFetched[0]).map(key => {
        if (key) expect(testBed.dummyComment[key]).eql(dummyFetched[0][key]);
      });
    });
    it("Should Delete Dummy Comment", async function() {
      const deleted = await Comments.delete({
        comment_id: testBed.dummyComment.comment_id
      });
      expect(deleted).equals(1);
    });
    it("Should Test Dummy Comment Doesn't exist in Database anymore", async function() {
      const dummyFetched = await Comments.get({
        comment_id: testBed.dummyComment.comment_id
      });
      delete testBed.dummyUser;
      expect(dummyFetched.length).equals(0);
    });
    expect(0).equals(0);
  });
});

// Boards

const Boards = require("../boards");

const boardTemplate = () => {
  return {
    creator: testBed.user.user_id,
    title: "Another Board title" + uuid().slice(0, 2),
    description: "This is your board description" + uuid().slice(0, 2),
    tags: ["yolo, yola", "tota"],
    body: "Another Greate comment Ever" + uuid().slice(0, 2)
  };
};

describe("Testing Board Model", function() {
  it("Should Create Board", async function() {
    const boardData = boardTemplate();
    const board = await Boards.create(boardData);
    testBed.board = board[0];
    Object.keys(boardData).map(key => {
      if (key) expect(testBed.board[key]).eql(boardData[key]);
    });
  });
  it("Should Get Board Data", async function() {
    const boardFetched = await Boards.get({
      board_id: testBed.board.board_id
    });
    Object.keys(boardFetched[0]).map(key => {
      if (key) expect(testBed.board[key]).eql(boardFetched[0][key]);
    });
  });
  it("Should Edit Board Data", async function() {
    const newBoardDescription =
      boardTemplate().description + uuid().slice(0, 3);
    const updatedBoard = await Boards.update({
      board_id: testBed.board.board_id,
      description: newBoardDescription
    });
    testBed.board = updatedBoard[0];
    expect(testBed.board.description).eql(newBoardDescription);
  });

  describe("Should Test Delete Board", async function() {
    it("Should Create Dummy Board", async function() {
      const dummyBoardData = boardTemplate();
      const board = await Boards.create(dummyBoardData);
      testBed.dummyBoard = board[0];
      Object.keys(dummyBoardData).map(key => {
        if (key) expect(testBed.dummyBoard[key]).eql(dummyBoardData[key]);
      });
    });
    it("Should check Dummy Board Exists", async function() {
      const dummyFetched = await Boards.get({
        board_id: testBed.dummyBoard.board_id
      });
      Object.keys(dummyFetched[0]).map(key => {
        if (key) expect(testBed.dummyBoard[key]).eql(dummyFetched[0][key]);
      });
    });
    it("Should Delete Dummy Board", async function() {
      const deleted = await Boards.delete({
        board_id: testBed.dummyBoard.board_id
      });
      expect(deleted).equals(1);
    });
    it("Should Test Dummy Board Doesn't exist in Database anymore", async function() {
      const dummyFetched = await Boards.get({
        board_id: testBed.dummyBoard.board_id
      });
      delete testBed.dummyUser;
      expect(dummyFetched.length).equals(0);
    });
    expect(0).equals(0);
  });
});

//Columns

const Columns = require("../columns");

const columnTemplate = () => {
  return {
    board_id: testBed.board.board_id,
    title: "Column - title" + uuid().slice(0, 3),
    private: false,
    tags: ["yolo, yola", "tota"]
  };
};

describe("Testing Column Model", function() {
  it("Should Create Column", async function() {
    const columnData = columnTemplate();
    const column = await Columns.create(columnData);
    testBed.column = column[0];
    Object.keys(columnData).map(key => {
      if (key) expect(testBed.column[key]).eql(columnData[key]);
    });
  });
  it("Should Get Column Data", async function() {
    const columnFetched = await Columns.get({
      column_id: testBed.column.column_id
    });
    Object.keys(columnFetched[0]).map(key => {
      if (key) expect(testBed.column[key]).eql(columnFetched[0][key]);
    });
  });
  it("Should Edit Column Data", async function() {
    const newColumnTitle = columnTemplate().title + uuid().slice(0, 3);
    const updatedColumn = await Columns.update({
      column_id: testBed.column.column_id,
      title: newColumnTitle
    });
    testBed.column = updatedColumn[0];
    expect(testBed.column.title).eql(newColumnTitle);
  });

  describe("Should Test Delete Column", async function() {
    it("Should Create Dummy Column", async function() {
      const dummyColumnData = columnTemplate();
      const column = await Columns.create(dummyColumnData);
      testBed.dummyColumn = column[0];
      Object.keys(dummyColumnData).map(key => {
        if (key) expect(testBed.dummyColumn[key]).eql(dummyColumnData[key]);
      });
    });
    it("Should check Dummy Column Exists", async function() {
      const dummyFetched = await Columns.get({
        column_id: testBed.dummyColumn.column_id
      });
      Object.keys(dummyFetched[0]).map(key => {
        if (key) expect(testBed.dummyColumn[key]).eql(dummyFetched[0][key]);
      });
    });
    it("Should Delete Dummy Column", async function() {
      const deleted = await Columns.delete({
        column_id: testBed.dummyColumn.column_id
      });
      expect(deleted).equals(1);
    });
    it("Should Test Dummy Column Doesn't exist in Database anymore", async function() {
      const dummyFetched = await Columns.get({
        column_id: testBed.dummyColumn.column_id
      });
      delete testBed.dummyUser;
      expect(dummyFetched.length).equals(0);
    });
    expect(0).equals(0);
  });
});

// Tasks

const Tasks = require("../tasks");

const taskTemplate = () => {
  return {
    board_id: testBed.board.board_id,
    creator: testBed.user.user_id,
    column_id: testBed.column.column_id,
    created: "created" + uuid().slice(0, 3),
    title: "another task title" + uuid().slice(0, 3),
    content: "this is some content for task" + uuid().slice(0, 3),
    compensation: 50,
    private: false,
    tags: ["yolo, yola", "tota"],
    private: false
  };
};

describe("Testing Task Model", function() {
  it("Should Create Task", async function() {
    const taskData = taskTemplate();
    const task = await Tasks.create(taskData);
    testBed.task = task[0];
    Object.keys(taskData).map(key => {
      if (key) expect(testBed.task[key]).eql(taskData[key]);
    });
  });
  it("Should Get Task Data", async function() {
    const taskFetched = await Tasks.get({
      task_id: testBed.task.task_id
    });
    Object.keys(taskFetched[0]).map(key => {
      if (key) expect(testBed.task[key]).eql(taskFetched[0][key]);
    });
  });
  it("Should Edit Task Data", async function() {
    const newTaskTitle = taskTemplate().title + uuid().slice(0, 3);
    const updatedTask = await Tasks.update({
      task_id: testBed.task.task_id,
      title: newTaskTitle
    });
    testBed.task = updatedTask[0];
    expect(testBed.task.title).eql(newTaskTitle);
  });

  describe("Should Test Delete Task", async function() {
    it("Should Create Dummy Task", async function() {
      const dummyTaskData = taskTemplate();
      const task = await Tasks.create(dummyTaskData);
      testBed.dummyTask = task[0];
      Object.keys(dummyTaskData).map(key => {
        if (key) expect(testBed.dummyTask[key]).eql(dummyTaskData[key]);
      });
    });
    it("Should check Dummy Task Exists", async function() {
      const dummyFetched = await Tasks.get({
        task_id: testBed.dummyTask.task_id
      });
      Object.keys(dummyFetched[0]).map(key => {
        if (key) expect(testBed.dummyTask[key]).eql(dummyFetched[0][key]);
      });
    });
    it("Should Delete Dummy Task", async function() {
      const deleted = await Tasks.delete({
        task_id: testBed.dummyTask.task_id
      });
      expect(deleted).equals(1);
    });
    it("Should Test Dummy Task Doesn't exist in Database anymore", async function() {
      const dummyFetched = await Tasks.get({
        task_id: testBed.dummyTask.task_id
      });
      delete testBed.dummyUser;
      expect(dummyFetched.length).equals(0);
    });
    expect(0).equals(0);
  });
});

//User Tasks

const UserTasks = require("../user_tasks");

const userTaskTemplate = () => {
  return {
    user_id: testBed.user.user_id,
    task_id: testBed.task.task_id
  };
};

describe("Testing UserTask Model", function() {
  it("Should Create UserTask", async function() {
    const userTaskData = userTaskTemplate();
    const userTask = await UserTasks.create(userTaskData);
    testBed.userTask = userTask[0];
    Object.keys(userTaskData).map(key => {
      if (key) expect(testBed.userTask[key]).eql(userTaskData[key]);
    });
  });
  it("Should Get UserTask Data", async function() {
    const userTaskFetched = await UserTasks.get({
      user_tasks_id: testBed.userTask.user_tasks_id
    });
    Object.keys(userTaskFetched[0]).map(key => {
      if (key) expect(testBed.userTask[key]).eql(userTaskFetched[0][key]);
    });
  });
  it("Should Edit UserTask Data", async function() {
    const taskData = taskTemplate();
    const newTask = await Tasks.create(taskData); // Creating a new task to be updated in the user_task_id

    const updatedUserTask = await UserTasks.update({
      user_tasks_id: testBed.userTask.user_tasks_id,
      task_id: newTask[0].task_id
    });
    testBed.userTask = updatedUserTask[0];
    expect(testBed.userTask.task_id).eql(newTask[0].task_id);
  });

  describe("Should Test Delete UserTask", async function() {
    it("Should Create Dummy UserTask", async function() {
      const dummyUserTaskData = userTaskTemplate();
      const userTask = await UserTasks.create(dummyUserTaskData);
      testBed.dummyUserTask = userTask[0];
      Object.keys(dummyUserTaskData).map(key => {
        if (key) expect(testBed.dummyUserTask[key]).eql(dummyUserTaskData[key]);
      });
    });
    it("Should check Dummy UserTask Exists", async function() {
      const dummyFetched = await UserTasks.get({
        user_tasks_id: testBed.dummyUserTask.user_tasks_id
      });
      Object.keys(dummyFetched[0]).map(key => {
        if (key) expect(testBed.dummyUserTask[key]).eql(dummyFetched[0][key]);
      });
    });
    it("Should Delete Dummy UserTask", async function() {
      const deleted = await UserTasks.delete({
        user_tasks_id: testBed.dummyUserTask.user_tasks_id
      });
      expect(deleted).equals(1);
    });
    it("Should Test Dummy UserTask Doesn't exist in Database anymore", async function() {
      const dummyFetched = await UserTasks.get({
        user_tasks_id: testBed.dummyUserTask.user_tasks_id
      });
      delete testBed.dummyUser;
      expect(dummyFetched.length).equals(0);
    });
    expect(0).equals(0);
  });
});

//Column Tasks

const ColumnTasks = require("../column_tasks");

const columnTaskTemplate = () => {
  return {
    column_id: testBed.column.column_id,
    task_id: testBed.task.task_id
  };
};

describe("Testing ColumnTask Model", function() {
  it("Should Create ColumnTask", async function() {
    const columnTaskData = columnTaskTemplate();
    const columnTask = await ColumnTasks.create(columnTaskData);
    testBed.columnTask = columnTask[0];
    Object.keys(columnTaskData).map(key => {
      if (key) expect(testBed.columnTask[key]).eql(columnTaskData[key]);
    });
  });
  it("Should Get ColumnTask Data", async function() {
    const columnTaskFetched = await ColumnTasks.get({
      column_tasks_id: testBed.columnTask.column_tasks_id
    });
    Object.keys(columnTaskFetched[0]).map(key => {
      if (key) expect(testBed.columnTask[key]).eql(columnTaskFetched[0][key]);
    });
  });
  it("Should Edit ColumnTask Data", async function() {
    const taskData = taskTemplate();
    const newTask = await Tasks.create(taskData); // Creating a new task to be updated in the column_task_id

    const updatedColumnTask = await ColumnTasks.update({
      column_tasks_id: testBed.columnTask.column_tasks_id,
      task_id: newTask[0].task_id
    });
    testBed.columnTask = updatedColumnTask[0];
    expect(testBed.columnTask.task_id).eql(newTask[0].task_id);
  });

  describe("Should Test Delete ColumnTask", async function() {
    it("Should Create Dummy ColumnTask", async function() {
      const dummyColumnTaskData = columnTaskTemplate();
      const columnTask = await ColumnTasks.create(dummyColumnTaskData);
      testBed.dummyColumnTask = columnTask[0];
      Object.keys(dummyColumnTaskData).map(key => {
        if (key)
          expect(testBed.dummyColumnTask[key]).eql(dummyColumnTaskData[key]);
      });
    });
    it("Should check Dummy ColumnTask Exists", async function() {
      const dummyFetched = await ColumnTasks.get({
        column_tasks_id: testBed.dummyColumnTask.column_tasks_id
      });
      Object.keys(dummyFetched[0]).map(key => {
        if (key) expect(testBed.dummyColumnTask[key]).eql(dummyFetched[0][key]);
      });
    });
    it("Should Delete Dummy ColumnTask", async function() {
      const deleted = await ColumnTasks.delete({
        column_tasks_id: testBed.dummyColumnTask.column_tasks_id
      });
      expect(deleted).equals(1);
    });
    it("Should Test Dummy ColumnTask Doesn't exist in Database anymore", async function() {
      const dummyFetched = await ColumnTasks.get({
        column_tasks_id: testBed.dummyColumnTask.column_tasks_id
      });
      delete testBed.dummyUser;
      expect(dummyFetched.length).equals(0);
    });
    expect(0).equals(0);
  });
});

// Board Columns
const BoardColumns = require("../board_columns");

const boardColumnTemplate = () => {
  return {
    board_id: testBed.board.board_id,
    column_id: testBed.column.column_id
  };
};

describe("Testing BoardColumn Model", function() {
  it("Should Create BoardColumn", async function() {
    const boardColumnData = boardColumnTemplate();
    const boardColumn = await BoardColumns.create(boardColumnData);
    testBed.boardColumn = boardColumn[0];
    Object.keys(boardColumnData).map(key => {
      if (key) expect(testBed.boardColumn[key]).eql(boardColumnData[key]);
    });
  });
  it("Should Get BoardColumn Data", async function() {
    const boardColumnFetched = await BoardColumns.get({
      board_columns_id: testBed.boardColumn.board_columns_id
    });
    Object.keys(boardColumnFetched[0]).map(key => {
      if (key) expect(testBed.boardColumn[key]).eql(boardColumnFetched[0][key]);
    });
  });
  it("Should Edit BoardColumn Data", async function() {
    const columnData = columnTemplate();
    const newTask = await Tasks.create(columnData); // Creating a new column to be updated in the board_column_id

    const updatedBoardColumn = await BoardColumns.update({
      board_columns_id: testBed.boardColumn.board_columns_id,
      column_id: newTask[0].column_id
    });
    testBed.boardColumn = updatedBoardColumn[0];
    expect(testBed.boardColumn.column_id).eql(newTask[0].column_id);
  });

  describe("Should Test Delete BoardColumn", async function() {
    it("Should Create Dummy BoardColumn", async function() {
      const dummyBoardColumnData = boardColumnTemplate();
      const boardColumn = await BoardColumns.create(dummyBoardColumnData);
      testBed.dummyBoardColumn = boardColumn[0];
      Object.keys(dummyBoardColumnData).map(key => {
        if (key)
          expect(testBed.dummyBoardColumn[key]).eql(dummyBoardColumnData[key]);
      });
    });
    it("Should check Dummy BoardColumn Exists", async function() {
      const dummyFetched = await BoardColumns.get({
        board_columns_id: testBed.dummyBoardColumn.board_columns_id
      });
      Object.keys(dummyFetched[0]).map(key => {
        if (key)
          expect(testBed.dummyBoardColumn[key]).eql(dummyFetched[0][key]);
      });
    });
    it("Should Delete Dummy BoardColumn", async function() {
      const deleted = await BoardColumns.delete({
        board_columns_id: testBed.dummyBoardColumn.board_columns_id
      });
      expect(deleted).equals(1);
    });
    it("Should Test Dummy BoardColumn Doesn't exist in Database anymore", async function() {
      const dummyFetched = await BoardColumns.get({
        board_columns_id: testBed.dummyBoardColumn.board_columns_id
      });
      delete testBed.dummyUser;
      expect(dummyFetched.length).equals(0);
    });
    expect(0).equals(0);
  });
});

//Project Permissions

const ProjectPermissions = require("../project_permissions");

const projectPermissionsTemplate = () => {
  return {
    project_id: testBed.project.project_id,
    user_id: testBed.user.user_id
  };
};

describe("Testing ProjectPermission Model", function() {
  it("Should Create ProjectPermission", async function() {
    const projectPermissionsData = projectPermissionsTemplate();
    const projectPermissions = await ProjectPermissions.create(
      projectPermissionsData
    );
    testBed.projectPermissions = projectPermissions[0];
    Object.keys(projectPermissionsData).map(key => {
      if (key)
        expect(testBed.projectPermissions[key]).eql(
          projectPermissionsData[key]
        );
    });
  });
  it("Should Get ProjectPermission Data", async function() {
    const projectPermissionsFetched = await ProjectPermissions.get({
      project_permissions_id: testBed.projectPermissions.project_permissions_id
    });
    Object.keys(projectPermissionsFetched[0]).map(key => {
      if (key)
        expect(testBed.projectPermissions[key]).eql(
          projectPermissionsFetched[0][key]
        );
    });
  });
  it("Should Edit ProjectPermission Data", async function() {
    const userData = userTemplate();
    const newUser = await Users.create(userData); // Creating a new user to be updated in the project_user_id

    const updatedProjectPermission = await ProjectPermissions.update({
      project_permissions_id: testBed.projectPermissions.project_permissions_id,
      user_id: newUser[0].user_id
    });
    testBed.projectPermissions = updatedProjectPermission[0];
    expect(testBed.projectPermissions.user_id).eql(newUser[0].user_id);
  });

  describe("Should Test Delete ProjectPermission", async function() {
    it("Should Create Dummy ProjectPermission", async function() {
      const dummyProjectPermissionData = projectPermissionsTemplate();
      const projectPermissions = await ProjectPermissions.create(
        dummyProjectPermissionData
      );
      testBed.dummyProjectPermission = projectPermissions[0];
      Object.keys(dummyProjectPermissionData).map(key => {
        if (key)
          expect(testBed.dummyProjectPermission[key]).eql(
            dummyProjectPermissionData[key]
          );
      });
    });
    it("Should check Dummy ProjectPermission Exists", async function() {
      const dummyFetched = await ProjectPermissions.get({
        project_permissions_id:
          testBed.dummyProjectPermission.project_permissions_id
      });
      Object.keys(dummyFetched[0]).map(key => {
        if (key)
          expect(testBed.dummyProjectPermission[key]).eql(dummyFetched[0][key]);
      });
    });
    it("Should Delete Dummy ProjectPermission", async function() {
      const deleted = await ProjectPermissions.delete({
        project_permissions_id:
          testBed.dummyProjectPermission.project_permissions_id
      });
      expect(deleted).equals(1);
    });
    it("Should Test Dummy ProjectPermission Doesn't exist in Database anymore", async function() {
      const dummyFetched = await ProjectPermissions.get({
        project_permissions_id:
          testBed.dummyProjectPermission.project_permissions_id
      });
      delete testBed.dummyUser;
      expect(dummyFetched.length).equals(0);
    });
    expect(0).equals(0);
  });
});

// Idea Comment

const IdeaComments = require("../idea_comments");

const ideaCommentsTemplate = () => {
  return {
    idea_id: testBed.idea.idea_id,
    comment_id: testBed.comment.comment_id
  };
};

describe("Testing IdeaComment Model", function() {
  it("Should Create IdeaComment", async function() {
    const ideaCommentsData = ideaCommentsTemplate();
    const ideaComments = await IdeaComments.create(ideaCommentsData);
    testBed.ideaComments = ideaComments[0];
    Object.keys(ideaCommentsData).map(key => {
      if (key) expect(testBed.ideaComments[key]).eql(ideaCommentsData[key]);
    });
  });
  it("Should Get IdeaComment Data", async function() {
    const ideaCommentsFetched = await IdeaComments.get({
      idea_comments_id: testBed.ideaComments.idea_comments_id
    });
    Object.keys(ideaCommentsFetched[0]).map(key => {
      if (key)
        expect(testBed.ideaComments[key]).eql(ideaCommentsFetched[0][key]);
    });
  });
  it("Should Edit IdeaComment Data", async function() {
    const commentData = commentTemplate();
    const newComment = await Comments.create(commentData); // Creating a new comment to be updated in the idea_comment_id

    const updatedIdeaComment = await IdeaComments.update({
      idea_comments_id: testBed.ideaComments.idea_comments_id,
      comment_id: newComment[0].comment_id
    });
    testBed.ideaComments = updatedIdeaComment[0];
    expect(testBed.ideaComments.comment_id).eql(newComment[0].comment_id);
  });

  describe("Should Test Delete IdeaComment", async function() {
    it("Should Create Dummy IdeaComment", async function() {
      const dummyIdeaCommentData = ideaCommentsTemplate();
      const ideaComments = await IdeaComments.create(dummyIdeaCommentData);
      testBed.dummyIdeaComment = ideaComments[0];
      Object.keys(dummyIdeaCommentData).map(key => {
        if (key)
          expect(testBed.dummyIdeaComment[key]).eql(dummyIdeaCommentData[key]);
      });
    });
    it("Should check Dummy IdeaComment Exists", async function() {
      const dummyFetched = await IdeaComments.get({
        idea_comments_id: testBed.dummyIdeaComment.idea_comments_id
      });
      Object.keys(dummyFetched[0]).map(key => {
        if (key)
          expect(testBed.dummyIdeaComment[key]).eql(dummyFetched[0][key]);
      });
    });
    it("Should Delete Dummy IdeaComment", async function() {
      const deleted = await IdeaComments.delete({
        idea_comments_id: testBed.dummyIdeaComment.idea_comments_id
      });
      expect(deleted).equals(1);
    });
    it("Should Test Dummy IdeaComment Doesn't exist in Database anymore", async function() {
      const dummyFetched = await IdeaComments.get({
        idea_comments_id: testBed.dummyIdeaComment.idea_comments_id
      });
      delete testBed.dummyComment;
      expect(dummyFetched.length).equals(0);
    });
    expect(0).equals(0);
  });
});

// User Project

const UserProjects = require("../user_projects");

const userProjectsTemplate = () => {
  return {
    user_id: testBed.user.user_id,
    project_id: testBed.project.project_id
  };
};

describe("Testing UserProject Model", function() {
  it("Should Create UserProject", async function() {
    const userProjectsData = userProjectsTemplate();
    const userProjects = await UserProjects.create(userProjectsData);
    testBed.userProjects = userProjects[0];
    Object.keys(userProjectsData).map(key => {
      if (key) expect(testBed.userProjects[key]).eql(userProjectsData[key]);
    });
  });
  it("Should Get UserProject Data", async function() {
    const userProjectsFetched = await UserProjects.get({
      user_projects_id: testBed.userProjects.user_projects_id
    });
    Object.keys(userProjectsFetched[0]).map(key => {
      if (key)
        expect(testBed.userProjects[key]).eql(userProjectsFetched[0][key]);
    });
  });
  it("Should Edit UserProject Data", async function() {
    const projectData = projectTemplate();
    const newProject = await Projects.create(projectData); // Creating a new project to be updated in the user_project_id

    const updatedUserProject = await UserProjects.update({
      user_projects_id: testBed.userProjects.user_projects_id,
      project_id: newProject[0].project_id
    });
    testBed.userProjects = updatedUserProject[0];
    expect(testBed.userProjects.project_id).eql(newProject[0].project_id);
  });

  describe("Should Test Delete UserProject", async function() {
    it("Should Create Dummy UserProject", async function() {
      const dummyUserProjectData = userProjectsTemplate();
      const userProjects = await UserProjects.create(dummyUserProjectData);
      testBed.dummyUserProject = userProjects[0];
      Object.keys(dummyUserProjectData).map(key => {
        if (key)
          expect(testBed.dummyUserProject[key]).eql(dummyUserProjectData[key]);
      });
    });
    it("Should check Dummy UserProject Exists", async function() {
      const dummyFetched = await UserProjects.get({
        user_projects_id: testBed.dummyUserProject.user_projects_id
      });
      Object.keys(dummyFetched[0]).map(key => {
        if (key)
          expect(testBed.dummyUserProject[key]).eql(dummyFetched[0][key]);
      });
    });
    it("Should Delete Dummy UserProject", async function() {
      const deleted = await UserProjects.delete({
        user_projects_id: testBed.dummyUserProject.user_projects_id
      });
      expect(deleted).equals(1);
    });
    it("Should Test Dummy UserProject Doesn't exist in Database anymore", async function() {
      const dummyFetched = await UserProjects.get({
        user_projects_id: testBed.dummyUserProject.user_projects_id
      });
      delete testBed.dummyProject;
      expect(dummyFetched.length).equals(0);
    });
    expect(0).equals(0);
  });
});

// User Idea

const UserIdeas = require("../user_ideas");

const userIdeasTemplate = () => {
  return {
    user_id: testBed.user.user_id,
    idea_id: testBed.idea.idea_id
  };
};

describe("Testing UserIdea Model", function() {
  it("Should Create UserIdea", async function() {
    const userIdeasData = userIdeasTemplate();
    const userIdeas = await UserIdeas.create(userIdeasData);
    testBed.userIdeas = userIdeas[0];
    Object.keys(userIdeasData).map(key => {
      if (key) expect(testBed.userIdeas[key]).eql(userIdeasData[key]);
    });
  });
  it("Should Get UserIdea Data", async function() {
    const userIdeasFetched = await UserIdeas.get({
      user_ideas_id: testBed.userIdeas.user_ideas_id
    });
    Object.keys(userIdeasFetched[0]).map(key => {
      if (key) expect(testBed.userIdeas[key]).eql(userIdeasFetched[0][key]);
    });
  });
  it("Should Edit UserIdea Data", async function() {
    const ideaData = ideaTemplate();
    const newIdea = await Ideas.create(ideaData); // Creating a new idea to be updated in the user_idea_id

    const updatedUserIdea = await UserIdeas.update({
      user_ideas_id: testBed.userIdeas.user_ideas_id,
      idea_id: newIdea[0].idea_id
    });
    testBed.userIdeas = updatedUserIdea[0];
    expect(testBed.userIdeas.idea_id).eql(newIdea[0].idea_id);
  });

  describe("Should Test Delete UserIdea", async function() {
    it("Should Create Dummy UserIdea", async function() {
      const dummyUserIdeaData = userIdeasTemplate();
      const userIdeas = await UserIdeas.create(dummyUserIdeaData);
      testBed.dummyUserIdea = userIdeas[0];
      Object.keys(dummyUserIdeaData).map(key => {
        if (key) expect(testBed.dummyUserIdea[key]).eql(dummyUserIdeaData[key]);
      });
    });
    it("Should check Dummy UserIdea Exists", async function() {
      const dummyFetched = await UserIdeas.get({
        user_ideas_id: testBed.dummyUserIdea.user_ideas_id
      });
      Object.keys(dummyFetched[0]).map(key => {
        if (key) expect(testBed.dummyUserIdea[key]).eql(dummyFetched[0][key]);
      });
    });
    it("Should Delete Dummy UserIdea", async function() {
      const deleted = await UserIdeas.delete({
        user_ideas_id: testBed.dummyUserIdea.user_ideas_id
      });
      expect(deleted).equals(1);
    });
    it("Should Test Dummy UserIdea Doesn't exist in Database anymore", async function() {
      const dummyFetched = await UserIdeas.get({
        user_ideas_id: testBed.dummyUserIdea.user_ideas_id
      });
      delete testBed.dummyIdea;
      expect(dummyFetched.length).equals(0);
    });
    expect(0).equals(0);
  });
});

// User Comments

const UserComments = require("../user_comments");

const userCommentsTemplate = () => {
  return {
    user_id: testBed.user.user_id,
    comment_id: testBed.comment.comment_id
  };
};

describe("Testing UserComment Model", function() {
  it("Should Create UserComment", async function() {
    const userCommentsData = userCommentsTemplate();
    const userComments = await UserComments.create(userCommentsData);
    testBed.userComments = userComments[0];
    Object.keys(userCommentsData).map(key => {
      if (key) expect(testBed.userComments[key]).eql(userCommentsData[key]);
    });
  });
  it("Should Get UserComment Data", async function() {
    const userCommentsFetched = await UserComments.get({
      user_comments_id: testBed.userComments.user_comments_id
    });
    Object.keys(userCommentsFetched[0]).map(key => {
      if (key)
        expect(testBed.userComments[key]).eql(userCommentsFetched[0][key]);
    });
  });
  it("Should Edit UserComment Data", async function() {
    const commentData = commentTemplate();
    const newComment = await Comments.create(commentData); // Creating a new comment to be updated in the user_comment_id

    const updatedUserComment = await UserComments.update({
      user_comments_id: testBed.userComments.user_comments_id,
      comment_id: newComment[0].comment_id
    });
    testBed.userComments = updatedUserComment[0];
    expect(testBed.userComments.comment_id).eql(newComment[0].comment_id);
  });

  describe("Should Test Delete UserComment", async function() {
    it("Should Create Dummy UserComment", async function() {
      const dummyUserCommentData = userCommentsTemplate();
      const userComments = await UserComments.create(dummyUserCommentData);
      testBed.dummyUserComment = userComments[0];
      Object.keys(dummyUserCommentData).map(key => {
        if (key)
          expect(testBed.dummyUserComment[key]).eql(dummyUserCommentData[key]);
      });
    });
    it("Should check Dummy UserComment Exists", async function() {
      const dummyFetched = await UserComments.get({
        user_comments_id: testBed.dummyUserComment.user_comments_id
      });
      Object.keys(dummyFetched[0]).map(key => {
        if (key)
          expect(testBed.dummyUserComment[key]).eql(dummyFetched[0][key]);
      });
    });
    it("Should Delete Dummy UserComment", async function() {
      const deleted = await UserComments.delete({
        user_comments_id: testBed.dummyUserComment.user_comments_id
      });
      expect(deleted).equals(1);
    });
    it("Should Test Dummy UserComment Doesn't exist in Database anymore", async function() {
      const dummyFetched = await UserComments.get({
        user_comments_id: testBed.dummyUserComment.user_comments_id
      });
      delete testBed.dummyComment;
      expect(dummyFetched.length).equals(0);
    });
    expect(0).equals(0);
  });
});

// Project Boards

const ProjectBoards = require("../project_boards");

const projectBoardsTemplate = () => {
  return {
    project_id: testBed.project.project_id,
    board_id: testBed.board.board_id
  };
};

describe("Testing ProjectBoard Model", function() {
  it("Should Create ProjectBoard", async function() {
    const projectBoardsData = projectBoardsTemplate();
    const projectBoards = await ProjectBoards.create(projectBoardsData);
    testBed.projectBoards = projectBoards[0];
    Object.keys(projectBoardsData).map(key => {
      if (key) expect(testBed.projectBoards[key]).eql(projectBoardsData[key]);
    });
  });
  it("Should Get ProjectBoard Data", async function() {
    const projectBoardsFetched = await ProjectBoards.get({
      project_boards_id: testBed.projectBoards.project_boards_id
    });
    Object.keys(projectBoardsFetched[0]).map(key => {
      if (key)
        expect(testBed.projectBoards[key]).eql(projectBoardsFetched[0][key]);
    });
  });
  it("Should Edit ProjectBoard Data", async function() {
    const boardData = boardTemplate();
    const newBoard = await Boards.create(boardData); // Creating a new board to be updated in the project_board_id

    const updatedProjectBoard = await ProjectBoards.update({
      project_boards_id: testBed.projectBoards.project_boards_id,
      board_id: newBoard[0].board_id
    });
    testBed.projectBoards = updatedProjectBoard[0];
    expect(testBed.projectBoards.board_id).eql(newBoard[0].board_id);
  });

  describe("Should Test Delete ProjectBoard", async function() {
    it("Should Create Dummy ProjectBoard", async function() {
      const dummyProjectBoardData = projectBoardsTemplate();
      const projectBoards = await ProjectBoards.create(dummyProjectBoardData);
      testBed.dummyProjectBoard = projectBoards[0];
      Object.keys(dummyProjectBoardData).map(key => {
        if (key)
          expect(testBed.dummyProjectBoard[key]).eql(
            dummyProjectBoardData[key]
          );
      });
    });
    it("Should check Dummy ProjectBoard Exists", async function() {
      const dummyFetched = await ProjectBoards.get({
        project_boards_id: testBed.dummyProjectBoard.project_boards_id
      });
      Object.keys(dummyFetched[0]).map(key => {
        if (key)
          expect(testBed.dummyProjectBoard[key]).eql(dummyFetched[0][key]);
      });
    });
    it("Should Delete Dummy ProjectBoard", async function() {
      const deleted = await ProjectBoards.delete({
        project_boards_id: testBed.dummyProjectBoard.project_boards_id
      });
      expect(deleted).equals(1);
    });
    it("Should Test Dummy ProjectBoard Doesn't exist in Database anymore", async function() {
      const dummyFetched = await ProjectBoards.get({
        project_boards_id: testBed.dummyProjectBoard.project_boards_id
      });
      delete testBed.dummyBoard;
      expect(dummyFetched.length).equals(0);
    });
    expect(0).equals(0);
  });
});

// Project Ideas

const ProjectIdeas = require("../project_ideas");

const projectIdeasTemplate = () => {
  return {
    project_id: testBed.project.project_id,
    idea_id: testBed.idea.idea_id
  };
};

describe("Testing ProjectIdea Model", function() {
  it("Should Create ProjectIdea", async function() {
    const projectIdeasData = projectIdeasTemplate();
    const projectIdeas = await ProjectIdeas.create(projectIdeasData);
    testBed.projectIdeas = projectIdeas[0];
    Object.keys(projectIdeasData).map(key => {
      if (key) expect(testBed.projectIdeas[key]).eql(projectIdeasData[key]);
    });
  });
  it("Should Get ProjectIdea Data", async function() {
    const projectIdeasFetched = await ProjectIdeas.get({
      project_ideas_id: testBed.projectIdeas.project_ideas_id
    });
    Object.keys(projectIdeasFetched[0]).map(key => {
      if (key)
        expect(testBed.projectIdeas[key]).eql(projectIdeasFetched[0][key]);
    });
  });
  it("Should Edit ProjectIdea Data", async function() {
    const ideaData = ideaTemplate();
    const newIdea = await Ideas.create(ideaData); // Creating a new idea to be updated in the project_idea_id

    const updatedProjectIdea = await ProjectIdeas.update({
      project_ideas_id: testBed.projectIdeas.project_ideas_id,
      idea_id: newIdea[0].idea_id
    });
    testBed.projectIdeas = updatedProjectIdea[0];
    expect(testBed.projectIdeas.idea_id).eql(newIdea[0].idea_id);
  });

  describe("Should Test Delete ProjectIdea", async function() {
    it("Should Create Dummy ProjectIdea", async function() {
      const dummyProjectIdeaData = projectIdeasTemplate();
      const projectIdeas = await ProjectIdeas.create(dummyProjectIdeaData);
      testBed.dummyProjectIdea = projectIdeas[0];
      Object.keys(dummyProjectIdeaData).map(key => {
        if (key)
          expect(testBed.dummyProjectIdea[key]).eql(dummyProjectIdeaData[key]);
      });
    });
    it("Should check Dummy ProjectIdea Exists", async function() {
      const dummyFetched = await ProjectIdeas.get({
        project_ideas_id: testBed.dummyProjectIdea.project_ideas_id
      });
      Object.keys(dummyFetched[0]).map(key => {
        if (key)
          expect(testBed.dummyProjectIdea[key]).eql(dummyFetched[0][key]);
      });
    });
    it("Should Delete Dummy ProjectIdea", async function() {
      const deleted = await ProjectIdeas.delete({
        project_ideas_id: testBed.dummyProjectIdea.project_ideas_id
      });
      expect(deleted).equals(1);
    });
    it("Should Test Dummy ProjectIdea Doesn't exist in Database anymore", async function() {
      const dummyFetched = await ProjectIdeas.get({
        project_ideas_id: testBed.dummyProjectIdea.project_ideas_id
      });
      delete testBed.dummyIdea;
      expect(dummyFetched.length).equals(0);
    });
    expect(0).equals(0);
  });
});

//Task AssignedT To

const TaskAssignedTo = require("../task_assigned_to");

const taskAssignedToTemplate = () => {
  return {
    task_id: testBed.task.task_id,
    user_id: testBed.user.user_id
  };
};

describe("Testing TaskAssignedTo Model", function() {
  it("Should Create TaskAssignedTo", async function() {
    const taskAssignedToData = taskAssignedToTemplate();
    const taskAssignedTo = await TaskAssignedTo.create(taskAssignedToData);
    testBed.taskAssignedTo = taskAssignedTo[0];
    Object.keys(taskAssignedToData).map(key => {
      if (key) expect(testBed.taskAssignedTo[key]).eql(taskAssignedToData[key]);
    });
  });
  it("Should Get TaskAssignedTo Data", async function() {
    const taskAssignedToFetched = await TaskAssignedTo.get({
      task_assigned_to_id: testBed.taskAssignedTo.task_assigned_to_id
    });
    Object.keys(taskAssignedToFetched[0]).map(key => {
      if (key)
        expect(testBed.taskAssignedTo[key]).eql(taskAssignedToFetched[0][key]);
    });
  });
  it("Should Edit TaskAssignedTo Data", async function() {
    const userData = userTemplate();
    const newUser = await Users.create(userData); // Creating a new user to be updated in the task_user_id

    const updatedTaskAssignedTo = await TaskAssignedTo.update({
      task_assigned_to_id: testBed.taskAssignedTo.task_assigned_to_id,
      user_id: newUser[0].user_id
    });
    testBed.taskAssignedTo = updatedTaskAssignedTo[0];
    expect(testBed.taskAssignedTo.user_id).eql(newUser[0].user_id);
  });

  describe("Should Test Delete TaskAssignedTo", async function() {
    it("Should Create Dummy TaskAssignedTo", async function() {
      const dummyTaskAssignedToData = taskAssignedToTemplate();
      const taskAssignedTo = await TaskAssignedTo.create(
        dummyTaskAssignedToData
      );
      testBed.dummyTaskAssignedTo = taskAssignedTo[0];
      Object.keys(dummyTaskAssignedToData).map(key => {
        if (key)
          expect(testBed.dummyTaskAssignedTo[key]).eql(
            dummyTaskAssignedToData[key]
          );
      });
    });
    it("Should check Dummy TaskAssignedTo Exists", async function() {
      const dummyFetched = await TaskAssignedTo.get({
        task_assigned_to_id: testBed.dummyTaskAssignedTo.task_assigned_to_id
      });
      Object.keys(dummyFetched[0]).map(key => {
        if (key)
          expect(testBed.dummyTaskAssignedTo[key]).eql(dummyFetched[0][key]);
      });
    });
    it("Should Delete Dummy TaskAssignedTo", async function() {
      const deleted = await TaskAssignedTo.delete({
        task_assigned_to_id: testBed.dummyTaskAssignedTo.task_assigned_to_id
      });
      expect(deleted).equals(1);
    });
    it("Should Test Dummy TaskAssignedTo Doesn't exist in Database anymore", async function() {
      const dummyFetched = await TaskAssignedTo.get({
        task_assigned_to_id: testBed.dummyTaskAssignedTo.task_assigned_to_id
      });
      delete testBed.dummyIdea;
      expect(dummyFetched.length).equals(0);
    });
    expect(0).equals(0);
  });
});

//User Followers

const UserFollowers = require("../user_followers");

const userFollowerTemplate = async () => {
  const newUser = await Users.create(userTemplate());
  return {
    task_id: testBed.task.task_id,
    user_follower: newUser.user_id
  };
};

describe("Testing UserFollowers Model", function() {
  it("Should Create UserFollowers", async function() {
    const userFollowerData = userFollowerTemplate();
    const userFollower = await UserFollowers.create(userFollowerData);
    testBed.userFollower = userFollower[0];
    Object.keys(userFollowerData).map(key => {
      if (key) expect(testBed.userFollower[key]).eql(userFollowerData[key]);
    });
  });
  it("Should Get UserFollowers Data", async function() {
    const userFollowerFetched = await UserFollowers.get({
      user_followers_id: testBed.userFollower.user_followers_id
    });
    Object.keys(userFollowerFetched[0]).map(key => {
      if (key)
        expect(testBed.userFollower[key]).eql(userFollowerFetched[0][key]);
    });
  });
  it("Should Edit UserFollowers Data", async function() {
    const userData = userTemplate();
    const newUser = await Users.create(userData); // Creating a new user to be updated in the task_user_id

    const updatedUserFollowers = await UserFollowers.update({
      user_followers_id: testBed.userFollower.user_followers_id,
      user_follower: newUser[0].user_id
    });
    testBed.userFollower = updatedUserFollowers[0];
    expect(testBed.userFollower.user_follower).eql(newUser[0].user_id);
  });

  describe("Should Test Delete UserFollowers", async function() {
    it("Should Create Dummy UserFollowers", async function() {
      const dummyUserFollowersData = userFollowerTemplate();
      const userFollower = await UserFollowers.create(dummyUserFollowersData);
      testBed.dummyUserFollowers = userFollower[0];
      Object.keys(dummyUserFollowersData).map(key => {
        if (key)
          expect(testBed.dummyUserFollowers[key]).eql(
            dummyUserFollowersData[key]
          );
      });
    });
    it("Should check Dummy UserFollowers Exists", async function() {
      const dummyFetched = await UserFollowers.get({
        user_followers_id: testBed.dummyUserFollowers.user_followers_id
      });
      Object.keys(dummyFetched[0]).map(key => {
        if (key)
          expect(testBed.dummyUserFollowers[key]).eql(dummyFetched[0][key]);
      });
    });
    it("Should Delete Dummy UserFollowers", async function() {
      const deleted = await UserFollowers.delete({
        user_followers_id: testBed.dummyUserFollowers.user_followers_id
      });
      expect(deleted).equals(1);
    });
    it("Should Test Dummy UserFollowers Doesn't exist in Database anymore", async function() {
      const dummyFetched = await UserFollowers.get({
        user_followers_id: testBed.dummyUserFollowers.user_followers_id
      });
      delete testBed.dummyIdea;
      expect(dummyFetched.length).equals(0);
    });
    expect(0).equals(0);
  });
});
