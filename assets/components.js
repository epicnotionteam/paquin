var grid = document.querySelector('.grid--product');
var msnry = new Masonry(grid, {
    itemSelector: 'div', 
    columnWidth: 'div',
    percentPosition: true,
    gutter: 0
});