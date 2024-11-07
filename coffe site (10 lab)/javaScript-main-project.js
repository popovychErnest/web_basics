
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 100);
    //added cool card switching!
    const ImageList = document.querySelectorAll('section div .image-expectation img');
    let isExtended = false;
    document.querySelector('.image-expectation').addEventListener('click', (event) => {
      event.preventDefault();
      setTimeout(()=> {
          ImageList[0].style.transform = 'translateX(45%) scale(0.7)';
          ImageList[1].style.transform = 'translateX(-45%) scale(0.7)';
      },100);
      if (!isExtended) {
        ImageList[1].style.zIndex = '100';
        setTimeout(() => {
            ImageList[0].style.transform = 'translateX(0%) scale(1)';
            ImageList[1].style.transform = 'translateX(0%) scale(0.6)';
            ImageList[0].style.zIndex = '1000';
        }, 500);
        isExtended = true;
    } else {
        ImageList[0].style.zIndex = '100';
        setTimeout(() => {
            ImageList[1].style.zIndex = '1000';
            ImageList[0].style.transform = 'translateX(0%) scale(0.6)';
            // ImageList[0].style.transform = 'translateX(0%)';
            ImageList[1].style.transform = 'translateX(0%) scale(1)';
        }, 500);
        isExtended = false;
    }
});
});
// to see de facto width of viewport
const ExtraPixels = 17;
const infoWindow = document.createElement('div');
document.body.appendChild(infoWindow);
infoWindow.className = 'info-window';
infoWindow.textContent = 'width';
  window.addEventListener('resize', () => {
    const windowWidth = document.body.clientWidth;
    infoWindow.textContent = `${windowWidth + ExtraPixels}px`;
  });

  