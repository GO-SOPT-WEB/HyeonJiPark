$('.navbar').addEventListener('click', (e) => {
  const target = e.target.closest('a');
  if (!(target instanceof HTMLAnchorElement)) return;

  e.preventDefault();
  const targetURL = e.target.href.replace(BASE_URL, '');
  navigate(targetURL);
});
