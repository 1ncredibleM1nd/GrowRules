document.addEventListener('DOMContentLoaded', function () {
    class Counter {
        constructor() {
            this.count = 0;
        }

        decrement() {
            if (this.count === 0) {
                this.count = 3;
            }
            this.count--;
            console.log(this.count)
        }

        increment() {
            if (this.count === 2) {
                this.count = -1;
            }
            ++this.count;
            console.log(this.count)
        }
    }

    if ($('.carousel').length) {

        const buttonNext = document.querySelector('.carousel-next'),
         buttonPrev = document.querySelector('.carousel-prev'),
            tabs = document.querySelectorAll('.carousel_item'),
            iterators=document.querySelectorAll('.circle');

        tabs.forEach(item => {
            item.style.display = 'none';
        });
        tabs[0].style.display = 'flex';
        const counter = new Counter();
        buttonNext.addEventListener('click', ()=>{
            tabs[counter.count].style.display = 'none';
            iterators[counter.count].classList.remove('active');
            counter.increment();
            tabs[counter.count].style.display = 'flex';
            iterators[counter.count].classList.add('active');
        });
        buttonPrev.addEventListener('click', ()=>{
            tabs[counter.count].style.display = 'none';
            iterators[counter.count].classList.remove('active');
            counter.decrement();
            tabs[counter.count].style.display = 'flex';
            iterators[counter.count].classList.add('active');
        });

    }
    const regionButton = document.querySelector('.region'),
        trueButton = document.querySelector('.answer-true'),
        falseButton = document.querySelector('.answer-false'),
        locationChose = document.querySelector('.location-chose');
    locationChose.style.display = 'none';
    regionButton.addEventListener('click', () => {
        locationChose.style.display = 'block';
        window.onscroll = function () {
            window.scrollTo(0, 0);
        };

    });
    trueButton.addEventListener('click', () => {
        locationChose.style.display = 'none';
        window.onscroll = function () {
            window.onscroll = null;
        };

    });
    falseButton.addEventListener('click', () => {
    });
    if($('.enter__form').length){

        cityBlock = document.querySelector('.city'),
        enterBtn=document.querySelector('.header-list__btn'),
        enterForm=document.querySelector('.enter'),
        closeBtn=document.querySelector('.close_btn'),
        registrateBtn=document.querySelector('.registrate'),
        registrateForm=document.querySelector('.registration'),
        registrature=document.querySelector('.registrature'),
        registrationClose =document.querySelector('.registration_close'),
        successForm=document.querySelector('.success'),
        successClose=document.querySelector('.success_close'),
        forgetBtn=document.querySelector('.forget__password'),
        forgetTab=document.querySelector('.forget'),
        returnBtn=document.querySelector('.return'),
        readyBtn=document.querySelector('.ready-btn'),
        passwordSuccess=document.querySelector('.password__success'),
        passwordSuccessBtn=document.querySelector('.password-success-btn');

    passwordSuccess.style.display='none';
    forgetTab.style.display='none';

    enterForm.style.display='none';
    registrateForm.style.display='none';
    successForm.style.display='none';



    enterBtn.addEventListener('click', ()=>{
        enterForm.style.display='block';
        window.onscroll = function () {
            window.scrollTo(0, 0);
        };
    });
    closeBtn.addEventListener('click',()=>{
        enterForm.style.display='none';
        window.onscroll = null;
    });
    registrateBtn.addEventListener('click',(e)=>{
        enterForm.style.display='none';
        e.preventDefault();
        registrateForm.style.display='block'
    });
    registrationClose.addEventListener('click',(e)=>{
        e.preventDefault();
        registrateForm.style.display='none';
        window.onscroll=null;
    });
    successClose.addEventListener('click',(e)=>{
        e.preventDefault();
        successForm.style.display='none'
    });
    registrature.addEventListener('click',()=>{
        registrateForm.style.display='none';
        successForm.style.display='block'
    });
    forgetBtn.addEventListener('click',()=>{
        enterForm.style.display='none';
        forgetTab.style.display='block'
    });
    returnBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        forgetTab.style.display='none';
        enterForm.style.display='block'
    });
    readyBtn.addEventListener('click',()=>{
        forgetTab.style.display='none';
        passwordSuccess.style.display='block'
    });
    passwordSuccessBtn.addEventListener('click',()=>{
        passwordSuccess.style.display='none'
    });

}});