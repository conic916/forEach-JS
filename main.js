'use strict';
const button = document.querySelector("button");
let liItems = document.querySelectorAll("li");
let fontSize = 10;


// PETLA
// button.addEventListener("click", () => {
//     console.log('dziala');
//     // fontSize++;
//     for (let i = 0; i < liItems.length; i++) {
//             liItems[i].style.display = "block";
//             liItems[i].style.fontSize = `${fontSize++}px`;
//     }
// });

// forch EACH :
button.addEventListener("click", () => {
    console.log('dziala');
    
    liItems.forEach((ElementLi) => {
        ElementLi.style.display = "block";
        ElementLi.style.fontSize = fontSize + "px";
    })
    fontSize++;
});



