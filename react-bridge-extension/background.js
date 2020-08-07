let reactAppTabId;
let liferayFields;

console.log('background listener');
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab
      ? 'from a content script:' + sender.tab.url + ' id: ' + sender.tab.id
      : 'from the extension'
  );
  if (request.type === 'SET_LIFERAY_FIELDS') {
    console.log('got liferay fields');
    liferayFields = request.message;
  }
  if (request.type === 'REGISTER_REACT_APP') {
    console.log('got react app tab id');
    reactAppTabId = sender.tab.id;
  }
  // if (request.greeting == "hello") sendResponse({ farewell: "goodbye" });
});
