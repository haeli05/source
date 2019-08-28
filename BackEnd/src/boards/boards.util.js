(async () => {
  const Columns = require("../pgModels/columns");
  const dummyData = {
    board_id: "073937d7-9f9e-4ac8-a20d-ca8ee54bffa2",
    data: {
      tasks: {
        "task-1": {
          id: "task-1",
          title: "Database Migration",
          content: "MongoDB to PostGreSQL",
          dueDate: "",
          compensation: 1500,
          skills: []
        },
        "task-2": {
          id: "task-2",
          title: "Git Hosting",
          content: "GitLab to Gitolite",
          dueDate: "",
          compensation: 1500,
          skills: []
        },
        "task-3": {
          id: "task-3",
          title: "Social Logins (FB, Twitter, GitHub,Google)",
          content: "Integrate logins with these methods",
          dueDate: "",
          compensation: 1000,
          skills: []
        },
        "task-4": {
          id: "task-4",
          title: "Real Time Notifications",
          content: "Apollo",
          dueDate: "",
          compensation: 500,
          skills: []
        },
        "task-5": {
          id: "task-5",
          title: "Riot Chat integration",
          content: "Riot.im",
          dueDate: "",
          compensation: 500,
          skills: []
        },
        "task-6": {
          id: "task-6",
          title: "Marketing funnel",
          content: "Discuss",
          dueDate: "",
          compensation: 500,
          skills: []
        }
      },
      columns: {
        "column-1": {
          column_id: "column-1",
          title: "Front End",
          taskids: ["task-3", "task-4"]
        },
        "column-2": {
          column_id: "column-2",
          title: "Back End",
          taskids: ["task-1", "task-2", "task-3"]
        },
        "column-3": {
          column_id: "column-3",
          title: "Misc",
          taskids: ["task-5", "task-6"]
        }
      }
    },
    columnOrder: ["column-1", "column-2", "column-3"]
  };

  const columns = await Promise.all(
    dummyData.columnOrder.map((column, order) => {
      column = dummyData.data.columns[column];
      column.board_id = dummyData.board_id;
      delete column.taskids;
      return Columns.upsert(column);
    })
  );

  console.log("columns: ", columns);
})();
