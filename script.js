function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.add('hidden'));
  
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
      selectedPage.classList.remove('hidden');
    }
  }
  
  function showFeature(featureType, targetId) {
    const content = document.getElementById(targetId);
    let html = '';
  
    switch (featureType) {
      case 'lakes':
        html = `<h3>Lakes</h3><ul><li>Lake Victoria</li><li>Lake Albert</li><li>Lake Kyoga</li></ul>`;
        break;
      case 'mountains':
        html = `<h3>Mountains</h3><ul><li>Rwenzori Mountains</li><li>Mount Elgon</li></ul>`;
        break;
      case 'rivers':
        html = `<h3>Rivers</h3><ul><li>River Nile</li><li>River Katonga</li><li>River Kafu</li></ul>`;
        break;
      case 'parks':
        html = `<h3>National Parks</h3><ul><li>Queen Elizabeth National Park</li><li>Kidepo Valley National Park</li><li>Murchison Falls National Park</li></ul>`;
        break;
      default:
        html = '<p>Select a valid feature.</p>';
    }
  
    content.innerHTML = html;
  }
  
  