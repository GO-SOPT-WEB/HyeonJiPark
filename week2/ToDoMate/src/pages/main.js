function Main($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
        <main class="mainPage">
          메인페이지
        </main>
      `;
  };

  this.render();
}

export default Main;
