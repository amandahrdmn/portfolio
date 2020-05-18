
document.querySelector('.nav_closer').addEventListener('click', () => {
    document.querySelectorAll('.nav_bar').forEach(element => {
        element.classList.remove('active');
        element.classList.add('inactive');
    });

    document.querySelector('.nav_closer').classList.remove('active');
    document.querySelector('.nav_closer').classList.add('inactive');
    document.querySelector('.nav_container').classList.remove('active');
    document.querySelector('.nav_container').classList.add('inactive');
});

document.querySelector('.nav_bar').addEventListener('click', () => {
    document.querySelectorAll('.nav_bar').forEach(element => {
        if(!element.classList.contains('active')) {
            element.classList.add('active');
            element.classList.remove('inactive');
        }
    });

    document.querySelector('.nav_closer').classList.add('active');
    document.querySelector('.nav_closer').classList.remove('inactive');
    document.querySelector('.nav_container').classList.add('active');
    document.querySelector('.nav_container').classList.remove('inactive');
});

document.querySelector("#home_link").addEventListener('click', () => {
    if(document.querySelector("#home_link").classList.contains('active')) {
        document.querySelectorAll('section').forEach(element => {
            element.classList.add('hidden');
            element.classList.remove('active');
        });

        document.querySelector('.home').classList.add('active');
        document.querySelector('.home').classList.remove('hidden');
    }
});

document.querySelector("#about_link").addEventListener('click', () => {
    if(document.querySelector("#about_link").classList.contains('active')) {
        document.querySelectorAll('section').forEach(element => {
            element.classList.add('hidden');
            element.classList.remove('active');
        });

        document.querySelector('.about_me').classList.add('active');
        document.querySelector('.about_me').classList.remove('hidden');
    }
});

document.querySelector("#portfolio_link").addEventListener('click', () => {
    if(document.querySelector("#portfolio_link").classList.contains('active')) {
        document.querySelectorAll('section').forEach(element => {
            element.classList.add('hidden');
            element.classList.remove('active');
        });

        document.querySelector('.portfolio').classList.add('active');
        document.querySelector('.portfolio').classList.remove('hidden');
    }
});

document.querySelector("#contact_link").addEventListener('click', () => {
    if(document.querySelector("#contact_link").classList.contains('active')) {
        document.querySelectorAll('section').forEach(element => {
            element.classList.add('hidden');
            element.classList.remove('active');
        });

        document.querySelector('.contact_me').classList.add('active');
        document.querySelector('.contact_me').classList.remove('hidden');
    }
});


