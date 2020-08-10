let liferayFields;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type === 'SET_LIFERAY_FIELDS') {
    liferayFields = request.message;
    chrome.tabs.query({}, function (tabs) {
      for (var i = 0; i < tabs.length; ++i) {
        chrome.tabs.sendMessage(tabs[i].id, {
          type: 'STORE_LIFERAY_FIELDS',
          message: liferayFields,
        });
      }
    });
  }

  if (request.type === 'EXECUTE_LIFERAY_SERVICE') {
    chrome.tabs.query({}, function (tabs) {
      for (var i = 0; i < tabs.length; ++i) {
        chrome.tabs.sendMessage(tabs[i].id, {
          type: 'EXECUTE_LIFERAY_SERVICE',
          api: request.api,
          data: request.data,
          expectedResultType: request.expectedResultType,
        });
      }
    });
  }

  if (request.type === 'RETURN_LIFERAY_SERVICE_RESULT') {
    chrome.tabs.query({}, function (tabs) {
      for (var i = 0; i < tabs.length; ++i) {
        chrome.tabs.sendMessage(tabs[i].id, {
          type: 'RETURN_LIFERAY_SERVICE_RESULT',
          result: request.result,
        });
      }
    });
  }
});
