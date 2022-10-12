function createMenu(){
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(
        createMenuItem(
            'ciolan afumat',
            '1 ciolan afumat, fasole boabe, morcovi, boia dulce'
        ),
    menu.appendChild(    
        createMenuItem(
            'drob de miel',
            'pate ficat de miel, orez, ceapa, marar, patrunjel, oua fierte'
        )
    ),
    menu.appendChild(
        createMenuItem(
            'placinta taraneasca',
            'Telemea, stafide, marar, zahar pudra'
        )
    ),
    menu.appendChild(
        createMenuItem(
            'sarmale',
            'foite de vita, carne de porc/vita (sau amestec), ceapa'
        )
    ),
    menu.appendChild(
        createMenuItem(
            'supa radauteana',
            'carne de pui, usturoi, ardei gras, morcovi, telina, patrunjel'
        )
    ),
    menu.appendChild(
        createMenuItem(
            'toba de porc',
            'carne de porc (rinchi, pulpa, slanina), usturoi, boia dulce'
        )
    )
    );

    return menu;

}



function createMenuItem(name, description){
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const itemName = document.createElement('p');
    itemName.textContent = name;

    const itemDescription = document.createElement('p');
    itemDescription.textContent = description;

    const itemPhoto = document.createElement('img');
    itemPhoto.src = `assets/${name.toLowerCase()}.jpg`;
    itemPhoto.alt = `${name}`;

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemDescription);
    menuItem.appendChild(itemPhoto);

    return menuItem
}


function loadMenu(){
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenu());
}

export default loadMenu;