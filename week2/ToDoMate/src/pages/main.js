import { navigate } from '../utils/navigate';
import { $ } from '../utils/querySelector';
import { IcTodo, IcTodoChecked } from '../assets/icons';
import { todoList } from '../constants/todoList';
import '../../style.css';

function Main($container) {
  let uncheckedCount = todoList.length;

  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
    <header>
        <h1>todo mate</h1>
    </header>
    <main>
        <section class="calendar_container">
            <h2 class="calendar_day">월</h2>
            <h2 class="calendar_day">화</h2>
            <h2 class="calendar_day">수</h2>
            <h2 class="calendar_day">목</h2>
            <h2 class="calendar_day">금</h2>
            <h2 class="calendar_day">토</h2>
            <h2 class="calendar_day">일</h2>

            <article class="calendar_task selected_day">
                <div class="calendar_todo_wrapper">
                    <img src="${IcTodo}" alt="투두리스트-아이콘" />
                    <p class="unchecked-count">${uncheckedCount}</p>
                </div>
                <time class="calendar_date" datetime="2023-03-27">27</time>
            </article>
            <article class="calendar_task">
                <div class="calendar_todo_wrapper">
                    <img src="${IcTodo}" alt="투두리스트-아이콘" />
                    <p>6</p>
                </div>
                <time class="calendar_date" datetime="2023-03-28">28</time>
            </article>
            <article class="calendar_task">
                <div class="calendar_todo_wrapper">
                    <img src="${IcTodo}" alt="투두리스트-아이콘" />
                    <p>6</p>
                </div>
                <time class="calendar_date" datetime="2023-03-29">29</time>
            </article>
            <article class="calendar_task">
                <div class="calendar_todo_wrapper">
                    <img src="${IcTodo}" alt="투두리스트-아이콘" />
                    <p>6</p>
                </div>
                <time class="calendar_date" datetime="2023-03-30">30</time>
            </article>
            <article class="calendar_task">
                <div class="calendar_todo_wrapper">
                    <img src="${IcTodo}" alt="투두리스트-아이콘" />
                    <p>6</p>
                </div>
                <time class="calendar_date" datetime="2023-04-01">1</time>
            </article>
            <article class="calendar_task">
                <div class="calendar_todo_wrapper">
                    <img src="${IcTodo}" alt="투두리스트-아이콘" />
                    <p>6</p>
                </div>
                <time class="calendar_date" datetime="2023-04-02">2</time>
            </article>
            <article class="calendar_task">
                <div class="calendar_todo_wrapper">
                    <img src="${IcTodo}" alt="투두리스트-아이콘" />
                    <p>6</p>
                </div>
                <time class="calendar_date" datetime="2023-04-03">3</time>
            </article>
        </section>
        <section class="todolist">
            <article class="todo_category today">
                <h3>TODAY<button type="button" class="addTodo_btn">+</button></h3>
                <ul>
                </ul>
            </article>
            <article class="todo_category todo">
                <h3>TODO<button type="button" class="addTodo_btn">+</button></h3>
                <ul>
                </ul>
            </article>
            <article class="todo_category study">
                <h3>STUDY<button type="button" class="addTodo_btn">+</button></h3>
                <ul>
                </ul>
            </article>
            <article class="todo_category sopt">
                <h3>SOPT<button type="button" class="addTodo_btn">+</button></h3>
                <ul>
                </ul>
            </article>
            <article class="todo_category etc">
                <h3>ETC<button type="button" class="addTodo_btn">+</button></h3>
                <ul>
                </ul>
            </article>
        </section>
    </main>
    `;

    const today = $('.todo_category.today ul');
    const todo = $('.todo_category.todo ul');
    const study = $('.todo_category.study ul');
    const sopt = $('.todo_category.sopt ul');
    const etc = $('.todo_category.etc ul');

    const uncheckedCountDisplay = $('.unchecked-count');

    todoList.forEach((item) => {
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
          img.classList.add('checked');
          uncheckedCount--;
          uncheckedCountDisplay.textContent = uncheckedCount;
        } else {
          img.setAttribute('src', IcTodo);
          img.setAttribute('alt', 'todo-unchecked');
          img.classList.remove('checked');
          uncheckedCount++;
          uncheckedCountDisplay.textContent = uncheckedCount;
        }
      });
      label.appendChild(img);
      label.appendChild(document.createTextNode(item.todo));
      li.classList.add('category_item');
      li.appendChild(label);

      // 카테고리별 투두리스트 보여주기
      switch (item.category) {
        case 'TODAY':
          today.appendChild(li);
          break;
        case 'TODO':
          todo.appendChild(li);
          break;
        case 'STUDY':
          study.appendChild(li);
          break;
        case 'SOPT':
          sopt.appendChild(li);
          break;
        case 'ETC':
          etc.appendChild(li);
          break;
        default:
          break;
      }
    });
  };

  this.render();
}

export default Main;
