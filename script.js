let searchBtn = document.querySelector("#search-btn");
let searchBar= document.querySelector(".search-bar-container");
let menu =document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let videoBtn = document.querySelectorAll(".vid-btn");
let videoplayer =document.querySelector('#videoplayer');
let myVideo = document.querySelector('#videoslider');

// stopVideo=()=>{
//     videoplayer.style.display ="none";
// };
// playVideo =(file)=>{
//     videoslider.scr =file;
// videoplayer.style.display ="block";
// }

videoBtn.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        document.querySelector('.controls .active').classList.remove("active");
        btn.classList.add('active');
        let src=btn.getAttribute("data-src");
        document.querySelector("#videoslider").src =src;
    }); 
});

    searchBtn.addEventListener("click", () =>{
    searchBtn.classList.toggle("fa-times");
    searchBar.classList.toggle("active"); 
});


menu.addEventListener("click", () =>{
   menu.classList.toggle("fa-times");
    navbar.classList.toggle("active"); 
});
 
var swiper = new Swiper(".review-slider", {
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableonInteraction:false,
    },
    breakpoints:{
        640:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:1,
        },
        1024:{
            slidesPerView:1,
        },

    },
   
 
});



// var swiper = new Swiper(".review-slider", {
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
// });

// window.onscroll= ()=>{
//     searchBtn.classList.remove("fa-times");
//     searchBar.classList.remove("active");   
//     menu.classList.remove("fa-bars");
//     navbar.classList.remove("active"); 
// }

