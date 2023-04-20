function My($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
          <main class="myPage">
            마이페이지
          </main>
        `;
  };

  this.render();
}

export default My;
