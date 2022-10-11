import loadHome from "./home";

function initWebsite(){
    const content = document.getElementById('content');

    content.appendChild(createMain());

    loadHome();
}

function createMain(){
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}

export default initWebsite;