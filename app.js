const formToSearchTodo = document.querySelector('.search-to-do');
const formToAddNewTodo = document.querySelector('.insert-new-to-do');
const todoList = document.querySelector('ul');

const addNewTodo = (event) => {
  event.preventDefault();

  const newTodo = event.target.insert.value.trim();

  if (newTodo) {
    todoList.innerHTML += `
      <li class="is-list-item" data-todo="${newTodo}">
        <span>${newTodo}</span>
        <i class="far fa-trash-alt" data-trash="${newTodo}"></i>
      </li>`;

    event.target.reset();
  }
};

const removeTodo = (clickedItem) => {
  const dataTrashValue = clickedItem.dataset.trash;
  const todo = document.querySelector(`[data-todo="${dataTrashValue}"]`);

  if (dataTrashValue) {
    todo.remove();
  }
};

const deleteTodo = (event) => {
  const clickedItem = event.target;
  removeTodo(clickedItem);
};

const filterTodo = (allTodosItems, inputValue, returnMatchedTodos) => {
  return allTodosItems.filter((todo) => {
    const matchedTodos = todo.innerText.toLowerCase().includes(inputValue);
    return returnMatchedTodos ? matchedTodos : !matchedTodos;
  });
};

const manipulateTodos = (arrayOfTodos, classToAdd) => {
  arrayOfTodos.forEach((todo) => {
    todo.classList.add(classToAdd);
  });
};

const hideTodo = (allTodosItems, inputValue, classToAdd) => {
  const todosToHide = filterTodo(allTodosItems, inputValue, false);
  console.log(todosToHide);
  manipulateTodos(todosToHide, classToAdd);
};

const showTodo = (allTodosItems, inputValue, classToRemove) => {
  const todosToShow = filterTodo(allTodosItems, inputValue, true);
  manipulateTodos(todosToShow, classToRemove);
};

const filterTodos = (event) => {
  event.preventDefault();

  const allTodosItems = Array.from(todoList.children);
  const inputValue = event.target.value.trim().toLowerCase();

  hideTodo(allTodosItems, inputValue, 'invisible');
  showTodo(allTodosItems, inputValue, 'invisible');
};

formToAddNewTodo.addEventListener('submit', addNewTodo);
todoList.addEventListener('click', deleteTodo);
formToSearchTodo.addEventListener('submit', (event) => event.preventDefault());
formToSearchTodo.addEventListener('input', filterTodos);
