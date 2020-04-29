//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoClock = document.querySelector('.clock')

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
setInterval(updateClock, 100);
function addTodo(event){
  event.preventDefault(); //stop refresh on "server" proc
  const todoDiv = document.createElement('div');
  todoDiv.classList.add("todo");
  //li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('completed-btn');
  todoDiv.appendChild(completedButton);

  const trashbutton = document.createElement('button');
  trashbutton.innerHTML = '<i class="fas fa-trash"></i>';
  trashbutton.classList.add('trash-btn');
  todoDiv.appendChild(trashbutton);

  todoList.appendChild(todoDiv);

  todoInput.value = "";
}

function deleteCheck(e){
  const item = e.target;
  if(item.classList[0] === 'trash-btn'){
    const todo = item.parentElement;
    todo.classList.add("fall")
  }

  if(item.classList[0] === 'completed-btn'){
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function updateClock(){
  var today = new Date();
  if (today.getSeconds() < 10){
    var time = today.getHours() + ":" + today.getMinutes() + ":0" + today.getSeconds();
  }else{
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
}
todoClock.innerText = time;
}
