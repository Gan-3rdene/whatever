const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.offscreen');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

export function changeToLibrary(){
    // var url = "https://gan-3rdene.github.io/sub_pages/library.html";
    var url = "./sub_pages/library.html";
    window.location.replace(url);
}

export function changeToGame(){
    // var url = "https://gan-3rdene.github.io/sub_pages/library.html";
    var url = "./sub_pages/game.html";
    window.location.replace(url);
}

export function changeToMain(){
    // var url = "https://gan-3rdene.github.io/sub_pages/library.html";
    var url = "../index.html";
    window.location.replace(url);
}

export function signup() {
    var url = "./sub_pages/login.html"
    window.location.replace(url)
}