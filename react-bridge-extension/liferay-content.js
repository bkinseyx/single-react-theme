window.addEventListener('message', function (event) {
  // We only accept messages from ourselves
  if (event.source !== window || !event.data.type) return;

  if (event.data.type === 'SET_LIFERAY_FIELDS') {
    chrome.runtime.sendMessage({
      type: 'SET_LIFERAY_FIELDS',
      message: event.data.message,
    });
  }

  if (event.data.type === 'EXECUTE_LIFERAY_SERVICE') {
    chrome.runtime.sendMessage({
      type: 'EXECUTE_LIFERAY_SERVICE',
      api: event.data.api,
      data: event.data.data,
      expectedResultType: event.data.expectedResultType,
    });
  }

  if (event.data.type === 'RETURN_LIFERAY_SERVICE_RESULT') {
    console.log('first listen for RETURN_LIFERAY_SERVICE_RESULT', { event });
    chrome.runtime.sendMessage({
      type: 'RETURN_LIFERAY_SERVICE_RESULT',
      result: event.data.result,
    });
  }
});

chrome.runtime.onMessage.addListener((request) => {
  if (request.type === 'STORE_LIFERAY_FIELDS') {
    window.localStorage.setItem(
      'liferayFields',
      JSON.stringify(request.message)
    );
    return Promise.resolve();
  }

  if (request.type === 'EXECUTE_LIFERAY_SERVICE') {
    window.postMessage(
      {
        type: 'LOCAL_LIFERAY_SERVICE',
        api: request.api,
        data: request.data,
        expectedResultType: request.expectedResultType,
      },
      '*'
    );
  }
});
