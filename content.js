// let isGrayscale = false;
//add
const style = document.createElement('style');
style.innerHTML = `
  .text-zoom { 
    transition: transform 0.5s ease-in-out;
  }
  .text-zoom:hover { 
    transform: scale(1.3);
  }

  `;
document.head.appendChild(style);

// Listen for messages from popup.js
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === 'toggleGrayscale') {
    if (message.isGrayOn) {
      document.documentElement.style.filter = 'grayscale(100%)';
    } else {
      document.documentElement.style.filter = 'none';
    }
  } else if (message.type === 'toggleFontIncrease') {
    console.log('font increase', message.isFontOn);
    if (message.isFontOn) {
      document
        .querySelectorAll(
          'p, span, h1, h2, h3, h4, h5, h6, a, label, img, button'
        )
        .forEach((el) => {
          el.style.cursor = 'zoom-in';
          el.classList.add('text-zoom');
        });
      // document.body.classList.add('big-mouse');
    } else {
      document
        .querySelectorAll(
          'p, span, h1, h2, h3, h4, h5, h6, a, label, img, button'
        )
        .forEach((el) => {
          el.style.cursor = 'zoom-in';
          el.classList.remove('text-zoom');
        });
      // document.body.classList.remove('big-mouse');
    }
  }
});
console.log('Checking if content.js is running');
