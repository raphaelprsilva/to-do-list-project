const formToAddNewTodo = document.querySelector('.insert-new-to-do');
const listItems = document.querySelector('ul');

formToAddNewTodo.addEventListener('submit', (event) => {
  event.preventDefault();

  const newTodo = event.target.insert.value.trim();
  console.log(newTodo);

  listItems.innerHTML += `
    <li class="is-list-item">
      <span>${newTodo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>`;
})