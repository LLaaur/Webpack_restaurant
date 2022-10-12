function createContact(){
    const contact = document.createElement('div');

    contact.classList.add('contact');

    const contactDescription = document.createElement('p');
    contactDescription.textContent = 'Contactati-ne pentru comenzi sau intrebari de orice fel'

    const phoneContact = document.createElement('p');
    phoneContact.textContent = '📞 123 456 789';

    const contactAddress = document.createElement('p');
    contactAddress.textContent = '🏠 Sibiu strada Caragiale nr. 13B';

    const contactMap = document.createElement('img');    
    contactMap.src = './assets/harta.png';
    contactMap.alt = 'Location of our restaurant';


    contact.appendChild(contactDescription);
    contact.appendChild(phoneContact);
    contact.appendChild(contactAddress);
    contact.appendChild(contactMap);

    return contact;
}

function loadContact(){
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createContact());
}

export default loadContact;