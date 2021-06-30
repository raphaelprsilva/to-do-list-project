const formToSearchTodo = document.querySelector('.search-to-do');
const formToAddNewTodo = document.querySelector('.insert-new-to-do');
const todoList = document.querySelector('ul');

// console.log(todoList.children);
// console.log(Array.from(todoList.children));
// console.log(Array.from(todoList.children)[0].innerText);

formToAddNewTodo.addEventListener('submit', (event) => {
  event.preventDefault();

  const newTodo = event.target.insert.value.trim();

  todoList.innerHTML += `
    <li class="is-list-item">
      <span>${newTodo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>`;

  event.target.reset();
});

todoList.addEventListener('click', (event) => {
  const clickedItem = event.target;

  if (clickedItem.className.includes('delete')) {
    clickedItem.parentElement.remove();
  }
});

formToSearchTodo.addEventListener('input', (event) => {
  event.preventDefault();

  console.log(event.target.value.trim().toLowerCase());

  Array.from(todoList.children)
    .filter((todo) => !todo.innerText.toLowerCase().includes(event.target.value.trim().toLowerCase()))
    .forEach((todo) => {
      todo.classList.add('invisible');
    });

  Array.from(todoList.children)
    .filter((todo) => todo.innerText.toLowerCase().includes(event.target.value.trim().toLowerCase()))
    .forEach((todo) => {
      todo.classList.remove('invisible');
    });
  // console.log(filteredTodos);
})