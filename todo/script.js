let todos = [
  {
    title: "learn javascript1",
    description: "Learn JAvascript basics",
    status: "todo",
    priority: "high",
  },
  {
    title: "learn javascript2",
    description: "Learn JAvascript basics",
    status: "inProgress",
    priority: "high",
  },
  {
    title: "learn javascript3",
    description: "Learn JAvascript basics",
    status: "stuck",
    priority: "high",
  },
  {
    title: "learn javascript4",
    description: "Learn JAvascript basics",
    status: "done",
    priority: "high",
  },
  {
    title: "learn javascript6",
    description: "Learn JAvascript basics",
    status: "todo",
    priority: "high",
  },
  {
    title: "learn javascript7",
    description: "Learn JAvascript basics",
    status: "inProgress",
    priority: "high",
  },
  {
    title: "learn javascript8",
    description: "Learn JAvascript basics",
    status: "stuck",
    priority: "high",
  },
  {
    title: "learn javascript9",
    description: "Learn JAvascript basics",
    status: "done",
    priority: "high",
  },
  {
    title: "learn javascript10",
    description: "Learn JAvascript basics",
    status: "todo",
    priority: "high",
  },
  {
    title: "learn javascript11",
    description: "Learn JAvascript basics",
    status: "inProgress",
    priority: "high",
  },
  {
    title: "learn javascript12",
    description: "Learn JAvascript basics",
    status: "stuck",
    priority: "high",
  },
  {
    title: "learn javascript13",
    description: "Learn JAvascript basics",
    status: "done",
    priority: "high",
  },
];

const container = document.getElementById("container");

function drawTodos(todosToRender) {
  container.innerHTML = "";

  const todoDiv = document.createElement("div");
  todoDiv.setAttribute("class", "todoList");
  todoDiv.setAttribute("id", "todoDiv");

  const inProgressDiv = document.createElement("div");
  inProgressDiv.setAttribute("class", "todoList");
  inProgressDiv.setAttribute("id", "inProgressDiv");

  const stuckDiv = document.createElement("div");
  stuckDiv.setAttribute("class", "todoList");
  stuckDiv.setAttribute("id", "stuckDiv");

  const doneDiv = document.createElement("div");
  doneDiv.setAttribute("class", "todoList");
  doneDiv.setAttribute("id", "doneDiv");

  container.appendChild(todoDiv);
  container.appendChild(inProgressDiv);
  container.appendChild(stuckDiv);
  container.appendChild(doneDiv);

  const todoHeader = document.createElement("h2");
  todoHeader.innerText = "To Do";
  todoDiv.appendChild(todoHeader);

  const cards = document.createElement("div");
  cards.setAttribute("class", "cards");
  todoDiv.appendChild(cards);

  const futureDiv = todosToRender.filter((todo) => {
    return todo.status == "todo";
  });
  futureDiv.map((task) => {
    const newTodo = document.createElement("div");
    cards.appendChild(newTodo);
    newTodo.innerText = task.title;
  });

  const inProgress = todosToRender.filter((todo) => {
    return todo.status == "inProgress";
  });
  const inProgressHeader = document.createElement("h2");
  inProgressHeader.innerText = "In progress";
  inProgressDiv.appendChild(inProgressHeader);

  inProgress.map((task) => {
    const newInProg = document.createElement("div");
    inProgressDiv.appendChild(newInProg);
    newInProg.innerText = task.title;
    });

  const stuck = todosToRender.filter((todo) => {
    return todo.status == "stuck";
  });
  const stuckHeader = document.createElement("h2");
  stuckHeader.innerText = "Stuck";
  stuckDiv.appendChild(stuckHeader);
  stuck.map((task) => {
    const newStuck = document.createElement("div");
    stuckDiv.appendChild(newStuck);
    newStuck.innerText = task.title;
  });

  const done = todosToRender.filter((todo) => {
    return todo.status == "done";
  });
  const doneHeader = document.createElement("h2");
  doneHeader.innerText = "Done";
  doneDiv.appendChild(doneHeader);
  done.map((task) => {
    const newDone = document.createElement("div");
    doneDiv.appendChild(newDone);
    newDone.innerText = task.title;
  });
}
drawTodos(todos);

function editFunction() {
  todos[2].title = "im learning";
  drawTodos(todos);
}
editFunction();

function addTodo() {
  const newTitle = document.getElementById("titleInput").value;
  const newDescription = document.getElementById("descriptionInput").value;
  const newStatus = document.getElementById("statusSelect").value;
  const newPriority = document.getElementById("priorityPriority").value;
  todos.push({
    title: newTitle,
    description: newDescription,
    status: newStatus,
    priority: newPriority,
  });
}
