const videoButton = document.querySelector('.about__video-button');

function loadVideo() {

  const videoContainer = document.querySelector('.about__video');
  videoContainer.querySelector('.about__video-image').remove();

  const iframe = document.createElement('iframe');
  const styleSheet = document.styleSheets[0];
  iframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1';
  iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen = true;
  iframe.width = '320px';
  iframe.height = '170px';
  iframe.style.border = 'none';


  videoContainer.appendChild(iframe);

  videoButton.style.display = 'none';

  styleSheet.insertRule('.about__video::before {background-color: transparent;}', styleSheet.cssRules.length);
}

videoButton.addEventListener('click', loadVideo);
