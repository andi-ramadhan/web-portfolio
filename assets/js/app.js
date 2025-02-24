document.addEventListener('DOMContentLoaded', function() {
  const aboutContent = document.querySelector('.about-content');
  setTimeout(() => {
    aboutContent.classList.add('loaded');
  }, 100);
});