document.addEventListener('DOMContentLoaded', function () {
    var elem = document.querySelector('.grid--product');
    var msnry = new Masonry(elem, {
        // options
        itemSelector: 'div', // Change '.item' to your items' class or use 'div' to target all divs inside
        columnWidth: div, // Adjust as needed or use an element for dynamic widths
        gutter: 0
    });
});