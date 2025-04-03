let isGrayscale = false;

function toggleGrayscale() {
  isGrayscale = !isGrayscale;
  document.documentElement.style.filter = isGrayscale
    ? 'grayscale(100%)'
    : 'none';
}

// Listen for messages from popup.js
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === 'toggleGrayscale') {
    toggleGrayscale();
  }
});
console.log('Checking if content.js is running');
