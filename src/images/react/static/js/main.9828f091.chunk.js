(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[60],[,,,,function(e,r,t){"use strict";t.r(r),t.d(r,"emptyUser",(function(){return n}));var n={}},,function(e,r,t){"use strict";t.r(r),t.d(r,"createUserSchema",(function(){return T})),t.d(r,"updateUserSchema",(function(){return j})),t.d(r,"initialState",(function(){return B})),t.d(r,"userSlice",(function(){return O})),t.d(r,"createUser",(function(){return E})),t.d(r,"deleteUser",(function(){return A})),t.d(r,"updateUser",(function(){return L})),t.d(r,"editUser",(function(){return x})),t.d(r,"getUsersBegin",(function(){return N})),t.d(r,"getUsersSuccess",(function(){return C})),t.d(r,"getUsersFailure",(function(){return M})),t.d(r,"getUserBegin",(function(){return k})),t.d(r,"getUserSuccess",(function(){return q})),t.d(r,"getUserFailure",(function(){return J})),t.d(r,"resetEditForm",(function(){return H})),t.d(r,"cancelEditForm",(function(){return K})),t.d(r,"setFormData",(function(){return z})),t.d(r,"saveUserBegin",(function(){return G})),t.d(r,"saveUserSuccess",(function(){return Q})),t.d(r,"saveUserFailure",(function(){return V})),t.d(r,"deleteUserBegin",(function(){return W})),t.d(r,"deleteUserSuccess",(function(){return X})),t.d(r,"deleteUserFailure",(function(){return Y})),t.d(r,"reset",(function(){return Z}));var n=t(54),i=t(1),u=t(2),c=t(33),s=t(34),o=t(35),a=t(36),d=t(37),f=t(38),l=t(39),p=t(40),g=t(41),m=t(42),v=t(43),U=t(44),R=t(45),y=t(46),D=t(47),F=t(48),S=t(49),w=t(50),I=t(51),P=t(52),b={type:"object",required:["firstName","lastName","screenName","emailAddress"],properties:{firstName:{type:"string",title:"First Name"},lastName:{type:"string",title:"Last Name"},screenName:{type:"string",title:"Screen Name"},emailAddress:{type:"string",title:"Email Address",format:"emailAddressFormat"}}},T=Object(i.a)(Object(i.a)({},b),{},{required:[].concat(Object(n.a)(b.required),["password1","password2"]),properties:Object(i.a)(Object(i.a)({},b.properties),{},{password1:{type:"string",title:"Password"},password2:{type:"string",title:"Confirm Password"}})}),j=Object(i.a)(Object(i.a)({},b),{},{properties:Object(i.a)(Object(i.a)({},b.properties),{},{newPassword1:{type:"string",title:"Change Password"},newPassword2:{type:"string",title:"Confirm Change Password"}})}),B={users:[],loading:!1,saving:!1,deleting:!1,error:"",editForm:{formKey:Date.now(),serverError:null,serverSuccessMessage:null,submitting:!1,createUserSchema:T,updateUserSchema:j,uiSchema:{firstName:{"ui:autofocus":!0},newPassword1:{"ui:widget":"password"},newPassword2:{"ui:widget":"password"}}}},O=Object(u.b)({name:"User",initialState:B,reducers:{createUser:c.createUserReducer,deleteUser:s.deleteUserReducer,updateUser:o.updateUserReducer,editUser:a.editUserReducer,getUsersBegin:d.getUsersBeginReducer,getUsersSuccess:f.getUsersSuccessReducer,getUsersFailure:l.getUsersFailureReducer,getUserBegin:v.getUserBeginReducer,getUserSuccess:U.getUserSuccessReducer,getUserFailure:R.getUserFailureReducer,resetEditForm:p.resetEditFormReducer,cancelEditForm:m.cancelEditFormReducer,setFormData:g.setFormDataReducer,saveUserBegin:y.saveUserBeginReducer,saveUserSuccess:D.saveUserSuccessReducer,saveUserFailure:F.saveUserFailureReducer,deleteUserBegin:S.deleteUserBeginReducer,deleteUserSuccess:w.deleteUserSuccessReducer,deleteUserFailure:I.deleteUserFailureReducer,reset:P.resetReducer}}),h=O.actions,E=h.createUser,A=h.deleteUser,L=h.updateUser,x=h.editUser,N=h.getUsersBegin,C=h.getUsersSuccess,M=h.getUsersFailure,k=h.getUserBegin,q=h.getUserSuccess,J=h.getUserFailure,H=h.resetEditForm,K=h.cancelEditForm,z=h.setFormData,G=h.saveUserBegin,Q=h.saveUserSuccess,V=h.saveUserFailure,W=h.deleteUserBegin,X=h.deleteUserSuccess,Y=h.deleteUserFailure,Z=h.reset;r.default=O.reducer},function(e,r,t){"use strict";t.r(r),t.d(r,"initialState",(function(){return a})),t.d(r,"profileSlice",(function(){return d})),t.d(r,"createProfile",(function(){return l})),t.d(r,"deleteProfile",(function(){return p})),t.d(r,"updateProfile",(function(){return g})),t.d(r,"setActiveProfile",(function(){return m})),t.d(r,"reset",(function(){return v}));var n=t(2),i=t(22),u=t(24),c=t(25),s=t(26),o=t(27),a={profileList:[{profileId:1,name:"Ben",profileType:"admin",showToDoList:!0},{profileId:2,name:"Sue",profileType:"user",showToDoList:!1}],maxProfileId:2,profileTypes:["guest","user","admin"]},d=Object(n.b)({name:"profile",initialState:a,reducers:{createProfile:i.createProfileReducer,deleteProfile:u.deleteProfileReducer,updateProfile:c.updateProfileReducer,setActiveProfile:s.setActiveProfileReducer,reset:o.resetReducer}}),f=d.actions,l=f.createProfile,p=f.deleteProfile,g=f.updateProfile,m=f.setActiveProfile,v=f.reset;r.default=d.reducer},function(e,r,t){"use strict";t.r(r),t.d(r,"initialState",(function(){return a})),t.d(r,"toDoSlice",(function(){return d})),t.d(r,"createToDo",(function(){return l})),t.d(r,"deleteToDo",(function(){return p})),t.d(r,"updateToDo",(function(){return g})),t.d(r,"setErrorMessage",(function(){return m})),t.d(r,"reset",(function(){return v}));var n=t(2),i=t(28),u=t(29),c=t(30),s=t(31),o=t(32),a={toDoList:[{toDoId:1,profileId:1,description:"eat tacos",isComplete:!0},{toDoId:2,profileId:1,description:"drink milk",isComplete:!1},{toDoId:3,profileId:1,description:"walk and chew gum",isComplete:!1}],maxToDoId:3},d=Object(n.b)({name:"toDo",initialState:a,reducers:{createToDo:i.createToDoReducer,deleteToDo:u.deleteToDoReducer,updateToDo:c.updateToDoReducer,setErrorMessage:o.setErrorMessageReducer,reset:s.resetReducer}}),f=d.actions,l=f.createToDo,p=f.deleteToDo,g=f.updateToDo,m=f.setErrorMessage,v=f.reset;r.default=d.reducer},,,,,,,function(e,r,t){"use strict";t.d(r,"a",(function(){return d}));t(9),t(11);var n=t(2),i=t(3),u=t(19),c=t(7),s=t(8),o=t(6),a=Object(i.c)({reduxDemo:u.default,profile:c.default,toDo:s.default,user:o.default}),d=Object(n.a)({reducer:a})},,function(e,r,t){"use strict";t.r(r),t.d(r,"emptyProfile",(function(){return n}));var n={profileType:"guest",showToDoList:!1}},function(e,r,t){"use strict";t.r(r),t.d(r,"emptyToDo",(function(){return n}));var n={isComplete:!1}},function(e,r,t){"use strict";t.r(r),t.d(r,"counterSlice",(function(){return i})),t.d(r,"increment",(function(){return c})),t.d(r,"decrement",(function(){return s})),t.d(r,"incrementByAmount",(function(){return o})),t.d(r,"incrementAsync",(function(){return a})),t.d(r,"selectCount",(function(){return d}));var n=t(2),i=Object(n.b)({name:"reduxDemo",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,r){e.value+=r.payload}}}),u=i.actions,c=u.increment,s=u.decrement,o=u.incrementByAmount,a=function(e){return function(r){setTimeout((function(){r(o(e))}),1e3)}},d=function(e){return e.reduxDemo.value};r.default=i.reducer},,,function(e,r,t){"use strict";t.r(r),t.d(r,"createProfileReducer",(function(){return u}));var n=t(1),i=t(17),u=function(e){var r=++e.maxProfileId;e.profileList.push(Object(n.a)(Object(n.a)({},i.emptyProfile),{},{profileId:r})),e.activeProfileId=r}},,function(e,r,t){"use strict";t.r(r),t.d(r,"deleteProfileReducer",(function(){return n}));var n=function(e,r){var t=e.profileList.findIndex((function(e){return e.profileId===r.payload}));e.profileList.splice(t,1),e.activeProfileId===r.payload&&(e.activeProfileId=void 0)}},function(e,r,t){"use strict";t.r(r),t.d(r,"updateProfileReducer",(function(){return n}));var n=function(e,r){var t=e.profileList.find((function(e){return e.profileId===r.payload.profileId}));t&&Object.assign(t,r.payload)}},function(e,r,t){"use strict";t.r(r),t.d(r,"setActiveProfileReducer",(function(){return n}));var n=function(e,r){e.activeProfileId=r.payload}},function(e,r,t){"use strict";t.r(r),t.d(r,"resetReducer",(function(){return i}));var n=t(7),i=function(e,r){return n.initialState}},function(e,r,t){"use strict";t.r(r),t.d(r,"createToDoReducer",(function(){return u}));var n=t(1),i=t(18),u=function(e,r){var t=++e.maxToDoId;e.toDoList.push(Object(n.a)(Object(n.a)({},i.emptyToDo),{},{profileId:r.payload,toDoId:t}))}},function(e,r,t){"use strict";t.r(r),t.d(r,"deleteToDoReducer",(function(){return n}));var n=function(e,r){var t=e.toDoList.findIndex((function(e){return e.toDoId===r.payload}));e.toDoList.splice(t,1)}},function(e,r,t){"use strict";t.r(r),t.d(r,"updateToDoReducer",(function(){return n}));var n=function(e,r){var t=e.toDoList.find((function(e){return e.toDoId===r.payload.toDoId}));t&&Object.assign(t,r.payload)}},function(e,r,t){"use strict";t.r(r),t.d(r,"resetReducer",(function(){return i}));var n=t(8),i=function(e,r){return n.initialState}},function(e,r,t){"use strict";t.r(r),t.d(r,"setErrorMessageReducer",(function(){return n}));var n=function(e,r){e.errorMessage=r.payload}},function(e,r,t){"use strict";t.r(r),t.d(r,"createUserReducer",(function(){return i}));var n=t(4),i=function(e){e.editForm.data=n.emptyUser}},function(e,r,t){"use strict";t.r(r),t.d(r,"deleteUserReducer",(function(){return n}));var n=function(e,r){var t=e.users.findIndex((function(e){return e.userId===r.payload.userId}));e.users.splice(t,1)}},function(e,r,t){"use strict";t.r(r),t.d(r,"updateUserReducer",(function(){return n}));var n=function(e,r){var t=e.users.find((function(e){return e.userId===r.payload.userId}));t&&Object.assign(t,r.payload)}},function(e,r,t){"use strict";t.r(r),t.d(r,"editUserReducer",(function(){return n}));var n=function(e,r){e.editForm.data=r.payload}},function(e,r,t){"use strict";t.r(r),t.d(r,"getUsersBeginReducer",(function(){return n}));var n=function(e){e.loading=!0}},function(e,r,t){"use strict";t.r(r),t.d(r,"getUsersSuccessReducer",(function(){return n}));var n=function(e,r){console.log("here!!"),e.users=r.payload,e.loading=!1}},function(e,r,t){"use strict";t.r(r),t.d(r,"getUsersFailureReducer",(function(){return n}));var n=function(e,r){e.error=r.payload,e.loading=!1}},function(e,r,t){"use strict";t.r(r),t.d(r,"resetEditFormReducer",(function(){return i}));var n=t(4),i=function(e){var r,t;e.editForm.data=(null===(r=e.editForm.data)||void 0===r?void 0:r.userId)&&null!==(t=null===e||void 0===e?void 0:e.users.find((function(r){var t;return r.userId===(null===(t=e.editForm.data)||void 0===t?void 0:t.userId)})))&&void 0!==t?t:n.emptyUser}},function(e,r,t){"use strict";t.r(r),t.d(r,"setFormDataReducer",(function(){return n}));var n=function(e,r){console.log("update user reducer")}},function(e,r,t){"use strict";t.r(r),t.d(r,"cancelEditFormReducer",(function(){return n}));var n=function(e){e.editForm.data=void 0}},function(e,r,t){"use strict";t.r(r),t.d(r,"getUserBeginReducer",(function(){return n}));var n=function(e){e.loading=!0}},function(e,r,t){"use strict";t.r(r),t.d(r,"getUserSuccessReducer",(function(){return n}));var n=function(e,r){e.editForm.data=r.payload,e.loading=!1}},function(e,r,t){"use strict";t.r(r),t.d(r,"getUserFailureReducer",(function(){return n}));var n=function(e,r){e.error=r.payload,e.loading=!1}},function(e,r,t){"use strict";t.r(r),t.d(r,"saveUserBeginReducer",(function(){return n}));var n=function(e){e.saving=!0}},function(e,r,t){"use strict";t.r(r),t.d(r,"saveUserSuccessReducer",(function(){return n}));var n=function(e){console.log("success save"),e.editForm.data=void 0,e.loading=!1}},function(e,r,t){"use strict";t.r(r),t.d(r,"saveUserFailureReducer",(function(){return n}));var n=function(e,r){e.error=r.payload,e.saving=!1}},function(e,r,t){"use strict";t.r(r),t.d(r,"deleteUserBeginReducer",(function(){return n}));var n=function(e){e.deleting=!0}},function(e,r,t){"use strict";t.r(r),t.d(r,"deleteUserSuccessReducer",(function(){return n}));var n=function(e){e.deleting=!1}},function(e,r,t){"use strict";t.r(r),t.d(r,"deleteUserFailureReducer",(function(){return n}));var n=function(e,r){e.error=r.payload,e.deleting=!1}},function(e,r,t){"use strict";t.r(r),t.d(r,"resetReducer",(function(){return i}));var n=t(6),i=function(e,r){return n.initialState}},,,,,,,,function(e,r,t){e.exports=t(61)},function(e,r,t){"use strict";t.r(r);var n=t(9),i=t.n(n),u=t(11),c=t(0),s=t.n(c),o=t(10),a=t.n(o),d=(t(65),t(15)),f=t(16);window.initThemeReact=Object(u.a)(i.a.mark((function e(){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(63).then(t.bind(null,69));case 2:r=e.sent.default,document.querySelectorAll("[data-react-app]").forEach((function(e){if(!e.innerHTML){var t=e.getAttribute("data-react-app"),n=e.getAttribute("data-react-config"),i=n?JSON.parse(n):{};t&&a.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(f.a,{store:d.a},s.a.createElement(r,{reactApp:t,reactConfig:i}))),e)}}));case 4:case"end":return e.stop()}}),e)}))),window.reactAutoInit&&(window.initThemeReact(),window.reactAutoInit=!1)},,,,function(e,r,t){}],[[60,61,62]]]);
//# sourceMappingURL=main.9828f091.chunk.js.map