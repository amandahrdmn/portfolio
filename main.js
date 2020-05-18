if (!screenSizeSmall()) {
    activateNavBar();
}

touch_screen = "ontouchstart" in document.documentElement;

if(touch_screen) {
    document.querySelector('.nav_closer').addEventListener('touchstart', () => {
        deactivateNavBar();
    });

    document.querySelector('.nav_bar').addEventListener('touchstart', () => {
        activateNavBar();
    });

    document.querySelector("#home_link").addEventListener('touchstart', () => {
        if(document.querySelector("#home_link").classList.contains('active')) {
            hideSections();

            document.querySelector('.home').classList.add('active');
            document.querySelector('.home').classList.remove('hidden');
        }

        if(screenSizeSmall()) {
            deactivateNavBar();
        }
    });

    document.querySelector("#about_link").addEventListener('touchstart', () => {
        if(document.querySelector("#about_link").classList.contains('active')) {
            hideSections();

            document.querySelector('.about_me').classList.add('active');
            document.querySelector('.about_me').classList.remove('hidden');
        }

        if(screenSizeSmall()) {
            deactivateNavBar();
        }
    });

    document.querySelector("#portfolio_link").addEventListener('touchstart', () => {
        if(document.querySelector("#portfolio_link").classList.contains('active')) {
            hideSections();

            document.querySelector('.portfolio').classList.add('active');
            document.querySelector('.portfolio').classList.remove('hidden');
        }

        if(screenSizeSmall()) {
            deactivateNavBar();
        }
    });

    document.querySelector("#contact_me_link").addEventListener('touchstart', () => {
        if(document.querySelector("#contact_me_link").classList.contains('active')) {
            hideSections();

            document.querySelector('.contact_me').classList.add('active');
            document.querySelector('.contact_me').classList.remove('hidden');
        }

        if(screenSizeSmall()) {
            deactivateNavBar();
        }
    });
} else {
    document.querySelector('.nav_closer').addEventListener('click', () => {
        deactivateNavBar();
    });

    document.querySelector('.nav_bar').addEventListener('click', () => {
        activateNavBar();
    });

    document.querySelector("#home_link").addEventListener('click', () => {
        if(document.querySelector("#home_link").classList.contains('active')) {
            hideSections();

            document.querySelector('.home').classList.add('active');
            document.querySelector('.home').classList.remove('hidden');
        }

        if(screenSizeSmall()) {
            deactivateNavBar();
        }
    });

    document.querySelector("#about_link").addEventListener('click', () => {
        if(document.querySelector("#about_link").classList.contains('active')) {
            hideSections();

            document.querySelector('.about_me').classList.add('active');
            document.querySelector('.about_me').classList.remove('hidden');
        }

        if(screenSizeSmall()) {
            deactivateNavBar();
        }
    });


    document.querySelector("#portfolio_link").addEventListener('click', () => {
        if(document.querySelector("#portfolio_link").classList.contains('active')) {
            hideSections();

            document.querySelector('.portfolio').classList.add('active');
            document.querySelector('.portfolio').classList.remove('hidden');
        }

        if(screenSizeSmall()) {
            deactivateNavBar();
        }
    });

    document.querySelector("#contact_me_link").addEventListener('click', () => {
        if(document.querySelector("#contact_me_link").classList.contains('active')) {
            hideSections();

            document.querySelector('.contact_me').classList.add('active');
            document.querySelector('.contact_me').classList.remove('hidden');
        }

        if(screenSizeSmall()) {
            deactivateNavBar();
        }
    });
}
