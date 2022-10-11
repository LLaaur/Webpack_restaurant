import loadHome from "./home";

function createHeader(){
    const header = document.createElement('div');
    header.classList.add('header');

    header.appendChild(createNav());

    return header;
}

function createNav(){
    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Acasa';
    
    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Meniu';

    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'Contact';

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;
}


function createMain(){
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}


function initWebsite(){
    const content = document.getElementById('content');

    content.appendChild(createHeader());

    content.appendChild(createMain());

    loadHome();
}

export default initWebsite;