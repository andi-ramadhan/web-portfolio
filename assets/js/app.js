document.addEventListener('DOMContentLoaded', function () {
  // content on load
  const aboutContent = document.querySelector('.about-content');
  setTimeout(() => {
    aboutContent.classList.add('loaded');
  }, 100);

  // mobile nav toggle
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const navList = document.getElementById('nav-list');

  mobileNavToggle.addEventListener('click', () => {
    const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
    mobileNavToggle.setAttribute('aria-expanded', !isExpanded);
    navList.classList.toggle('active');

    // icon change
    const icon = mobileNavToggle.querySelector('i');
    icon.className = isExpanded ? 'fas fa-bars' : 'fas fa-times';
  });

  // close toggle when clicking outside
  document.addEventListener('click', (e) => {
    if (!navList.contains(e.target) && !mobileNavToggle.contains(e.target)) {
      navList.classList.remove('active');
      mobileNavToggle.setAttribute('aria-expanded', 'false');
      mobileNavToggle.querySelector('i').className = 'fas fa-bars';
    }
  });

  // close menu when clicking a nav-link
  navList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navList.classList.remove('active');
      mobileNavToggle.setAttribute('aria-expanded', 'false');
      mobileNavToggle.querySelector('i').className = 'fas fa-bars';
    });
  });
});
