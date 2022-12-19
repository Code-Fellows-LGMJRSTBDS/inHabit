function classToggle() {
  const navs = document.querySelectorAll('.nav-items-right')
  
  navs.forEach(nav => nav.classList.toggle('nav-toggle'));
}

document.querySelector('.Navbar__Link-toggle')
  .addEventListener('click', classToggle);