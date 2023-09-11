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

  // const contentContainer = document.querySelector(".maprendering");
  
  content.map(item => {
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
  
    itemElement.appendChild(imgElement);
    itemElement.appendChild(itemContent);

    itemContent.appendChild(h3Element);
    itemContent.appendChild(pElement);
  
    return itemElement;
  })
