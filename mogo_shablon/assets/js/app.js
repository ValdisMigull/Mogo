// header
const header = document.querySelector(".header");
const introH = document.querySelector(".intro");
// accordion 
const accordionBtn = document.querySelectorAll(".accordion__header");
const accordion__header = document.querySelectorAll(".accordion__item");
// reviews
const reviewsNext = document.querySelector(".reviews__btn--prev");
const reviewsPrev = document.querySelector(".reviews__btn--next");
const reviewsItem = document.querySelectorAll(".reviews__item");





window.addEventListener("scroll", function() {
    let scrollPos = this.window.scrollY;

    if(scrollPos > introH.clientHeight) {
        header.classList.add('sticky');
    }else{
        header.classList.remove('sticky');
    }
});

accordionBtn.forEach(onTabClick);



function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);
        if( !currentTab.classList.contains('active') ) {
            accordionBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            accordion__header.forEach(function(item) {
                item.classList.remove('active');
            });
    
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
        currentBtn.classList.add('active');
        currentTab.classList.add('active');
        
        
    });
}