const closeMenu = document.getElementById("close-menu");
const showMenu = document.getElementById("show-menu");
const about = document.getElementById("about-link");
const projects = document.getElementById("projects-link");
const contacts = document.getElementById("contacts-link");
const menu = document.getElementById("nav-menu");
const form = document.getElementById("form");
const sendButton = document.getElementById("send-btn");

closeMenu.addEventListener("click", hideMenu);
showMenu.addEventListener("click", openMenu);
about.addEventListener("click", hideMenu);
projects.addEventListener("click", hideMenu);
contacts.addEventListener("click", hideMenu);
sendButton.addEventListener("click", sendMessage);

function hideMenu() {
    menu.classList.remove("show");
}

function openMenu() {
    menu.classList.add("show");
}

function sendMessage(e) {
    e.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    let body =
        "name: " +
        name.value +
        "<br/> email: " +
        email.value +
        "<br/> subject: " +
        name.value +
        "<br/> message: " +
        message.value;

    Email.send({
        Host: "smtp.gmail.com",
        Username: "arqa1996@gmail.com",
        Password: "aoznxnlrdauudwvt",
        To: "arqa1996@gmail.com",
        From: email.value,
        Subject: name.value,
        Body: body,
    }).then((message) => alert(message));
}
