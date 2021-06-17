// HANDLE FILTER BOXES EVENTS
// DOM ELEMENTS
const searchBox = document.querySelectorAll('.search-box');
const filtersBtns = document.querySelectorAll('.search-nav-btn');
// OPEN / CLOSE FILTER BOXES
// add / remouve attributes
for (let i = 0; i < searchBox.length; i++) {
  searchBox[i].addEventListener('click', (event) => {
    event.preventDefault();
    searchBox[i].classList.toggle('open');
    searchBox[i].firstElementChild.style.width = '40rem'
    const searchItem = searchBox[i].firstElementChild.firstElementChild.firstElementChild;
    searchItem.style.display = 'block';
    searchItem.setAttribute(
      'placeholder',
      'Rechercher des ' + searchBox[i].firstElementChild.textContent.trim()
    );

    // searchBox[i].firstElementChild.textContent = ' ';

    // for (let j = 0; j < filtersBtns.length; j++) {
    //   filtersBtns[j].textContent = ''
    // }

    // btns styles on events
    // for (let j = 0; j < filtersBtns.length; j++) {
    //   filtersBtns[j].style.borderRadius = '0.25rem 0.25rem 0 0';
    // }
    // or
    //     filtersBtns.forEach(
    //       (btn) => (btn.style.borderRadius = '0.25rem 0.25rem 0 0')
    //     );
  });

  // close filter boxes without target
  window.addEventListener('click', function (e) {
    if (!searchBox[i].contains(e.target)) searchBox[i].classList.remove('open');
  });
}
