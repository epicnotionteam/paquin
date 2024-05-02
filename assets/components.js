document.addEventListener('DOMContentLoaded', function () {
    var elem = document.querySelector('.grid--product');
    var msnry = new Masonry(elem, {
        itemSelector: '.grid__item',  // Ensure these are your grid items
        columnWidth: elem.offsetWidth / 2 - 10,  // Adjust '- 10' based on your actual gutter size
        gutter: 10
    });
});