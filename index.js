var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    slidesPerGroup : 2,
    loop: true,
    grabCursor : true,
       autoplay:{delay: 4500,
        speed : 5000,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints : {
        0:{
            slidesPerView: 1, 
            slidesPerGroup : 1,
        },
    
        1024:{
            slidesPerView: 2, 
            // autoplay:{delay: 4500},
        },
    
       
    }
  });

  document.addEventListener("DOMContentLoaded",() => {
      const body = document.querySelector("body")
      const header = document.querySelector(".header")
      const language = document.querySelector(".language")
      const languageInToggle = document.querySelector(".language-in-toggle")
      const ddlanguage = document.querySelector(".ddtl")
      const dropdownLanguage = document.querySelector(".dropdown-language")
      const  togglebtn = document.querySelector(".togglebtn")
      const dropdownbtn = document.querySelector('.dropdown-button')

      language.onclick = ()=>{
        dropdownLanguage.classList.toggle("dropdown-language-open")   
      }
      language.onblur = () => {
        dropdownLanguage.classList.add('dropdown-language')
      }
      languageInToggle.onclick = () =>{

        ddlanguage.classList.toggle("ddtle") 
      }
      togglebtn.onclick = ()=>{
        dropdownbtn.classList.toggle("ddbstatus") 
        
      }
      body.onscroll = () => {
        header.classList.add("header-scroll")
      }
      body.onclick = () => {
        header.classList.remove("header-scrool")
      }
  })