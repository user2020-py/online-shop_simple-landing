function reverseChildren(parent) {
    for (var i = 1; i < parent.childNodes.length; i++){
        parent.insertBefore(parent.childNodes[i], parent.firstChild);
    }
}
if (window.innerWidth <= 1110) {
    reverseChildren(document.getElementById("main-sec"));
}

// DropDown menu
var navbar = document.getElementById("navigation-bar__items");
var btn = document.getElementById("dropdown_icon");
var show = false;

function setStyle() {
    if (!show) {
        btn.className = "fas fa-times";
        show = true;
        navbar.style.marginTop = "1rem";
        navbar.style.opacity = "1";
    } else {
        btn.className = "fas fa-bars";
        show = false;
        navbar.style.marginTop = "-130px";
        navbar.style.opacity = "0";
    }
    
}