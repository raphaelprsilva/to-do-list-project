const formToSearchTodo = document.querySelector('.search-to-do');
const formToAddNewTodo = document.querySelector('.insert-new-to-do');
const todoList = document.querySelector('ul');
const allTodosItems = Array.from(todoList.children);

const addNewTodo = (event) => {
  event.preventDefault();

  const newTodo = event.target.insert.value.trim();

  if(newTodo) {
    todoList.innerHTML += `
      <li class="is-list-item">
        <span>${newTodo}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>`;
  
    event.target.reset();
  }
};

const deleteTodo = (event) => {
  const clickedItem = event.target;
  const clickedItemClasses = Array.from(clickedItem.classList);
  const isdeleteClassIncluded = clickedItemClasses.includes('delete');

  if (isdeleteClassIncluded) {
    clickedItem.parentElement.remove();
  }
};

const filterTodos = (event) => {
  event.preventDefault();

  const findTodo = event.target.value.trim().toLowerCase();

  allTodosItems
    .filter((todo) => !todo.innerText.toLowerCase().includes(findTodo))
    .forEach((todo) => {
      todo.classList.add('invisible');
    });

  allTodosItems
    .filter((todo) => todo.innerText.toLowerCase().includes(findTodo))
    .forEach((todo) => {
      todo.classList.remove('invisible');
    });
};

formToAddNewTodo.addEventListener('submit', addNewTodo);
todoList.addEventListener('click', deleteTodo);
formToSearchTodo.addEventListener('input', filterTodos);