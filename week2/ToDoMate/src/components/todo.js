import { $ } from '../utils/querySelector';
import { IcTodo, IcTodoChecked } from '../assets/icons';

export function addTodoList(category, uncheckedCountDisplay) {
  // let uncheckedCount = inCompletedCount;
  const ul = $(`.todo_category.${category} ul`);

  // 모달 생성
  const modalHTML = `
    <div class="modal_wrapper">
      <div class="modal">
        <input type="text" placeholder="추가할 투두를 입력하세요." />
        <button class="modal_add_btn">추가</button>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHTML);

  const modalSection = $('.modal');
  const input = $('input');

  const addBtn = $('.modal_add_btn');
  addBtn.addEventListener('click', function () {
    const todoText = input.value.trim();

    // 작성한 투두리스트 추가
    if (todoText) {
      const li = document.createElement('li');
      const label = document.createElement('label');
      const img = document.createElement('img');
      img.setAttribute('src', IcTodo);
      img.setAttribute('alt', 'todo-unchecked');

      // 완료한 투두 체크 및 카운트
      img.addEventListener('click', function () {
        if (img.getAttribute('alt') === 'todo-unchecked') {
          img.setAttribute('src', IcTodoChecked);
          img.setAttribute('alt', 'todo-checked');
          uncheckedCount--;
          uncheckedCountDisplay.textContent = inCompletedCount;
        } else {
          img.setAttribute('src', IcTodo);
          img.setAttribute('alt', 'todo-unchecked');
          uncheckedCount++;
          uncheckedCountDisplay.textContent = inCompletedCount;
        }
      });

      label.appendChild(img);
      label.appendChild(document.createTextNode(todoText));
      li.classList.add('category_item');
      li.appendChild(label);
      ul.appendChild(li);
      uncheckedCount++;
      console.log(inCompletedCount);
      uncheckedCountDisplay.textContent = inCompletedCount;
      modalSection.parentNode.remove();
    }
  });
}
