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

const filterTodo = (allTodosItems, inputValue, returnMatchedTodos) =>
  allTodosItems.filter((todo) => {
    const matchedTodos = todo.innerText.toLowerCase().includes(inputValue);
    return returnMatchedTodos ? matchedTodos : !matchedTodos;
  });

const manipulateTodos = (arrayOfTodos, classToAdd, classToRemove) => {
  arrayOfTodos.forEach((todo) => {
    todo.classList.add(classToAdd);
    todo.classList.remove(classToRemove);
  });
};

const hideTodo = (allTodosItems, inputValue) => {
  const todosToHide = filterTodo(allTodosItems, inputValue, false);
  console.log(todosToHide);
  manipulateTodos(todosToHide, 'invisible', 'inherit');
};

const showTodo = (allTodosItems, inputValue) => {
  const todosToShow = filterTodo(allTodosItems, inputValue, true);
  manipulateTodos(todosToShow, 'inherit', 'invisible');
};

const filterTodos = (event) => {
  event.preventDefault();

  const allTodosItems = Array.from(todoList.children);
  const inputValue = event.target.value.trim().toLowerCase();

  hideTodo(allTodosItems, inputValue);
  showTodo(allTodosItems, inputValue);
};

formToAddNewTodo.addEventListener('submit', addNewTodo);
todoList.addEventListener('click', deleteTodo);
formToSearchTodo.addEventListener('submit', (event) => event.preventDefault());
formToSearchTodo.addEventListener('input', filterTodos);
