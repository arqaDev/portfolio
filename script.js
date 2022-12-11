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
form.addEventListener("submit", sendMessage);

function hideMenu() {
    menu.classList.remove("show");
}

function openMenu() {
    menu.classList.add("show");
}

function sendMessage(e) {
    e.preventDefault();

    Email.send({
        SecureToken: "3d48748e-98f8-4015-b4e9-ff63cdd53664",
        To: "arqa1996@gmail.com",
        From: email.value,
        Subject: "Contact Form",
        Body: message.value,
    }).then((message) => alert(message));
}
