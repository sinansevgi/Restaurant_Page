export default function contactBuilder(newChild)  {
    const section = document.createElement("section");
    const mapDiv = document.createElement("div");
    const addressDiv = document.createElement("div");

    const address = document.createElement("address");
    const mapImage = document.createElement("img");


    let map = "https://upload.wikimedia.org/wikipedia/commons/f/f7/Soho_-_map_1.png";
    mapImage.setAttribute('src', map);
    mapImage.setAttribute('alt', "our location");
    mapImage.classList.add('map-image');
    address.innerHTML = `Phone order:<br>
                <a href="tel:+11112223344">(111) 222-3344</a><br>
                Visit us at:<br>
                Box 564, Pizzaland<br>
                Pizza Republic
    `;
    addressDiv.classList.add('address-container');

    addressDiv.appendChild(address);
    mapDiv.appendChild(mapImage);
    section.appendChild(mapDiv);
    section.appendChild(addressDiv);
    section.classList.add('contact-section');

    return section;
}