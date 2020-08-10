declare global {
  interface Window {
    Liferay: any;
    getFieldFromLiferayObject: (fieldName: string) => string;
    promisifiedLiferayService: (
      api: string,
      data: {},
      expectedResultType: string
    ) => Promise<{}>;
  }
}

// This abstracts out most of the error handling and makes invoking api calls
// inside of redux actions very tight, composable with Promise.all and
// amenable to modern async-await syntax inside of thunk actions
export const promisifiedLiferayService = (
  api: string,
  data: {},
  expectedResultType: any
) =>
  new Promise((resolve, reject) => {
    try {
      window.Liferay.Service(api, data, (result: any) => {
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

const createPromise = () => {
  let _resolve, _reject;

  const promise: any = new Promise(function(resolve, reject) {
    _resolve = resolve;
    _reject = reject;
  });

  promise.resolve = _resolve;
  promise.reject = _reject;

  return promise;
};

let liferayServicePromise: any;

export const executeLiferayService = async (
  api: string,
  data: {},
  expectedResultType: 'string' | 'array' | 'object'
) => {
  if (window.Liferay) {
    return window.promisifiedLiferayService(api, data, expectedResultType);
  }
  window.postMessage(
    {
      type: 'EXECUTE_LIFERAY_SERVICE',
      api,
      data: JSON.stringify(data),
      expectedResultType,
    },
    '*'
  );
  liferayServicePromise = createPromise();
  return await liferayServicePromise;
  // return {
  //   string: '',
  //   array: [],
  //   object: {},
  // }[expectedResultType];
};

export const updateUserDummyData = {
  oldPassword: '',
  newPassword1: '',
  newPassword2: '',
  passwordReset: false,
  reminderQueryQuestion: '',
  reminderQueryAnswer: '',
  screenName: 'not_null',
  emailAddress: 'test@example.com',
  facebookId: 0,
  openId: '', // this is weird: only id field here that takes a string instead of an int
  languageId: 0,
  timeZoneId: 0,
  greeting: '',
  comments: '',
  firstName: '',
  middleName: '',
  lastName: '',
  prefixId: 0,
  suffixId: 0,
  birthdayMonth: 1,
  birthdayDay: 1,
  birthdayYear: 1970,
  smsSn: '',
  facebookSn: '',
  jabberSn: '',
  skypeSn: '',
  twitterSn: '',
  jobTitle: '',
  groupIds: null,
  organizationIds: [],
  roleIds: [],
  userGroupRoles: [],
  userGroupIds: [],
};

export const createUserDummyData = {
  autoPassword: false,
  password1: '', //
  password2: '', //
  autoScreenName: false,
  screenName: '', //
  emailAddress: '', //
  facebookId: 0,
  openId: '',
  locale: 'en_US',
  firstName: '', //
  middleName: '', //
  lastName: '', //
  prefixId: 0,
  suffixId: 0,
  male: true,
  birthdayMonth: 1,
  birthdayDay: 1,
  birthdayYear: 1970,
  jobTitle: '',
  groupIds: null,
  organizationIds: null,
  roleIds: null,
  userGroupIds: null,
  sendEmail: false,
  serviceContext: {},
};

export const getLiferayField = async (fieldName: string): Promise<string> => {
  if (window.Liferay) {
    return window.getFieldFromLiferayObject(fieldName);
  }
  const liferayFields = localStorage.getItem('liferayFields');
  return JSON.parse(liferayFields as string)[fieldName];
};

window.addEventListener('message', function(event) {
  if (event.data.type === 'LOCAL_RETURN_LIFERAY_SERVICE_RESULT') {
    liferayServicePromise.resolve(event.data.result);
  }
});
