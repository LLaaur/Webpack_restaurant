function createHome(){
    const home = document.createElement('div');

    home.classList.add('home');

    home.appendChild(createParagraph('Bucatarie romaneasca traditionala!')).classList.add('home-h1');
    home.appendChild(createParagraph("La dispozitia dvs. din 1891!")).classList.add('home-h1');

    return home
}

function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}

function loadHome(){
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome());
}

export default loadHome;