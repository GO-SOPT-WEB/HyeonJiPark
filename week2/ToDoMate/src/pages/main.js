import { navigate } from '../utils/navigate';
import { $ } from '../utils/querySelector';
import { IcCalendar } from '../assets/icons';

function Main($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
      <main class="mainPage">
        메인 페이지
        <img src="${IcCalendar}" alt="캘린더 아이콘" />
      </main>
    `;
  };

  this.render();
}

export default Main;

// week2 / ToDoMate / src / pages / main.js;
// week2 / ToDoMate / src / assets / icons / ic_calendar.svg;
