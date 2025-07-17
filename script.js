function showSidebar() {
    document.querySelector('.sidebar').classList.add('active');
  }

function hideSidebar() {
    document.querySelector('.sidebar').classList.remove('active');
  }

  // Ensure sidebar is hidden on page load
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.sidebar').classList.remove('active');
});

  // Optional: Hide sidebar on window resize (for desktop switch)
window.addEventListener('resize', function () {
    if (window.innerWidth > 992) {
        document.querySelector('.sidebar').classList.remove('active');
   }
});
