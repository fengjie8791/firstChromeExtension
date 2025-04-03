let isGrayOn = false;
const toggleSwitch = document.getElementById('toggleSwitch');
const fontIncrease = document.getElementById('font-increase');

toggleSwitch.addEventListener('change', () => {
  const isChecked = toggleSwitch.checked;
  chrome.storage.sync.set({ isGrayOn: isChecked });
  // console.log(isChecked);
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      type: 'toggleGrayscale',
      isGrayOn: isChecked,
    });
  });
});
fontIncrease.addEventListener('change', () => {
  const isChecked = fontIncrease.checked;
  chrome.storage.sync.set({ isFontOn: isChecked });
  // console.log(isChecked);
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      type: 'toggleFontIncrease',
      isFontOn: isChecked,
    });
  });
});
