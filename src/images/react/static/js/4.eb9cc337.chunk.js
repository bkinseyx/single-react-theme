(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[4,12,14,39,40,41,42,43,48,49,50,67],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"getDescriptionOnChange",(function(){return c}));var r=n(9),o=n(15),c=function(e){return function(t){e&&o.a.dispatch(Object(r.updateToDo)({toDoId:e,description:t}))}}},110:function(e,t,n){"use strict";n.r(t),n.d(t,"getDeleteOnClick",(function(){return c}));var r=n(9),o=n(15),c=function(e){return function(){e&&o.a.dispatch(Object(r.deleteToDo)(e))}}},111:function(e,t,n){"use strict";n.r(t),n.d(t,"getIsCompleteOnChange",(function(){return c}));var r=n(9),o=n(15),c=function(e){return function(t){e&&o.a.dispatch(Object(r.updateToDo)({toDoId:e,isComplete:t}))}}},112:function(e,t,n){"use strict";n.r(t),n.d(t,"activeProfileSelector",(function(){return r}));var r=function(e){return e.profile.profileList.find((function(t){return t.profileId===e.profile.activeProfileId}))}},125:function(e,t,n){e.exports={toDoItem:"ToDoItem_toDoItem__1I-c8",buttonWrapper:"ToDoItem_buttonWrapper__1GahE"}},131:function(e,t,n){"use strict";n.r(t),n.d(t,"getCreateOnClick",(function(){return c}));var r=n(15),o=n(9),c=function(e){return function(){e?r.a.dispatch(Object(o.createToDo)(e)):r.a.dispatch(Object(o.setErrorMessage)("Must select a profile first."))}}},132:function(e,t,n){"use strict";n.r(t),n.d(t,"getErrorCloseOnClick",(function(){return c}));var r=n(15),o=n(9),c=function(){return function(){r.a.dispatch(Object(o.setErrorMessage)())}}},133:function(e,t,n){"use strict";n.r(t),n.d(t,"errorMessageSelector",(function(){return r}));var r=function(e){return e.toDo.errorMessage}},145:function(e,t,n){"use strict";n.r(t),n.d(t,"ToDoItem",(function(){return v}));var r=n(0),o=n.n(r),c=n(125),a=n.n(c),i=n(84),u=n(18),l=n(109),s=n(110),f=n(111),d=n(151),p=n.n(d),m=function(e){var t=e.checked,n=e.onChange,r=e.label,c=e.idPrefix,a=e.autoFocus,i="".concat(c,"-input");return o.a.createElement("div",null,o.a.createElement("label",{htmlFor:i},r),o.a.createElement("input",{id:i,type:"checkbox",className:"form-control ".concat(p.a.checkbox),checked:t,onChange:function(e){return n(e.target.checked)},autoFocus:a}))},v=function(e){var t=e.toDo,n=void 0===t?u.emptyToDo:t;return o.a.createElement("li",{className:"list-group-item "+a.a.toDoItem},o.a.createElement(m,{idPrefix:"isComplete-".concat(n.toDoId),label:"Complete?",checked:n.isComplete,onChange:Object(f.getIsCompleteOnChange)(n.toDoId)}),o.a.createElement(i.a,{idPrefix:"description-".concat(n.toDoId),label:"Description",value:n.description,onChange:Object(l.getDescriptionOnChange)(n.toDoId)}),o.a.createElement("div",{className:a.a.buttonWrapper},o.a.createElement("button",{className:"btn btn-danger",onClick:Object(s.getDeleteOnClick)(n.toDoId)},"Delete")))}},151:function(e,t,n){e.exports={checkbox:"CustomCheckbox_checkbox__3dmq1"}},163:function(e,t,n){"use strict";n.r(t),n.d(t,"toDoListSelector",(function(){return r}));var r=function(e){return e.toDo.toDoList.filter((function(t){return t.profileId===e.profile.activeProfileId}))}},164:function(e,t,n){"use strict";n.r(t),n.d(t,"ToDoCardFooter",(function(){return m}));var r=n(0),o=n.n(r),c=n(16),a=n(952),i=n(82),u=n.n(i),l=n(83),s=n(131),f=n(132),d=n(112),p=n(133),m=function(){var e=Object(c.c)(d.activeProfileSelector),t=Object(c.c)(p.errorMessageSelector);return o.a.createElement("div",{className:"card-footer"},o.a.createElement(l.a,null,o.a.createElement("button",{className:u()("btn","btn-primary",{disabled:!(null===e||void 0===e?void 0:e.profileId)}),onClick:Object(s.getCreateOnClick)(null===e||void 0===e?void 0:e.profileId)},"Create New ToDo"),t&&o.a.createElement(a.a,{style:{flexGrow:1},variant:"warning",dismissible:!0,onClose:Object(f.getErrorCloseOnClick)()},t)))}},208:function(e,t,n){"use strict";n.r(t),n.d(t,"ToDoCard",(function(){return s}));var r=n(0),o=n.n(r),c=n(16),a=n(145),i=n(163),u=n(112),l=n(164),s=function(e){var t=e.reactConfig,n=Object(c.c)(i.toDoListSelector),r=Object(c.c)(u.activeProfileSelector);return o.a.createElement("div",{className:"card",role:"complementary","aria-label":"ToDo Card"},o.a.createElement("div",{className:"card-header"},o.a.createElement("h5",{className:"card-title"},null===t||void 0===t?void 0:t.title," ",(null===r||void 0===r?void 0:r.name)&&"for ".concat(null===r||void 0===r?void 0:r.name))),o.a.createElement("div",{className:"card-body"},o.a.createElement("ul",{className:"list-group"},n.map((function(e){return o.a.createElement(a.ToDoItem,{key:e.toDoId,toDo:e})})))),o.a.createElement(l.ToDoCardFooter,null))};t.default=s},83:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),o=n.n(r),c=n(85),a=n.n(c),i=function(e){var t=e.children;return o.a.createElement("div",{className:a.a.wrapper},t)}},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),o=n.n(r),c=function(e){var t=e.value,n=e.onChange,r=e.label,c=e.idPrefix,a=e.autoFocus,i="".concat(c,"-input");return o.a.createElement("div",null,o.a.createElement("label",{htmlFor:i},r),o.a.createElement("input",{id:i,type:"text",className:"form-control",value:t,onChange:function(e){return n(e.target.value)},autoFocus:a}))}},85:function(e,t,n){e.exports={wrapper:"CardFooterWrapper_wrapper__1sA5G"}},88:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},98:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=4.eb9cc337.chunk.js.map