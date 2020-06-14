const todoForm = document.querySelector(".toDo_form"),
  todoInput = document.querySelector(".todo-input"),
  pendingList = document.querySelector("#pending"),
  finishedList = document.querySelector("#finished");

let pendings = [];
let finisheds = [];
const PENDING_LS = "PENDING";
const FINISHED_LS = "FINISHED";

let ID = -1;

function deleteList(event) {
  const li = event.target.parentNode;

  if (li.parentNode.id === "pending") {
    pendings = pendings.filter(element => {
      return element.id !== li.id;
    });

    savePendings(pendings);
  } else {
    finisheds = finisheds.filter(element => element.id !== li.id);
    saveFinisheds(finisheds);
  }
  li.remove();
}

function moveToFinish(event) {
  const li = event.target.parentNode;
  const text = li.childNodes[0].innerText;
  addFinished(text, li.id);
  deleteList(event);
}
function moveToPending(event) {
  const li = event.target.parentNode;
  const text = li.childNodes[0].innerText;
  addPending(text, li.id);
  deleteList(event);
}

function makeLi(text, id) {
  const li = document.createElement("li");
  const deletebtn = document.createElement("button");
  deletebtn.addEventListener("click", deleteList);
  const span = document.createElement("span");
  span.innerText = text;
  deletebtn.innerText = "❌";
  li.id = id;
  li.appendChild(span);
  li.appendChild(deletebtn);
  return li;
}
function makePendingList(text, id) {
  const li = makeLi(text, id);
  const finishbtn = document.createElement("button");
  finishbtn.addEventListener("click", moveToFinish);
  finishbtn.innerText = "✅";
  li.appendChild(finishbtn);
  return li;
}
function makeFinishList(text, id) {
  const li = makeLi(text, id);
  const btn = document.createElement("button");
  btn.addEventListener("click", moveToPending);
  btn.innerText = "🔁";
  li.appendChild(btn);
  return li;
}
function addPending(text, id = -1) {
  if (id === -1) ID = ID + 1;
  const li = makePendingList(text, id === -1 ? ID : id);

  pendingList.appendChild(li);
  pendings.push({
    text,
    id: li.id
  });
  savePendings();
}
function addFinished(text, id = -1) {
  if (id === -1) ID = ID + 1;
  const li = makeFinishList(text, id === -1 ? ID : id);

  finishedList.appendChild(li);
  finisheds.push({
    text,
    id: li.id
  });
  saveFinisheds();
}
function savePendings() {
  localStorage.setItem(PENDING_LS, JSON.stringify(pendings));
}
function saveFinisheds() {
  localStorage.setItem(FINISHED_LS, JSON.stringify(finisheds));
}

function handleSubmit(event) {
  event.preventDefault();
  addPending(todoInput.value);

  event.target.childNodes[1].value = "";
}
function loadToDoList() {
  const loadPendings = JSON.parse(localStorage.getItem(PENDING_LS));
  const loadFinisheds = JSON.parse(localStorage.getItem(FINISHED_LS));

  if (loadPendings !== null) {
    loadPendings.forEach(element => {
      let id = parseInt(element.id);
      ID = id > ID ? id : ID;
      return pendingList.appendChild(makePendingList(element.text, id));
    });
    pendings = loadPendings;
  }
  if (loadFinisheds !== null) {
    loadFinisheds.forEach(({ text, id }) => {
      id = parseInt(id);
      ID = id > ID ? id : ID;
      finishedList.appendChild(makeFinishList(text, id));
    });
    finisheds = loadFinisheds;
  }
}
function init() {
  loadToDoList();
  todoForm.addEventListener("submit", handleSubmit);
}

init();
