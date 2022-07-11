window.onscroll = function () {
    myFunction()
};

var navbar = document.getElementById("navbar");
var content = document.getElementById("content");
var sticky = navbar.offsetTop + 9;

function myFunction() {
    if (window.pageYOffset > sticky && navbar.offsetWidth > 650) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
