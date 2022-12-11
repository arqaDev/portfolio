const closeMenu = document.getElementById("close-menu");
const showMenu = document.getElementById("show-menu");
const about = document.getElementById("about-link");
const projects = document.getElementById("projects-link");
const contacts = document.getElementById("contacts-link");
const menu = document.getElementById("nav-menu");
const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

closeMenu.addEventListener("click", hideMenu);
showMenu.addEventListener("click", openMenu);
about.addEventListener("click", hideMenu);
projects.addEventListener("click", hideMenu);
contacts.addEventListener("click", hideMenu);

function hideMenu() {
    menu.classList.remove("show");
}

function openMenu() {
    menu.classList.add("show");
}

// Email.send({
//     SecureToken: "C973D7AD-F097-4B95-91F4-40ABC5567812",
//     To: "them@website.com",
//     From: "you@isp.com",
//     Subject: "This is the subject",
//     Body: "And this is the body",
// }).then((message) => alert(message));
