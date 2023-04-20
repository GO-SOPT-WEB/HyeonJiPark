import { navigate } from '../utils/navigate';
import { $ } from '../utils/querySelector';
import { IcCalendar, IcMy, IcTodo } from '../assets/icons';
import { todoList } from '../constants/todoList';
import '../../style.css';

function Main($container) {
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
                    <p>6</p>
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
                <h3>TODAY</h3>
                <ul>
                </ul>
            </article>
            <article class="todo_category todo">
                <h3>TODO</h3>
                <ul>
                </ul>
            </article>
            <article class="todo_category study">
                <h3>STUDY</h3>
                <ul>
                </ul>
            </article>
            <article class="todo_category sopt">
                <h3>SOPT</h3>
                <ul>
                </ul>
            </article>
            <article class="todo_category etc">
                <h3>ETC</h3>
                <ul>
                </ul>
            </article>
        </section>
    </main>
    `;

    const ulToday = $('.todo_category.today ul');
    const ulTodo = $('.todo_category.todo ul');
    const ulStudy = $('.todo_category.study ul');
    const ulSopt = $('.todo_category.sopt ul');
    const ulEtc = $('.todo_category.etc ul');

    todoList.forEach((item) => {
      const li = document.createElement('li');
      const label = document.createElement('label');
      //   const input = document.createElement('input');
      const img = document.createElement('img');
      img.setAttribute('src', IcTodo);
      img.setAttribute('alt', 'todo-checkbox');

      //   input.setAttribute('type', 'checkbox');
      img.classList.add();
      label.appendChild(img);

      li.classList.add('category_item');
      label.appendChild(document.createTextNode(item.todo));
      li.classList.add('category_item');
      li.appendChild(label);

      //   input.setAttribute('type', 'checkbox');
      //   input.appendChild(document.createTextNode(item.todo));
      // input.textContent = item.todo;

      switch (item.category) {
        case 'TODAY':
          ulToday.appendChild(li);
          break;
        case 'TODO':
          ulTodo.appendChild(li);
          break;
        case 'STUDY':
          ulStudy.appendChild(li);
          break;
        case 'SOPT':
          ulSopt.appendChild(li);
          break;
        case 'ETC':
          ulEtc.appendChild(li);
          break;
        default:
          break;
      }
    });
  };

  this.render();
}

export default Main;
