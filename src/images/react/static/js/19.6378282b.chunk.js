(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[19,22,25],{134:function(e,r,t){"use strict";t.r(r),t.d(r,"saveUserApi",(function(){return p}));var n=t(9),a=t.n(n),s=t(1),c=t(11),u=t(15),i=t(73),o=t(6),d=t(75),p=function(){var e=Object(c.a)(a.a.mark((function e(r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=3;break;case 3:return e.prev=3,u.a.dispatch(Object(o.saveUserBegin)()),e.next=7,Object(i.c)(r.userId?"/user/update-user":"/user/add-user",Object(s.a)(Object(s.a)({},r.userId?i.d:i.a),{},{companyId:window.Liferay.ThemeDisplay.getCompanyId(),groupIds:[Object(i.b)()]},r),"object");case 7:u.a.dispatch(Object(o.saveUserSuccess)()),Object(d.getUsersApi)(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),u.a.dispatch(Object(o.saveUserFailure)(e.t0));case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(r){return e.apply(this,arguments)}}()},171:function(e,r,t){"use strict";t.r(r),t.d(r,"formOnSubmit",(function(){return a}));var n=t(134),a=function(e){var r=e.formData;console.log("submitted successfully"),Object(n.saveUserApi)(r)}},73:function(e,r,t){"use strict";t.d(r,"c",(function(){return n})),t.d(r,"d",(function(){return a})),t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return c}));var n=function(e,r,t){return new Promise((function(n,a){try{window.Liferay.Service(e,r,(function(e){typeof e===t||"array"===t&&Array.isArray(e)?n(e):a("string"===typeof e?e:"Unexpected error.")}))}catch(s){a(s)}}))},a={oldPassword:"",newPassword1:"",newPassword2:"",passwordReset:!1,reminderQueryQuestion:"",reminderQueryAnswer:"",screenName:"not_null",emailAddress:"test@example.com",facebookId:0,openId:"",languageId:0,timeZoneId:0,greeting:"",comments:"",firstName:"",middleName:"",lastName:"",prefixId:0,suffixId:0,birthdayMonth:1,birthdayDay:1,birthdayYear:1970,smsSn:"",facebookSn:"",jabberSn:"",skypeSn:"",twitterSn:"",jobTitle:"",groupIds:null,organizationIds:[],roleIds:[],userGroupRoles:[],userGroupIds:[]},s={autoPassword:!1,password1:"",password2:"",autoScreenName:!1,screenName:"",emailAddress:"",facebookId:0,openId:"",locale:"en_US",firstName:"",middleName:"",lastName:"",prefixId:0,suffixId:0,male:!0,birthdayMonth:1,birthdayDay:1,birthdayYear:1970,jobTitle:"",groupIds:null,organizationIds:null,roleIds:null,userGroupIds:null,sendEmail:!1,serviceContext:{}},c=function(){return window.Liferay.ThemeDisplay.getScopeGroupId()}},75:function(e,r,t){"use strict";t.r(r),t.d(r,"getUsersApi",(function(){return o}));var n=t(9),a=t.n(n),s=t(11),c=t(15),u=t(73),i=t(6),o=function(){var e=Object(s.a)(a.a.mark((function e(){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=3;break;case 3:return e.prev=3,c.a.dispatch(Object(i.getUsersBegin)()),e.next=7,Object(u.c)("/user/get-group-users",{groupId:Object(u.b)()},"array");case 7:r=e.sent,c.a.dispatch(Object(i.getUsersSuccess)(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),c.a.dispatch(Object(i.getUsersFailure)(e.t0));case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=19.6378282b.chunk.js.map