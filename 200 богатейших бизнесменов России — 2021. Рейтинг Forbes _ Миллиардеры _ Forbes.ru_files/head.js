window.menuToggle = function(offset) {
    const header = document.querySelector('.header');
    let headerOffsetTop = offset || header.clientTop;
    const toggler = document.querySelector('.js-toggle-menu');
    const menu = document.querySelector('.js-header-nav');
    const menuHeight = menu.clientHeight;
    let scrollPrev = 0;
    let option = '';

    let showMenu = () => {
        document.documentElement.classList.add('menu-opened');
        toggler.classList.remove('active');
        menu.style.display = 'block';
    };

    let hideMenu = () => {
        document.documentElement.classList.remove('menu-opened');
        menu.style.display = 'none';
        toggler.classList.add('active');
    };

    let onscroll = () => {
        if (window.innerWidth > 767) {
            const scrolled = document.documentElement.scrollTop;
            //console.log(scrolled);

            if (scrolled > 0) {
                if (scrolled - menuHeight > scrollPrev) {
                    if (option !== 'DOWN') {
                        hideMenu();
                        option = 'DOWN';
                    }
                    //console.log('%c%s', 'color: green;', 'DOWN');
                } else if (scrolled + menuHeight < scrollPrev) {
                    if (option !== 'UP') {
                        showMenu();
                        option = 'UP';
                    }
                    //console.log('%c%s', 'color: red;', 'UP');
                } else {
                    return false;
                }

                scrollPrev = scrolled;
            }
        }
    };

    window.onscroll = function() {
        onscroll();
    };
    window.onresize = function() {
        onscroll();
    };

    // event click
    toggler.onclick = function() {
        document.documentElement.classList.toggle('menu-opened');
        menu.style.display = 'block';
    }
};


// Клик по поиску
function searchToggle() {
    const toggler = document.querySelector('.js-toggle-search');

    // event click
    toggler.onclick = function() {
        document.querySelector('body').classList.toggle('search-opened');
    }
}

// Клик по бургеру
function toggleNavigation() {
    const toggler = document.querySelector('.js-toggle-navigation');

    // event click
    toggler.onclick = function() {
        this.classList.toggle('active');
        document.querySelector('body').classList.toggle('modal-opened');
    }
}

window.onload = function() {
    window.menuToggle();
    searchToggle();
    toggleNavigation();
};
