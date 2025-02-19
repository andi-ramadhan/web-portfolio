const gallerySection = document.getElementById('gallery');
const infoPanel = document.getElementById('artist-info');
const infoPanelContent = infoPanel.querySelector('.info-content');
const closeButton = document.querySelector('.close-panel');
const menuButton = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

function loadPage(pageName) {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      return xhr.responseText;
    }
  };

  // Fetch the page content
  xhr.open('GET', `pages/${pageName}.html`, false);
  xhr.send();

  return xhr.responseText;
}

// info panel controls
function openInfoPanel() {
  infoPanel.classList.add('active');
}

function closeInfoPanel() {
  infoPanel.classList.remove('active');
}

function navigate(pageName) {
  // remove all active class nav items
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(function(item) {
    item.classList.remove('active');
  });

  // Add 'active' class to clicked nav item
  const currentNav = document.querySelector(`[data-page="${pageName}"]`);
  if (currentNav) {
    currentNav.classList.add('active');
  }

  // Different pages handler
  switch(pageName) {
    case 'home':
      gallerySection.innerHTML = loadPage('MainGallery');
      closeInfoPanel();
      break;
    case 'about':
      infoPanelContent.innerHTML = loadPage('About');
      openInfoPanel();
      break;
    case 'contact':
      infoPanelContent.innerHTML = loadPage('Contact');
      openInfoPanel();
      break;
  }
}

function showInfo(artId) {
  const artInfo = `
    <div class="art-details">
      <img src="assets/images/art${artId}.jpg" alt="Art ${artId}">
      <h2>Art Title ${artId}</h2>
      <p>This is a detailed description of artwork ${artId}.</p>
      <div class="art-meta">
          <p><strong>Year:</strong> 2024</p>
          <p><strong>Medium:</strong> Digital</p>
      </div>
    </div>
  `;

  infoPanelContent.innerHTML = artInfo;
  openInfoPanel();
}

// mobile menu toggle
function toggleMenu() {
  navList.classList.toggle('active');
}

// adding this when page loads so it's could be listen the event listenersaksja hfajsf
document.addEventListener('DOMContentLoaded', function() {
  //initial page load
  navigate('home');

  // nav click events
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const page = this.getAttribute('data-page');
      navigate(page);

      //close movile menu after nav
      if (window.innerWidth <= 768) {
        toggleMenu();
      }
    });
  });

  //close panel button
  closeButton.addEventListener('click', closeInfoPanel);

  //mobile menu button
  menuButton.addEventListener('click', toggleMenu);

  //close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    const isClickInsideNav = e.target.closest('.main-navigation');
    if (!isClickInsideNav && navList.classList.contains('active')) {
      toggleMenu();
    }
  });
});