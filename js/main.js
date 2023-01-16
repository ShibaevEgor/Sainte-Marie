
// By @AbubakerSaeed96 (Twitter)
// ===================

// Inspiration:
// Oleg Frolov's dribbble shot: https://dribbble.com/shots/5331825-Loading-XXI

// I thought making this would be easy ...but boy 😩

// Thank You For Viewing!
// Say 👋🏻 or hire me 👉🏻 abubaker.saeed.1996@gmail.com
// ================================================================

// Helper(s)
// =========
let $ = (e) => document.querySelector(e);

// Dots
// ====
let dots = $(".dots");

// Function
// ========
function animate(element, className) {
    element.classList.add(className);
    setTimeout(() => {
        element.classList.remove(className);
        setTimeout(() => {
            animate(element, className);
        }, 500);
    }, 2500);
}

// Execution
// =========
animate(dots, "dots--animate");

// Professional Abubaker ;P
// =====================
const twitter = $(".abs-twitter");
window.addEventListener(
    "mousemove",
    () => twitter.classList.add("abs-twitter--show"), { once: true }
);






let bb = document.querySelector(".bb")
window.addEventListener("DOMContentLoaded", function(e) {
    setTimeout(() => {
        bb.classList.add("ss")
        setTimeout(() => {
            bb.style.display = "none"
        }, 500)
    }, 5000)
})


// const btn = document.querySelector(".burger")
// let box = document.querySelector(".burger__box")

// btn.addEventListener("click", function(e){
//     e.preventDefault()
//     box.classList.toggle('active');
// })

// click = () =>{
//     box.classList.toggle('active')
// }
