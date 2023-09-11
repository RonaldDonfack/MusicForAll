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

const content = [
  {
    img: "net-02a3b2aa.svg",
    h3: "Networking",
    p: "Lorem ipsum de ill explicabo saepe minima distinctio est cum sit aliquam sed corrupti, impedit ut laborum? Voluptate, earum?"
  },
  {
    img: "phy-3794e457.svg",
    h3: "Physical",
    p: "Lorem ipsum de ill explicabo saepe minima distinctio est cum sit aliquam sed corrupti, impedit ut laborum? Voluptate, earum?"
  },
  {
    img: "mental-679a1001.svg",
    h3: "Mental Willness",
    p: "Lorem ipsum de ill explicabo saepe minima distinctio est cum sit aliquam sed corrupti, impedit ut laborum? Voluptate, earum?"
  }
];

const contentContainer = document.querySelector(".maprendering");

  let mapping = content.map((item , index) => {
  const condition = index%2

  const itemElement = document.createElement('div');
  itemElement.classList.add("canava")

  const imgElement = document.createElement('img');
  imgElement.setAttribute('src', item.img);
  imgElement.classList.add("canava-img")

  const itemContent = document.createElement('div')
  itemContent.classList.add("canava-content");

  const h3Element = document.createElement('h3');
  h3Element.classList.add("canava-heading")
  h3Element.textContent = item.h3;

  const pElement = document.createElement('p');
  pElement.classList.add("features-text")
  pElement.textContent = item.p;

  if (condition === 1 ){
    itemElement.appendChild(itemContent);
    itemElement.appendChild(imgElement);
  
  }
  else {

    itemElement.appendChild(imgElement);
    itemElement.appendChild(itemContent);
  }

  itemContent.appendChild(h3Element);
  itemContent.appendChild(pElement);

  return itemElement;
}).forEach(itemElement => {
  contentContainer.appendChild(itemElement);
});
// console.log(stringify(mapping))

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
      
      let isOpen = dropdownLanguage.classList.contains("dropdown-language-open")

      console.log (isOpen)
      
      if (isOpen === true){
      // window.onclick = () => dropdownLanguage.classList.remove("dropdown-language-open");
      body.onscroll = () => dropdownLanguage.classList.remove("dropdown-language-open")
      }


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
      ddlanguage.classList.remove("ddtle") 
      dropdownbtn.classList.remove("ddbstatus")
     
    }

    const colorChangeOnScrollHandler = () => {
      if (window.scrollY >= 90) {
        header.classList.add("header-scroll")
      } else {
        header.classList.remove("header-scroll")
      }
  };
  window.addEventListener("scroll", colorChangeOnScrollHandler);

})


