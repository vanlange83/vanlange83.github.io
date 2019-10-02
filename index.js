console.log('index.js loaded...')

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}



function ready() {

    const showNavMenu = (event) => {
        console.log(event.target);
        let closeNav = document.querySelector('.close-side-nav');
        let navMenu = document.querySelector('.side-nav');
        navMenu.style.left = 0;
        closeNav.style.left = "295px";
        setTimeout(() => {
            let closeNav = document.querySelector('.close-side-nav');
            closeNav.style.display = "block";
        }, 380);
        
        let body = document.querySelector('body');
        
        
        closeNav.addEventListener('click', (event) => {
            navMenu.style.left = "-350px";
            closeNav.style.left = "-345px";
        })
    }

    const hideLowerMenu = () => {
        let menuDarker = document.querySelector('#menu-darker');
        let lowerMenu = document.querySelector('.lower-menu');
        let discountbanner = document.querySelector('.discount-banner');

        discountbanner.addEventListener('mouseover', () => {
            if (event.type == "mouseover") {
                lowerMenu.style.display = "none";
                menuDarker.style.background = "white";
            }
        })

        menuDarker.addEventListener('mouseover', () => {
            if (event.type == "mouseover") {
                lowerMenu.style.display = "none";
                menuDarker.style.background = "white";
            }
        })
        
    }

    const showLowerMenu = () => {
        if (window.innerWidth >= 1200){
            let lowerMenu = document.querySelector('.lower-menu');
            lowerMenu.style.display = "block";
            lowerMenu.addEventListener('mouseover', hideLowerMenu);
            
            let menuDarker = document.querySelector('#menu-darker');
            if(lowerMenu.style.display = "block") {
                menuDarker.style.background = "black";
            }
        }
    }

    let menuButton = document.querySelector('.menu-icon');
        menuButton.addEventListener('click', showNavMenu);


    let wideScreenMenu = document.querySelectorAll('.widescreen-menu-hover');
    for (var i = 0; i < wideScreenMenu.length; i++) {
        wideScreenMenu[i].addEventListener('mouseover', showLowerMenu);
    }
    
    

}

