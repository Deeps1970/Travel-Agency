function showSidebar() {
  document.querySelector('.sidebar').classList.add('active');
}

function hideSidebar() {
  document.querySelector('.sidebar').classList.remove('active');
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector('.sidebar').classList.remove('active');
});

window.addEventListener('resize', function () {
  if (window.innerWidth > 992) {
    document.querySelector('.sidebar').classList.remove('active');
  }
});
