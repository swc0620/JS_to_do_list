const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];
function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos))
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
    
    handleQuote();
}


function paintToDo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerHTML = newTodoObj.text;
    const button =document.createElement("button");
    button.innerHTML = "❌";
    button.style.marginLeft = "5px";
    button.style.marginBottom = "3px";
    button.style.borderRadius = "5px";
    button.style.border = 0;
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj)
    paintToDo(newTodoObj);
    saveToDos();

    handleQuote();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

const quote1 = document.querySelector("#quote")

function handleQuote() {
    let savedTodoList = localStorage.getItem(TODOS_KEY);
    savedTodoList = savedTodoList.slice(1, savedTodoList.length-1)
    if (savedTodoList.length !== 0) {
        quote1.classList.add("hidden");
    } else {
        quote1.classList.remove("hidden");
    }
}

