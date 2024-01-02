const root = document.getElementById("root");

const container = document.createElement("div");
container.setAttribute("class", "container");
root.appendChild(container);

const boards = document.createElement("div");
boards.setAttribute("class", "boards");
container.appendChild(boards);

const boardTitle = [
  { title: "Todo", id: "todo" },
  { title: "In Progress", id: "inprogress" },
  { title: "Stuck", id: "stuck" },
  { title: "Done", id: "done" },
];

function boardmake() {
  boardTitle.map((title, index) => {
    const board = document.createElement("div");
    board.setAttribute("class", "board");
    boards.appendChild(board);

    const head = document.createElement("div");
    head.setAttribute("class", "head");
    head.innerText = title.title;
    board.appendChild(head);

    const cardCount = document.createElement("p");
    cardCount.innerText = 0;
    head.appendChild(cardCount);

    const cards = document.createElement("div");
    cards.setAttribute("class", "cards");
    cards.setAttribute("id", `${title.id}`);
    board.appendChild(cards);

    const addCardBtn = document.createElement("button");
    addCardBtn.setAttribute("class", "addCardBtn");
    addCardBtn.innerText = "+  Add card";
    board.appendChild(addCardBtn);

    addCardBtn.addEventListener("click", () => {
      const addCardDiv = document.createElement("div");
      addCardDiv.setAttribute("class", "addCardDiv");
      root.appendChild(addCardDiv);

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
      statusTodo.innerText = "To do";
      status.appendChild(statusTodo);
      const statusInprogress = document.createElement("option");
      statusInprogress.innerText = "In progress";
      status.appendChild(statusInprogress);
      const statusStuck = document.createElement("option");
      statusStuck.innerText = "Stuck";
      status.appendChild(statusStuck);
      const statusDone = document.createElement("option");
      statusDone.innerText = "Done";
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

      //
      console.log(index + 1);
      addTaskBtn.addEventListener("click", () => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        card.setAttribute("id", `${index + 1}`);
        cards.appendChild(card);

        const cardTitle = document.createElement("h2");
        cardTitle.innerText = title.value;
        card.appendChild(cardTitle);

        const deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("class", "deleteBtn");
        card.appendChild(deleteBtn);

        deleteBtn.addEventListener("click", () => {
          const qwe = document.getElementById("qwerty");
          qwe.remove();
        });

        const cardDescription = document.createElement("p");
        cardDescription.innerText = description.value;
        card.appendChild(cardDescription);

        const cardPriotity = document.createElement("p");
        cardPriotity.innerText = priority.value;
        card.appendChild(cardPriotity);

        console.log("shbedjkhedeuyeuyfeuyfg");
        if (status.value == "To do") {
          todo.appendChild(card);
        } else if (status.value == "In progress") {
          inprogress.appendChild(card);
        } else if (status.value == "Stuck") {
          stuck.appendChild(card);
        } else if (status.value == "Done") {
          done.appendChild(card);
        }
        addCardDiv.style.display = "none";
        // modal.style.display = "none";
      });
    });
  });
}
boardmake();

// function createTask()
// function editTask()
// function deleteTask()
