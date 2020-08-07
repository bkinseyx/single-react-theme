console.log('init listener');

let reactAppTabId;

window.addEventListener('message', function (event) {
  // We only accept messages from ourselves
  if (event.source !== window || !event.data.type) return;
  console.log(event);

  if (event.data.type === 'SET_LIFERAY_FIELDS') {
    chrome.runtime.sendMessage({
      type: 'SET_LIFERAY_FIELDS',
      message: event.data.message,
    });
  }
  if (event.data.type === 'REGISTER_REACT_APP') {
    reactAppTabId = event.data.reactAppTabId;
    console.log('sending register');
    chrome.runtime.sendMessage({
      type: 'REGISTER_REACT_APP',
      message: event.data.message,
    });
  }
});
