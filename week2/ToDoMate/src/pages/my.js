import { IcMy } from '../assets/icons';
function My($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
          <main class="myPage">
            <section class="myCategory">
              <h1>MY CATEGORY</h1>
              <ul>
                <li class="today" draggable="true">TODAY</li>
                <li class="todo" draggable="true">TODO</li>
                <li class="study" draggable="true">STUDY</li>
                <li class="sopt" draggable="true">SOPT</li>
              </ul>
            </section>
          </main>
        `;
  };

  this.render();
}

export default My;
