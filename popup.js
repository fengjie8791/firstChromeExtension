document.getElementById('toggle').addEventListener('click', () => {
  console.log('clicked');
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { type: 'toggleGrayscale' });
  });
});
