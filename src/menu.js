const menuItem = (item) => {
  const itemContainer = document.createElement('div');
  const menuText = document.createElement('div');
  const menuImage = document.createElement('img');
  const menuTitle = document.createElement('h2');
  const menuContent = document.createElement('p');

  itemContainer.classList.add('menu-item');
  menuText.classList.add('menu-text');
  menuContent.classList.add('menu-content');
  menuTitle.classList.add('menu-title');
  menuImage.classList.add('menu-image');
  menuContent.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
      + 'Assumenda at doloremque eaque et explicabo facere '
      + 'fugit in ipsum laborum obcaecati odio officiis quidem,'
      + ' rem sint ullam velit voluptas voluptatem voluptatibus.';
  menuTitle.textContent = `FOOD ${item}`;
  menuImage.setAttribute('src', `https://loremflickr.com/300/200/pizza?random=${item}`);
  itemContainer.appendChild(menuImage);
  menuText.appendChild(menuTitle);
  menuText.appendChild(menuContent);
  itemContainer.appendChild(menuText);
  return itemContainer;
};

export default () => {
  const section = document.createElement('section');
  const grid = document.createElement('div');
  for (let i = 1; i < 7; i += 1) {
    grid.appendChild(menuItem(i));
  }
  section.classList.add('menu-section');
  grid.classList.add('menu-grid');
  section.appendChild(grid);
  section.setAttribute('id', 'menu');
  return section;
};
