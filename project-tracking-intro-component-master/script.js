var mobile_nav = document.getElementById("mobile_nav");
var hamburger_nav = document.getElementById("hamburger");
var close_nav = document.getElementById("close");

function toggle_hamburger(){
    hamburger_nav.style.display = "none";
    close_nav.style.display = "block";
    mobile_nav.style.display = "flex";
}

function toggle_close(){
    hamburger_nav.style.display = "block";
    close_nav.style.display = "none";
    mobile_nav.style.display = "none";
}