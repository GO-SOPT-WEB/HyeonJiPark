import { IcMy } from '../assets/icons';
function My($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
          <main class="myPage">
            마이페이지
            <img src="${IcMy}" alt="MyPage-아이콘" />
          </main>
        `;
  };

  this.render();
}

export default My;
