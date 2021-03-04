export default function homeBuilder() {
  const section = document.createElement('section');
  const welcomeMessage = document.createElement('h1');
  const welcomeImage = document.createElement('img');

  const headerImage = 'https://loremflickr.com/800/600/pizza';
  welcomeImage.setAttribute('src', headerImage);
  welcomeImage.setAttribute('alt', 'Probably pizza');
  welcomeImage.classList.add('pizza-img');
  welcomeMessage.textContent = "🍕 Welcome to Sinan's Pizzeria 🍕";

  section.appendChild(welcomeMessage);
  section.appendChild(welcomeImage);
  section.setAttribute('id', 'home');
  section.classList.add('top-section');
  return section;
}