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

  const todoHead = document.createElement("div");
  todoHead.setAttribute("class", "todoHead");
  todoDiv.appendChild(todoHead);

  const todoHeader = document.createElement("h2");
  todoHeader.innerText = "To Do";
  todoHead.appendChild(todoHeader);

  const cardCount = document.createElement("h2");
  cardCount.innerText = 0;
  todoHead.appendChild(cardCount);

  const cards = document.createElement("div");
  cards.setAttribute("class", "cards");
  todoDiv.appendChild(cards);

  const futureDiv = todosToRender.filter((todo) => {
    return todo.status == "todo";
  });
  futureDiv.map((task) => {
    const newTodo = document.createElement("div");
    cards.appendChild(newTodo);
    newTodo.innerText = task.title + task.description + task.priority;
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

  const addCardBtn = document.createElement("button");
  addCardBtn.setAttribute("class", "addCardBtn");
  addCardBtn.innerText = "+  Add card";
  todoDiv.appendChild(addCardBtn);

  // const editCardBtn = document.createElement("button");
  // editCardBtn.setAttribute("class", "editCardBtn");
  // editCardBtn.innerText = "Edit card";
  // todoDiv.appendChild(editCardBtn);

  addCardBtn.addEventListener("click", () => {
    addCardDiv.style.display = "block";
  });

  const addCardDiv = document.createElement("div");
  addCardDiv.setAttribute("class", "addCardDiv");
  cards.appendChild(addCardDiv);

  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  addCardDiv.appendChild(modal);

  const modalHEader = document.createElement("h1");
  modalHEader.innerText = "Add Task";
  modal.appendChild(modalHEader);

  const title = document.createElement("input");
  title.setAttribute("class", "title");
  title.placeholder = "Title";
  modal.appendChild(title);

  const description = document.createElement("input");
  description.setAttribute("class", "description");
  description.setAttribute("id", "description");
  description.placeholder = "Description";
  modal.appendChild(description);

  const status = document.createElement("select");
  const statusTodo = document.createElement("option");
  statusTodo.innerText = "todo";
  status.appendChild(statusTodo);
  const statusInprogress = document.createElement("option");
  statusInprogress.innerText = "inProgress";
  status.appendChild(statusInprogress);
  const statusStuck = document.createElement("option");
  statusStuck.innerText = "stuck";
  status.appendChild(statusStuck);
  const statusDone = document.createElement("option");
  statusDone.innerText = "done";
  status.appendChild(statusDone);
  modal.appendChild(status);

  const priority = document.createElement("select");
  const priorityLow = document.createElement("option");
  priorityLow.innerText = "Low";
  priority.appendChild(priorityLow);

  const priorityMedium = document.createElement("option");
  priorityMedium.innerText = "Medium";
  priority.appendChild(priorityMedium);

  const priorityHigh = document.createElement("option");
  priorityHigh.innerText = "High";
  priority.appendChild(priorityHigh);
  modal.appendChild(priority);

  const addTaskBtn = document.createElement("button");
  addTaskBtn.setAttribute("class", "addTaskBtn");
  addTaskBtn.innerText = "Add Task";
  modal.appendChild(addTaskBtn);

  addTaskBtn.addEventListener("click", () => {
    // const card = document.createElement("div");
    // card.setAttribute("class", "card");

    // const addTitle = document.createElement("h1");
    // addTitle.setAttribute("class", "addTitle");
    // addTitle.innerText = title.value;

    // const addDescription = document.createElement("p");
    // addDescription.setAttribute("class", "addDescription");
    // addDescription.innerText = description.value;

    // const addPriority = document.createElement("p");
    // addPriority.setAttribute("class", "addPriority");
    // addPriority.innerText = priority.value;

    // const addStatus = document.createElement("p");
    // addStatus.setAttribute("class", "addStatus");
    // addStatus.innerText = status.value;

    // card.appendChild(addTitle);
    // card.appendChild(addDescription);
    // card.appendChild(addStatus);
    // card.appendChild(addPriority);

    //card.setAttribute("id", `${index + 1}`);
    // if ((status.value = "todo")) {
    //   todocards.appendChild(card);
    // }

    todos.push({
      title: title.value,
      description: description.value,
      status: status.value,
      priority: priority.value,
    });
    drawTodos(todos);
    //console.log(todos);
    addCardDiv.style.display = "none";
  });
}
drawTodos(todos);

function editFunction() {
  todos[2].title = "im learning";
  drawTodos(todos);
}
editFunction();

// function addTodo() {
//   const newTitle = document.getElementById("titleInput").value;
//   const newDescription = document.getElementById("descriptionInput").value;
//   const newStatus = document.getElementById("statusSelect").value;
//   const newPriority = document.getElementById("priorityPriority").value;
//   todos.push({
//     title: newTitle,
//     description: newDescription,
//     status: newStatus,
//     priority: newPriority,
//   });
// }

//add card deer darahad shine tsonh garj ireed inputuudaa hiigeed add button darahad statusaaraa huvaagdaj orno.
