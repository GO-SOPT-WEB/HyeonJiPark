function Router($container) {
  this.$container = $container;

  const findMatchedRoute = () => routes.find((route) => route.path.test(location.pathname));

  const route = () => {
    const TargetPage = findMatchedRoute().element();
    new TargetPage(this.$container);
  };

  const init = () => {
    window.addEventListener('historychange', ({ detail }) => {
      const { to, isReplace } = detail;

      if (isReplace || to === location.pathname) history.replaceState(null, '', to);
      else history.pushState(null, '', to);

      route();
    });

    window.addEventListener('historychange', ({ detail }) => {
      const { to, isReplace } = detail;

      if (isReplace || to === location.pathname) history.replaceState(null, '', to);
      else history.pushState(null, '', to);

      route();
    });
  };

  init();
  route();
}
