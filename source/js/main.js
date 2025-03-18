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
