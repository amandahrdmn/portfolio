function screenSizeSmall() {
    return (window.screen.width < 700);
}

function hideSections() {
    document.querySelectorAll('section').forEach(element => {
        element.classList.add('hidden');
        element.classList.remove('active');
    });
}

function activateNavBar() {
    document.querySelectorAll('.nav_bar').forEach( element => {
        element.classList.add('active');
        element.classList.remove('inactive');
    });

    document.querySelector('.nav_closer').classList.add('active');
    document.querySelector('.nav_closer').classList.remove('inactive');
    document.querySelector('.nav_container').classList.add('active');
    document.querySelector('.nav_container').classList.remove('inactive');
}

function deactivateNavBar() {
    document.querySelectorAll('.nav_bar').forEach(element => {
        element.classList.remove('active');
        element.classList.add('inactive');
    });

    document.querySelector('.nav_closer').classList.remove('active');
    document.querySelector('.nav_closer').classList.add('inactive');
    document.querySelector('.nav_container').classList.remove('active');
    document.querySelector('.nav_container').classList.add('inactive');
}
