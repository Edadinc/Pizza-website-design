const btns = document.querySelectorAll(".tab-btn");
const aboutContainer = document.querySelector(".about-container");
const articles = document.querySelectorAll(".content");

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

aboutContainer.addEventListener("click", function(event){
    const id = event.target.dataset.id;
    if(id){
        //remove active from all buttons and add to the one that got clicked
        btns.forEach(function(btn){
            btn.classList.remove("active");
        });
        event.target.classList.add("active");

        //hide all the articles
        articles.forEach(function(article){
            article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});

menu.onclick = () => {
    navbar.classList.toggle("active");
}
window.onscroll = () => {
    navbar.classList.remove("active");
}
