import { $ } from '../utils/querySelector';

export function addTodoList(category) {
  // Find the <ul> element for the given category
  const ul = $(`.todo_category.${category} ul`);
  console.log(ul);

  // Create the modal HTML
  const modalHTML = `
    <div class="modal_wrapper">
      <div class="modal">
        <input type="text" placeholder="추가할 투두를 입력하세요." />
        <button class="modal_add_btn">추가</button>
      </div>
    </div>
  `;

  // Append the modal to the <body> element
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  // Get references to the modal and its input element
  const modal = $('.modal');
  const input = $('input');

  // Add an event listener to the "Add" button
  const addBtn = $('.modal-add-btn');
  addBtn.addEventListener('click', function () {
    const todoText = input.value.trim();

    // If the input is not empty, create a new todo item and append it to the <ul>
    if (todoText) {
      const li = document.createElement('li');
      const label = document.createElement('label');
      const img = document.createElement('img');
      img.setAttribute('src', '/assets/icons/ic-todo.svg');
      img.setAttribute('alt', 'todo-unchecked');
      label.appendChild(img);
      label.appendChild(document.createTextNode(todoText));
      li.classList.add('category_item');
      li.appendChild(label);
      ul.appendChild(li);
      modal.remove(); // Remove the modal from the DOM
    }
  });

  // Add an event listener to the "Escape" key to close the modal
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      modal.remove(); // Remove the modal from the DOM
    }
  });
}
