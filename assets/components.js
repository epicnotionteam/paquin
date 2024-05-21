document.addEventListener("DOMContentLoaded", function() {
	// Append section theme to parent div (automatically generated at render)
  	// Facilitates sibling targeting to fix spacing on adjacent same-theme sections
  	var sections = document.querySelectorAll('#site-main section[class*="theme--"]');
  	sections.forEach(function(section) {
    	var parentDiv = section.closest('.shopify-section');
      	var themeClass = Array.from(section.classList).find(cls => cls.startsWith('theme--')).replace('theme--', 'section-theme--');
      	if (themeClass) {
          	parentDiv.classList.add(themeClass);
      	}
  	});
});