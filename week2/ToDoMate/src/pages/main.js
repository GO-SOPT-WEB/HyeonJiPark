import { navigate } from '../utils/navigate';
import { $ } from '../utils/querySelector';
import { IcCalendar, IcMy, IcTodo } from '../assets/icons';

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
    <footer class="footer_wrapper">
        <button class="footer_btn" type="button">
            <img src="${IcCalendar}" alt="달력-아이콘" />
            <p>달력</p>
        </button>
        <button class="footer_btn" type="button">
            <img src="${IcMy}" alt="My-아이콘" />
            <p>My</p>
        </button>
    </footer>
    `;
  };

  this.render();
}

export default Main;
