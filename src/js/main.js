/**
 * Copyright (c) 2000-present Liferay, Inc. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

/* eslint-disable prefer-arrow-callback */
AUI().ready(
  /*
	This function gets loaded when all the HTML, not including the portlets, is
	loaded.
	*/

  setTimeout(function () {
    var data = {
      type: 'SET_LIFERAY_FIELDS',
      message: {
        authToken: Liferay.authToken,
        groupId: Liferay.ThemeDisplay.getScopeGroupId(),
        companyId: window.Liferay.ThemeDisplay.getCompanyId(),
      },
    };
    window.postMessage(data, '*');
  }, 300)
);

Liferay.Portlet.ready(
  /*
	This function gets loaded after each and every portlet on the page.

	portletId: the current portlet's id
	node: the Alloy Node object of the current portlet
	*/

  function (_portletId, _node) {}
);

Liferay.on(
  'allPortletsReady',

  /*
	This function gets loaded when everything, including the portlets, is on
	the page.
	*/

  function () {
    window.initThemeReact && window.initThemeReact();
  }
);

window.getFieldFromLiferayObject = function (fieldName) {
  return {
    authToken: window.Liferay.authToken,
    groupId: window.Liferay.ThemeDisplay.getScopeGroupId(),
    companyId: window.Liferay.ThemeDisplay.getCompanyId(),
  }[fieldName];
};

window.promisifiedLiferayService = function (api, data, expectedResultType) {
  return new Promise((resolve, reject) => {
    try {
      window.Liferay.Service(api, data, (result) => {
        if (typeof result === expectedResultType) {
          resolve(result);
        } else if (expectedResultType === 'array' && Array.isArray(result)) {
          resolve(result);
        } else if (typeof result === 'string') {
          reject(result);
        } else {
          reject('Unexpected error.');
        }
      });
    } catch (error) {
      reject(error);
    }
  });
};

window.addEventListener('message', function (event) {
  // We only accept messages from ourselves
  if (event.source != window) return;

  if (event.data.type === 'LOCAL_LIFERAY_SERVICE') {
    promisifiedLiferayService(
      event.data.api,
      JSON.parse(event.data.data),
      event.data.expectedResultType
    )
      .then((result) => {
        window.postMessage(
          {
            type: 'RETURN_LIFERAY_SERVICE_RESULT',
            result,
          },
          '*'
        );
      })
      .catch((e) => console.log('error', e));
  }
});
