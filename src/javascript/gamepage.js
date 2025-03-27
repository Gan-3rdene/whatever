const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.offscreen');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

function changeToLibrary(){
    // var url = "https://gan-3rdene.github.io/sub_pages/library.html";
    var url = "./library.html";
    window.location.replace(url);
}

function changeToMain(){
    // var url = "https://gan-3rdene.github.io/sub_pages/library.html";
    var url = "../index.html";
    window.location.replace(url);
}

function signup() {
    var url = "/login.html"
    window.location.replace(url)
}