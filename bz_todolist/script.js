const root = document.getElementById("root");
const container = document.createElement("div");
// container uusgej baina
container.setAttribute("class", "container");
root.appendChild(container);
// title uusgej bain
const todoTitle = document.createElement("h2");
todoTitle.setAttribute("class", "todoTitle");
todoTitle.innerText = "To Do list";
// uusgesen title container luu nemj baina
container.appendChild(todoTitle);
// nemeh text input bolon addButton aguulah div uusgej baina
const todoAdd = document.createElement("div");
todoAdd.setAttribute("class", "todoAdd");
// nemeh text bichih input uusgej baina
const inputBox = document.createElement("input");
inputBox.setAttribute("id", "inputData");
inputBox.setAttribute("type", "text");
inputBox.setAttribute("placeholder", "Add your text");
// Input text nemeh button uusgej baina
const addBtn = document.createElement("button");
addBtn.innerText = "Add";
addBtn.setAttribute("class", "addBtn");
// uusgesen input, button 2g todoAdd div ruu nemj ugch baina
todoAdd.appendChild(inputBox);
todoAdd.appendChild(addBtn);
// container luu todoAdd div nemj baina
container.appendChild(todoAdd);

// nemsen textuudiig list baidlaar haruulah tul UL LI gesen 2 tagiig ashiglav
// list aguulah UL tag uusgej baina. ene ruu nemsen elementuudiin jagsaaltiig haruulna
const todoList = document.createElement("ul");
todoList.setAttribute("class", "todoList");
// container luu UL tag nemj ugch baina
container.appendChild(todoList);
// addBtn darahad herev input hooson bol alert gargana, ugui bol addlist function duudaj baina
addBtn.addEventListener("click", () => {
  inputBox.value == "" ? alert("hooson bn") : addlist();
});
// Gol sanaa: add button darahad tuhain input dotor baigaa textiig array dotor nemj ugnu
// listiig uusgehdee array dotor baigaa buh elementiig uusgeh baidlaar code bichiv
// todoArr array dotor nemsen textuudiig hadgalna
let todoArr = [];
function addlist() {
  // element nemegdeh bolgond ul dotroh HTML hooson bolgono
  todoList.innerHTML = "";
  //todoArr[todoArr.length] -> Array suuliin elementiin index  todoArr.length-1 baidag. todoArr.length index-t utga ugch baigaa n element nemj baigaa gdg n haragdah baihaa
  //
  todoArr[todoArr.length] = inputBox.value;
  // Array dotor baigaa buh element tus bureer li uusgej todoList ruu nemj ugnu
  for (let i = 0; i < todoArr.length; i++) {
    // li tag uusgev, ene ruu check box, array text, 2 tovch nemj ugnu
    const li = document.createElement("li");
    // ehnii checkbox uusgej baina. ene deer darahad text dunduuraa zuraastai haragdana
    const checkInput = document.createElement("input");
    checkInput.setAttribute("type", "checkbox");
    checkInput.setAttribute("class", "checkboxInput");
    checkInput.setAttribute("id", `checkInput`);
    // input uusgej baina. end array textiig hadgalna
    const txt = document.createElement("input");
    // todoArr[i] - i dah indexiin hadgalj bui string inputad hadgalj baina
    txt.value = todoArr[i];
    // tuhain input deer yum bichij bolohgui tul disabled-true bolgoj baina
    // disabled = false uyd yum bichij boldog gesen ug
    txt.disabled = true;
    // txt.setAttribute("id", `${i + 1}`);
    // Label uusgeed check inputtai holbono. label for attribute input ID holbogdono
    const edit = document.createElement("label");
    edit.innerText = "Edit";
    edit.setAttribute("for", "check");
    const check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.setAttribute("class", "checkboxs");
    check.setAttribute("id", `check`);
    // listiin urd baigaa checkbox daragdaad zuv temdeg garch irehed e.checked true utga butsaana

    checkInput.addEventListener("click", (e) => {
      console.log(e.target.checked);
      if (e.target.checked) {
        // true utga butsaaj baiwal checklesen baina gesen ug
        // tiim uchir uusgesen txt inputiin textiin dunduur zuraas uusgene
        txt.style.textDecoration = "line-through";
      } else {
        // false utga butsaaj baiwal checkleegui baina gesen ug
        // tiim uchir uusgesen txt inputiin textiin dunduur zuraasiig arilgana
        txt.style.textDecoration = "none";
      }
    });
    // edit deer darahad txt inputiin disabled false bolno ter uildliig hiij baina
    // edit label uchir tuun deer darahad check gesen check box.n checked uurchlugduj baigaa. teriig shalgaad disabled uurchilnu.
    edit.addEventListener("click", (e) => {
      let check = document.getElementById("check");
      if (!check.checked) {
        // chechlesen textiig edit hiij bolohgui tul ene nuhtsuliig nemelteer shalgav
        if (!checkInput.checked) {
          txt.disabled = false;
          e.target.innerText = "Done";
          checkInput.style.display = "none";
        } else {
          checkInput.style.display = "block";
          alert("Songogdson text baina");
        }
      } else {
        checkInput.style.display = "block";
        txt.disabled = true;
        e.target.innerText = "Edit";
      }
    });
    // listnees mur ustgah uildel
    // array-s tuhain textiig ustgaad shineer uussen array dahij zurhaar shiidev
    const remove = document.createElement("button");
    remove.innerText = "\u00d7"; //\u00d7 - x gargaj irj bn lee
    remove.addEventListener("click", (e) => {
      console.log(todoArr, todoArr.length);
      //todoArr.splice(i, 1); -> i-r indexsees hoish 1 ustgana gesen ug. i,3 gewel i.s hoish 3 elementiig n ustgaad shine array uusgej baigaa
      todoArr.splice(i, 1);
      //   console.log(todoArr, todoArr.length);
      //   ustgad dahij zurah heregtei tul update gesen function duudchihlaa
      //addlist() yalgaatai n todoArr array luu element nemehgui, busad buh uildel ijil tul copy paste hiiged barag bolchihson doo
      update();
    });
    inputBox.value = "";
    console.log("check", checkInput);
    // li ruu uusgesen 5 elementee nemj ugnu
    // ene 5 element uuseed bie bie deeree uildel hiih addeventlistener
    // hiij baigaa tul zaaval ID ugch haigaad baihgui yum bnle
    // eniig oilgoh gj nileen tolgoi ergev :)
    li.appendChild(checkInput);
    li.appendChild(txt);
    li.appendChild(edit);
    li.appendChild(check);
    li.appendChild(remove);
    // list uusgeed duussan tul todoList gesen ul tag ruu li elementee hiine
    todoList.appendChild(li);
  }
}

function update() {
  todoList.innerHTML = "";

  for (let i = 0; i < todoArr.length; i++) {
    const checkInput = document.createElement("input");
    checkInput.setAttribute("type", "checkbox");
    checkInput.setAttribute("class", "checkboxInput");
    checkInput.setAttribute("id", `checkInput`);
    const li = document.createElement("li");
    const txt = document.createElement("input");
    txt.value = todoArr[i];
    txt.disabled = true;
    // txt.setAttribute("id", `${i + 1}`);
    const edit = document.createElement("label");
    edit.innerText = "Edit";
    edit.setAttribute("for", "check");
    const check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.setAttribute("class", "checkboxs");
    check.setAttribute("id", `check`);
    checkInput.addEventListener("click", (e) => {
      console.log(e.target.checked);
      if (e.target.checked) {
        txt.style.textDecoration = "line-through";
      } else {
        txt.style.textDecoration = "none";
      }
    });

    edit.addEventListener("click", (e) => {
      let check = document.getElementById("check");
      if (!check.checked) {
        if (!checkInput.checked) {
          txt.disabled = false;
          e.target.innerText = "Done";
          checkInput.style.display = "none";
        } else {
          checkInput.style.display = "block";
          alert("Songogdson text baina");
        }
      } else {
        checkInput.style.display = "block";
        txt.disabled = true;
        e.target.innerText = "Edit";
      }
    });
    const remove = document.createElement("button");
    remove.innerText = "\u00d7";
    remove.addEventListener("click", (e) => {
      console.log(todoArr, todoArr.length);
      todoArr.splice(i, 1);
      console.log(todoArr, todoArr.length);
      update();
    });
    inputBox.value = "";
    console.log("check", checkInput);

    li.appendChild(checkInput);
    li.appendChild(txt);
    li.appendChild(edit);
    li.appendChild(check);
    li.appendChild(remove);
    todoList.appendChild(li);
  }
}
