// get DOM elements
const newTodoInput = document.getElementById('new-todo');
const addTodoButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

// add event listener to add todo button
addTodoButton.addEventListener('click', function() {
  const todoText = newTodoInput.value;
  if (todoText !== '') {
    const todoItem = document.createElement('li');
    const todoTextSpan = document.createElement('span');
    const deleteButton = document.createElement('button');
    todoTextSpan.innerText = todoText;
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', function() {
      todoItem.remove();
    });
    todoItem.appendChild(todoTextSpan);
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
    newTodoInput.value = '';
  }
});




