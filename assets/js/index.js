// to make the navbar
document.addEventListener('click', function (event) {
  if (!event.target.matches('.siv')) return;
  event.preventDefault();
  const element = document.getElementById(event.target.dataset.target);
  element.scrollIntoView();
});