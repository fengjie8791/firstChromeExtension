let isGrayOn = false;
const toggleSwitch = document.getElementById('toggleSwitch');
const fontIncrease = document.getElementById('font-increase');
chrome.storage.sync.get('isGrayOn', (data) => {
  console.log('gray', data.isGrayOn);
  if (data.isGrayOn) {
    toggleSwitch.checked = false;
  } else {
    toggleSwitch.checked = false;
  }
});
chrome.storage.sync.get('isFontOn', (data) => {
  console.log('font', data.isFontOn);
  if (data.isFontOn) {
    toggleSwitch.checked = false;
  } else {
    toggleSwitch.checked = false;
  }
});

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
