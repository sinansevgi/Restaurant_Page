import navbarBuilder from './navbar';
import homeBuilder from './home';
import contactBuilder from './contact';
import menuBuilder from './menu';

const cleanButtons = () => {
  const navs = document.querySelectorAll('.nav-item');
  navs.forEach((item) => { item.classList.remove('active'); });
};

const changePage = (page) => {
  const content = document.getElementById('content');
  const button = document.getElementById(`${page.id}-button`);
  cleanButtons();
  button.classList.add('active');
  content.removeChild(content.lastChild);
  content.appendChild(page);
};

const loadPage = () => {
  const home = document.getElementById('home-button');
  const contact = document.getElementById('contact-button');
  const menu = document.getElementById('menu-button');
  home.classList.add('active');
  home.addEventListener('click', () => { changePage(homeBuilder()); });
  contact.addEventListener('click', () => { changePage(contactBuilder()); });
  menu.addEventListener('click', () => { changePage(menuBuilder()); });
};

const content = document.getElementById('content');
content.appendChild(navbarBuilder());
content.appendChild(homeBuilder());
loadPage();
