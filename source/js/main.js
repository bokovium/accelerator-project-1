import './modules/slider.js';

const videoButton = document.querySelector('.about__video-button');

function loadVideo() {

  const videoContainer = document.querySelector('.about__video');
  videoContainer.querySelector('.about__video-image').remove();

  const iframe = document.createElement('iframe');
  const styleSheet = document.styleSheets[0];
  iframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1';
  iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen = true;
  iframe.style.border = 'none';

  if (window.matchMedia('(min-width: 1366px)').matches) {
    iframe.width = '360';
    iframe.height = '230';
  } else if (window.matchMedia('(min-width: 768px)').matches) {
    iframe.width = '270';
    iframe.height = '170';
  } else {
    iframe.width = '320';
    iframe.height = '170';
  }


  videoContainer.appendChild(iframe);

  videoButton.style.display = 'none';

  styleSheet.insertRule('.about__video::before {background-color: transparent;}', styleSheet.cssRules.length);
}

videoButton.addEventListener('click', loadVideo);


const tabHeader = document.querySelectorAll('.price__list-item');
const tabContent = document.querySelectorAll('.price__tryptych');

for (const item of tabHeader) {
  item.addEventListener('click', () => {
    changeTab(item);
  });

  item.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      changeTab(item);
    }
  });
}

function changeTab(item) {

  for (const element of tabContent) {
    element.classList.add('visually-hidden');
  }


  const content = document.querySelector(`#${item.dataset.tab}`);
  if (content) {
    content.classList.remove('visually-hidden');
  }


  for (const tab of tabHeader) {
    tab.classList.remove('price__list-item--active');
  }


  item.classList.add('price__list-item--active');
}
