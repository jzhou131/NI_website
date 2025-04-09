// document.addEventListener("DOMContentLoaded", function() {
//     fetch('./html/nav.html')
//       .then(response => response.text())
//       .then(data => {
//         document.querySelector("#nav-placeholder").innerHTML = data;
//         initializeHamburger(); // Re-initialize any JavaScript related to the navbar after loading it
//       });
//   });
  
//   function initializeHamburger() {
//     const menuToggle = document.querySelector(".menu-toggle");
//     const navLinks = document.querySelector(".nav-links ul");
  
//     menuToggle.addEventListener("click", function () {
//       navLinks.classList.toggle("active");
//     });
//   }

function initializeHamburger() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links ul");
  
    if (menuToggle && navLinks) {
      menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
      });
    }
  }

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

// Function to navigate to a specific slide
function goToSlide(index) {
    carouselItems[currentIndex].classList.remove('active');
    currentIndex = (index + carouselItems.length) % carouselItems.length; // Loop index
    carouselItems[currentIndex].classList.add('active');
}

// Event Listeners for Arrows
leftArrow.addEventListener('click', () => {
    goToSlide(currentIndex - 1); // Navigate to the previous slide
});

rightArrow.addEventListener('click', () => {
    goToSlide(currentIndex + 1); // Navigate to the next slide
});

// Automatic Carousel Rotation
setInterval(() => {
    goToSlide(currentIndex + 1);
}, 10000); // 10 seconds

function showPublications(index) {
    // Hide all publication lists
    document.querySelectorAll('.publications').forEach((pub, i) => {
        pub.classList.remove('active');
        if (i === index) pub.classList.add('active');
    });

    // Update active tab styling
    document.querySelectorAll('.tab').forEach((tab, i) => {
        tab.classList.remove('active');
        if (i === index) tab.classList.add('active');
    });
}

function showPublications(index) {
    const publications = document.querySelectorAll(".publications");
    publications.forEach((pub, i) => {
        pub.classList.toggle("active", i === index);
    });

    // Update active tab if visible
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach((tab, i) => {
        tab.classList.toggle("active", i === index);
    });

    // Update dropdown selection if on mobile
    const dropdown = document.getElementById("publicationDropdown");
    if (dropdown) dropdown.selectedIndex = index;
}

// Event listener for dropdown selection
function handleDropdownChange() {
    const selectedIndex = document.getElementById("publicationDropdown").selectedIndex;
    showPublications(selectedIndex);
}

function toggleDropdown() {
    const menu = document.querySelector('.dropdown-menu');
    menu.classList.toggle('active');
}

document.querySelector('.logo a').href = './index.html';
