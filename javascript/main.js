// script.js

function loadPage(pageName, targetElement) {
    // Update the header image
    document.getElementById('header-image').src = `DaeiAli-fastfood/images/${pageName}-header.webp`;

    // Load the page content
    fetch(`DaeiAli-fastfood/html/${pageName}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading page:', error);
            document.getElementById('content').innerHTML = '<p>Failed to load content.</p>';
        });

    // Update active class in navbar links
    var links = document.querySelectorAll('#navbar ul li a');
    links.forEach(link => link.classList.remove('active'));
    if (targetElement) {
        targetElement.classList.add('active');
    }
}

window.onload = function() {
    // Preload Google Font
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Lalezar&display=swap';
    document.head.appendChild(link);

    // Event listeners for navbar links
    var links = document.querySelectorAll('#navbar ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            var pageName = this.getAttribute('data-page');
            loadPage(pageName, this);
            event.preventDefault();
        });
    });

    // Load default page on initial load
    var pizzaLink = document.querySelector('#navbar ul li a[data-page="pizza"]');
    loadPage('pizza', pizzaLink);
};
