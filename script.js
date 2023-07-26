// JavaScript for animations (example: fade in effect)
// document.addEventListener("DOMContentLoaded", function() {
//     const elements = document.querySelectorAll(".fade-in");
//     for (let i = 0; i < elements.length; i++) {
//         let element = elements[i];
//         element.style.opacity = "0";
//         let delay = i * 0.2; // Delay each element's appearance
//         setTimeout(() => {
//             element.style.opacity = "1";
//             element.style.transition = "opacity 1s ease-in-out";
//         }, 1000 + delay);
//     }
// });

const img=document.querySelector("img")
const paragraph=document.querySelector("p")

setTimeout(() => {
                img.style.opacity = "1";
                img.style.transition = "opacity 1s ease-in-out";
paragraph.style.translate="0%";
paragraph.style.transition="translate 2s ease-in-out"
            }, 500 );
setTimeout(() => {
                
paragraph.style.translate="0%";
paragraph.style.transition="translate 2s ease-int"
            }, 2000 );