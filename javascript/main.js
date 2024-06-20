function loadPage(pageName, targetElement) {
    // Update the header image
    document.getElementById('header-image').src = `../images/${pageName}-header.webp`;
    // Load the page content
    fetch(`${pageName}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        });
        
    var links = document.querySelectorAll('#navbar ul li a');
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
    }
    if (targetElement) {
        targetElement.classList.add('active');
    }
}


// this function determines which website should be on display once the user successfully gets redirected to the daei-fastfood-ali.ir
// in a single page application usually, the javascript file dynamically loads up the html components of the entire application at one go 


window.onload = function() {
    // Preload Google Font
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Lalezar&display=swap';
    document.head.appendChild(link);

    var links = document.querySelectorAll('#navbar ul li a');
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(event) {
            var pageName = this.getAttribute('data-page');
            loadPage(pageName, this);
            event.preventDefault();
        });
    }
    var pizzaLink = document.querySelector('#navbar ul li a[data-page="pizza"]');
    loadPage('pizza', pizzaLink);
}

