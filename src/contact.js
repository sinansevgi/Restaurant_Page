export default function contactBuilder() {
  const section = document.createElement('section');
  const mapDiv = document.createElement('div');
  const addressDiv = document.createElement('div');


  const address = document.createElement('address');
  const mapImage = document.createElement('img');


  const map = 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Soho_-_map_1.png';
  mapImage.setAttribute('src', map);
  mapImage.setAttribute('alt', 'our location');
  mapImage.classList.add('map-image');
  address.textContent = `Phone order:
  (111) 222 33 44
  Visit us at:
  Box 564, Pizzaland
  Pizza Republic`;

  addressDiv.classList.add('address-container');

  addressDiv.appendChild(address);
  mapDiv.appendChild(mapImage);
  section.appendChild(mapDiv);
  section.appendChild(addressDiv);
  section.setAttribute('id', 'contact');
  section.classList.add('contact-section');

  return section;
}