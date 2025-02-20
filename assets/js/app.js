document.addEventListener('DOMContentLoaded', function() {
  const aboutTrigger = document.getElementById('about-trigger');
  const aboutPanel = document.getElementById('about-info');
  const closeButton = document.querySelector('.close-panel');

  //toggle panel
  aboutTrigger.addEventListener('click', function(e) {
    e.preventDefault();
    aboutPanel.classList.toggle('active');
  });

  // Close button
  closeButton.addEventListener('click', function() {
    aboutPanel.classList.remove('active');
  });

  //close panel when clicking outside
  document.addEventListener('click', function(e) {
    if (!aboutPanel.contains(e.target) && 
        !aboutTrigger.contains(e.target) &&
        aboutPanel.classList.contains('active')) {
      aboutPanel.classList.remove('active');
    }
  });

  //add escape key support to close panel
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && aboutPanel.classList.contains('active')) {
      aboutPanel.classList.remove('active');
    }
  });
});