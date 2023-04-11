//Typed script header

let typed = new Typed('.autoTyping',{
    strings:['Anne-Sophie...', 'Développeuse web...', 'Dev Fullstack...', 'Dev Front-End...', 'Dev Back-End...', 'la Dev Web qu\'il vous faut !'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    fadeOut: true,
    fadeOutClass: 'typed-fad-Out',
    fadeOutDelay: 500,
})
//Typed script header

//swiper portfolio
const swiper = new Swiper('.mySwiper',{

    breakpoints: {
        820: {
            direction: 'vertical',
            slidesPerView: 'auto',
            pagination:{
                el:".swiper-pagination"
            },
            
        }
    },
    direction: 'horizontal',
    loop: true,
    effect: 'coverflow',
    centeredSlides: 'true',
  

    mousewheel: {
        forceToAxis: true,
        EventTarget: '.mySwiper',
        releaseOnEdges : true,
        sensitivity: 2

      },

    coverFlowEffect: {
        rotate: 60,
        stretch: 0,
        slidesShadow: false
    },

    slidesPerView:"1",
    pagination:{
        el:".swiper-pagination"
    },
   

});

//swiper portfolio

//VALIDATION FORMULAIRE
// const inputsValidity ={
//     name : false,
//     surname : false,
//     mail : false,
//     sujet : false,
//     message : false
// }
// console.log(inputsValidity);

// const form = document.querySelector("form");
// console.log(form);

// form.addEventListener("submit", handleForm);

// function handleForm(e){
//     e.preventDefault();

//     const keys = Object.keys(inputsValidity);
//     console.log(keys);

//     const failedInputs = keys.filter(keyEl => !inputsValidity[keyEl]);
//     console.log(failedInputs);

//     if (failedInputs.length){
//             failedInputs.forEach(input => {
//             const cle = keys.indexOf(input);
            
//         })
//     }
//     else {
//         alert('Votre message a bien été envoyé.')
//     }
// }

// const formInput = document.querySelector("input");

// function showValidation(index, validation){
//     if(validation){
//         formInput[cle].style.backgroundColor = red;

//     }else{
//         formInput[cle].style.backgroundColor = green;
//     }
// }

// userInput.addEventListener("blur", userValidation);
// userInput.addEventListener("input", userValidation);
// const userInput = document.querySelector("#name");
// function nameValidation(){
//     if (userInput.value.length >=2){
//         inputsValidity.name = true;
//         showValidation(0, true)

//     }else{

//         showValidation(0, false)
//         inputsValidity.name = false;

//     }
// }
// const surnameInput = document.querySelector("#surname");
// function surnameValidation(){
//     if (surnameInput.value.length >=2){
//         inputsValidity.surname = true;
//         showValidation(0, true)

//     }else{

//         showValidation(0, false)
//         inputsValidity.surname = false;

//     }
// }
// const mailInput = document.querySelector("mail");

// mailInput.addEventListener("blur", mailValidation);
// mailInput.addEventListener("input", mailValidation);

// const regexEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;


// function mailValidation(){

//     if (regexEmail.test(mailInput.value)){

//         showValidation(1, true);
//         inputsValidity.mail = true ;

//     }
//     else{
//         showValidation(1, false)
//         inputsValidity.mail = false;
//     }
// }
// function surnameValidation(){
//     if (messageInput.value.length >=25){
//         inputsValidity.surname = true;
//         showValidation(0, true)

//     }else{

//         showValidation(0, false)
//         inputsValidity.surname = false;

//     }
// }


//VALIDATION FORMULAIRE

const form = document.querySelector('.formulaire');
const userInputs = document.querySelectorAll('input');
const userMessage = document.querySelector('#message');
const mailInput = document.querySelector("input:nth-child(3) input");

const regexEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

function handleForm(e){
    e.preventDefault();
}

userInputs.addEventListener('blur', inputControl);
userInputs.addEventListener('input', inputControl);

const userInputsValide = [];

function inputControl(){
    if(userInputs.value.lenght >= 2){
    userInputsValide.push(true)
    validation(index,)
    }

}



function validation (index){
    userInputsValide.forEach(userInputs);

    if(true){
        userInputs[index].style.backgroundColor = 'red';
    }
    else{
        userInputs[index].style.backgroundColor = 'red';
    }
}
