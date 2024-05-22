function loadPage(pageName, targetElement) {
    // Update the header image
    document.getElementById('header-image').src = `../images/${pageName}-header.webp`;

    
    // Load the page content
    fetch(`${pageName}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        });

    // Handle click event
    var links = document.querySelectorAll('#navbar ul li a');
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
    }
    if (targetElement) {
        targetElement.classList.add('active');
    }
}


window.onload = function() {
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
