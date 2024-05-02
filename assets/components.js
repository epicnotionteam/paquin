document.addEventListener('DOMContentLoaded', function () {
    var elem = document.querySelector('.grid--product');
    var msnry = new Masonry(elem, {
        itemSelector: '.grid__item',
        columnWidth: '.grid__sizer',
        gutter: 10
    });
});