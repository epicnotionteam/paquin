document.addEventListener('DOMContentLoaded', function () {
    var elem = document.querySelector('.grid--product');
    var msnry = new Masonry(elem, {
        // options
        itemSelector: '.grid__item',
        columnWidth: '.grid__item',
        gutter: 0
    });
});