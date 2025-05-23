function toggleInfo(contentId, button) {
    var info = document.getElementById(contentId);
    if (info.style.display === "none" || info.style.display === " ") {

        info.style.display = "block";
        button.textContent = "Hide";
    } else {
        info.style.display = "none";
        button.textContent = "learn more";
    }
}

document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('toggleBtn');
  const info10 = document.getElementById('info10');

  // Initially hide the content with ID 'info10'
  info10.style.display = 'none';

  toggleBtn.addEventListener('click', function() {
    if (info10.style.display === 'none') {
      // If hidden, show it
      info10.style.display = 'block'; /* Or 'flex', 'grid', depending on your layout */
      toggleBtn.textContent = 'Browse Less'; // Optionally change button text
    } else {
      // If visible, hide it
      info10.style.display = 'none';
      toggleBtn.textContent = 'Browse All'; // Change button text back
    }
  });
});

// The toggleInfo function is no longer needed for the "Browse All" button
// function toggleInfo(infoId) {
//   const infoDiv = document.getElementById(infoId);
//   if (infoDiv) {
//     infoDiv.style.display = (infoDiv.style.display === 'none' || infoDiv.style.display === '') ? 'block' : 'none';
//     const button = document.querySelector(`#toggleBtn[onclick="toggleInfo('${infoId}')"]`);
//     if (button) {
//       button.textContent = (infoDiv.style.display === 'none') ? 'Read more' : 'Read less';
//     }
//   }
// }
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('show');
  }