import loadHome from "./home";
import loadMenu from "./menu";

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
    homeBtn.addEventListener('click', () => {
        loadHome();
    });
    
    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Meniu';
    menuBtn.addEventListener('click', () => {
        loadMenu();
    });


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

function createFooter(){
    const footer = document.createElement('div');
    footer.classList.add('footer');

    const copyright = document.createElement('p');
    copyright.textContent = `Copyright © ${new Date().getFullYear()} LLaaur`;

    const githubAccount = document.createElement('a');
    githubAccount.href = 'https://github.com/LLaaur';

    const githubIcon = document.createElement('i');
    githubIcon.classList.add('fab');
    githubIcon.classList.add('fa-github');

    footer.appendChild(copyright);
    githubAccount.appendChild(githubIcon);
    footer.appendChild(githubAccount);

    return footer
}

function initWebsite(){
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    loadHome();
}

export default initWebsite;