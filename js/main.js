let menuButton = document.querySelector("#menu");
let menu = document.querySelector(".nav-bar");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuButton.classList.toggle("fa-times");
});

//News Letter Form Validation
let email = document.querySelector("#email");
let form = document.querySelector('#form');

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    let emailValue = email.value.trim();

    if (emailValue === '') {
        setErrorFor(email, 'Email cant be empty');
    } else {
        setSuccessFor(email);
    }
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('.error-msg');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//Show more Our Works
let showBtn = document.querySelector(".show-more");
let hiddenBox = document.querySelectorAll(".hidden");

showBtn.addEventListener("click", function () {
    hiddenBox.forEach((box) => {
        box.classList.toggle("hidden");
        if (box.classList.contains('hidden')) {
            showBtn.innerHTML = "show more";
        } else {
            showBtn.innerHTML = "show less";
        }
    });
});

//Testimonials section
let testimonialsArray = [{
        quote: "These guys are incredible! I get my project in 10 days and it was awesome! Very good service! Highly recommended!",
        writer: "john smith",
        avatar: "img/avatar.png",
    },
    {
        quote: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem distinctio harum recusandae. Possimus consequatur",
        writer: "ahmad issa",
        avatar: "img/team-2.png",
    },
    {
        quote: "These guys are incredible! I get my project in 10 days and it was awesome! Very good service! Highly recommended!",
        writer: "sami ghosen",
        avatar: "img/team-4.png",
    }
];

let buttons = document.querySelectorAll(".testimonials-container i");
let avatar = document.querySelector(".avatar img");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");
let counter = 0;

avatar.src = testimonialsArray[counter].avatar;
quote.innerHTML = testimonialsArray[counter].quote;
writer.innerHTML = testimonialsArray[counter].writer;

buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
        if (button.classList.contains('fa-chevron-left')) {
            counter--;
            if (counter < 0) {
                counter = testimonialsArray.length - 1
            }
            avatar.src = testimonialsArray[counter].avatar;
            quote.innerHTML = testimonialsArray[counter].quote;
            writer.innerHTML = testimonialsArray[counter].writer;
        }
        if (button.classList.contains('fa-chevron-right')) {
            counter++;
            if (counter > testimonialsArray.length - 1) {
                counter = 0
            }
            avatar.src = testimonialsArray[counter].avatar;
            quote.innerHTML = testimonialsArray[counter].quote;
            writer.innerHTML = testimonialsArray[counter].writer;
        }
    });
});

//Our Team Section
let teamSection = document.querySelectorAll(".team-section");
let dotsButtons = document.querySelectorAll(".dots span");

dotsButtons.forEach((span) => {
    span.addEventListener("click", function (e) {
        dotsButtons.forEach((sp) => {
            sp.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        teamSection.forEach((section) => {
            section.classList.remove("active");
        });
        document.querySelector('.' + e.currentTarget.dataset.cont).classList.add("active");
    });
});

//Contact Us
let subject = document.querySelector('#subject');
let mail = document.querySelector('#mail');
let msg = document.querySelector('#msg');
let contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', e => {
    e.preventDefault();
    checkInput();
});

function checkInput() {
    let mailValue = mail.value.trim();
    let subjectValue = subject.value.trim();
    let msgValue = subject.value.trim();

    if(subjectValue === ''){
        subject.style.border = '2px solid red';
    }else{
        subject.style.border = '';
    }

    if(mailValue === ''){
        mail.style.border = '2px solid red';
    }else{
        mail.style.border = '';
    }

    if(msgValue === ''){
        msg.style.border = '2px solid red';
    }else{
        msg.style.border = '';
    }
}

//Go to the top
let upButton = document.querySelector('.up');

window.onscroll = function(){
    this.scrollY >= 800 ? upButton.classList.add("show") : upButton.classList.remove("show");
}

upButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});