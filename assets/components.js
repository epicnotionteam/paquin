document.addEventListener('DOMContentLoaded', function() {
    const gridItems = document.querySelectorAll('.grid__item');
  
    const resizeGridItem = item => {
      const grid = document.getElementsByClassName("grid--product")[0];
      const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
      const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
      const rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
      item.style.gridRowEnd = "span " + rowSpan;
    };
  
    gridItems.forEach(item => {
      resizeGridItem(item);
      item.addEventListener('load', () => {
        resizeGridItem(item);
      });
    });
  
    window.addEventListener('resize', () => {
      gridItems.forEach(item => {
        resizeGridItem(item);
      });
    });
  });
  