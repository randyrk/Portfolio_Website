
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

             /**nav controls */
if(navToggle){
    navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n =>  n.addEventListener('click', linkAction))

         /***skills section arrow control mechanism  ****/

const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header')
      

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i=0;i<skillsContent.length;i++){
        skillsContent[i].className = 'skills_content skills_close'
    }

    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillsHeader.forEach((el) => {
   el.addEventListener('click',toggleSkills)
})

                /*****Services Modal*******/

const modalViews = document.querySelectorAll('.services_modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalCloses = document.querySelectorAll('.services_modal-close')   

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn,i) => {
    modalBtn.addEventListener('click',() => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
       modalClose.addEventListener('click',() => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
       })
})
                /*****Portfolio Swiper*******/

let swiper = new Swiper('.portfolio_container', {
      cssMode: true,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
                      /*****Active link*******/

const sections = document.querySelectorAll('section[id]')    

function scrollActive(){
    const scrollY = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

                                /*****scroll header *******/
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

                              /*****scroll up*******/
function scrollup(){
    const scrollup = document.getElementById('scroll-up');
    if(this.scrollY >= 860) scrollup.classList.add('show-scroll'); else scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)

                             

