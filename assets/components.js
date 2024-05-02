document.addEventListener('DOMContentLoaded', function() {
    var iso = new Isotope('.grid--product', {
        itemSelector: '.grid__item',
        masonry: {
            columnWidth: 250
        }
    });
});
