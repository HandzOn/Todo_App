var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
  'Fazer café',
  'Estudar Javacript',
  'Estudar Node.js',
];

function renderTodos() {
  listElement.innerHTML = '';
  for (var todo of todos) {
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);
    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', '#');
    var position = todos.indexOf(todo);
    linkElement.setAttribute('onclick', 'deleteTodo(' + position + ')');
    var linkText = document.createTextNode('Excluir');

    linkElement.appendChild(linkText);
    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);

    listElement.appendChild(todoElement);
  }
}

function addTodo() {
  var todoText = inputElement.value;
  todos.push(todoText);
  inputElement.value = '';
  renderTodos();
}

function deleteTodo(position) {
  todos.splice(position, 1);
  renderTodos();
}

renderTodos();

buttonElement.onclick = addTodo;
