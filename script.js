window.addEventListener("scroll", function(){

const menu = document.querySelector(".top-menu");

if(window.scrollY > 50){

menu.style.background = "rgba(0,0,0,0.72)";
menu.style.backdropFilter = "blur(10px)";
menu.style.transition = "0.4s";

}else{

menu.style.background = "transparent";
menu.style.backdropFilter = "blur(0px)";

}

});

const cards = document.querySelectorAll(".dish-card");

cards.forEach(card => {

card.addEventListener("mouseenter", () => {

card.style.boxShadow = "0 0 25px rgba(212,165,93,0.35)";

});

card.addEventListener("mouseleave", () => {

card.style.boxShadow = "none";

});

});

const links = document.querySelectorAll(".side-menu a");

links.forEach(link => {

link.addEventListener("mouseenter", () => {

link.style.transform = "translateX(6px)";

});

link.addEventListener("mouseleave", () => {

link.style.transform = "translateX(0px)";

});

});

function openPhoneMenu(e, phone){

e.preventDefault();

const menu = document.getElementById("popup-menu");

menu.innerHTML = `

<a href="tel:${phone}">
Подзвонити
</a>

<a href="https://t.me/${phone.replace('+','')}" target="_blank">
Telegram
</a>

<a href="viber://chat?number=${phone}">
Viber
</a>

`;

menu.style.display = "block";

menu.style.left = e.pageX + "px";
menu.style.top = e.pageY + "px";

}

function openEmailMenu(e, email){

e.preventDefault();

window.open(
`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
'_blank'
);

}

<a href="mailto:${email}">
Відкрити Gmail
</a>

`;

menu.style.display = "block";

menu.style.left = e.pageX + "px";
menu.style.top = e.pageY + "px";

}

document.addEventListener("click", function(e){

if(!e.target.classList.contains("contact-link")){

document.getElementById("popup-menu").style.display = "none";

}

});