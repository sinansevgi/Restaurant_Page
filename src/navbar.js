export default function navbarBuilder()  {
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const links = document.createElement("ul");
    links.appendChild(createNavItem("home"));
    links.appendChild(createNavItem("menu"));
    links.appendChild(createNavItem("contact"));
    nav.appendChild(links);
    header.appendChild(nav);
    return header;
}

const createNavItem = (link) => {
    const navItem = document.createElement("li");
    const navLink = document.createElement("a");
    navLink.setAttribute('href', `#${link}`);
    navLink.textContent = link;
    navItem.appendChild(navLink);
    return navItem;
};
