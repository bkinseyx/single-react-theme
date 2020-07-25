/*! For license information please see 5.776bcd5b.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[5,7,14,15,16,17,18,24,25,26,44],{114:function(e,t,r){"use strict";r.r(t),r.d(t,"ProfileCard",(function(){return f}));var n=r(0),a=r.n(n),i=r(13),c=r(81),o=r(93),l=r(94),u=r(72),f=function(e){var t=e.reactConfig,r=Object(i.c)(o.profileListSelector);return a.a.createElement("div",{className:"card",role:"main","aria-label":"Profile Card"},a.a.createElement("div",{className:"card-header"},a.a.createElement("h5",{className:"card-title"},null===t||void 0===t?void 0:t.title)),a.a.createElement("div",{className:"card-body"},a.a.createElement("ul",{className:"list-group"},r.map((function(e){return a.a.createElement(c.ProfileItem,{key:e.profileId,profile:e})})))),a.a.createElement("div",{className:"card-footer"},a.a.createElement(u.a,null,a.a.createElement("button",{className:"btn btn-primary",onClick:Object(l.getCreateOnClick)()},"Create New Profile"))))};t.default=f},48:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var c=a.apply(null,n);c&&e.push(c)}else if("object"===i)for(var o in n)r.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},49:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(0),a=r.n(n),i=function(e){var t=e.value,r=e.onChange,n=e.label,i=e.idPrefix,c=e.autoFocus,o="".concat(i,"-input");return a.a.createElement("div",null,a.a.createElement("label",{htmlFor:o},n),a.a.createElement("input",{id:o,type:"text",className:"form-control",value:t,onChange:function(e){return r(e.target.value)},autoFocus:c}))}},60:function(e,t,r){"use strict";r.r(t),r.d(t,"profileTypesSelector",(function(){return n}));var n=function(e){return e.profile.profileTypes}},61:function(e,t,r){"use strict";r.r(t),r.d(t,"getIsActiveSelector",(function(){return n}));var n=function(e){return function(t){return t.profile.activeProfileId===e.profileId}}},62:function(e,t,r){"use strict";r.r(t),r.d(t,"getNameOnChange",(function(){return i}));var n=r(12),a=r(4),i=function(e){return function(t){e&&n.a.dispatch(Object(a.updateProfile)({profileId:e,name:t}))}}},63:function(e,t,r){"use strict";r.r(t),r.d(t,"getTypeOnChange",(function(){return i}));var n=r(12),a=r(4),i=function(e){return function(t){e&&n.a.dispatch(Object(a.updateProfile)({profileId:e,profileType:t}))}}},64:function(e,t,r){"use strict";r.r(t),r.d(t,"getItemOnClick",(function(){return i}));var n=r(12),a=r(4),i=function(e){return function(){n.a.dispatch(Object(a.setActiveProfile)(e))}}},65:function(e,t,r){"use strict";r.r(t),r.d(t,"getDeleteOnClick",(function(){return i}));var n=r(12),a=r(4),i=function(e){return function(t){e&&(n.a.dispatch(Object(a.deleteProfile)(e)),t.stopPropagation())}}},71:function(e,t,r){e.exports={profileItem:"ProfileItem_profileItem___Vthf",buttonWrapper:"ProfileItem_buttonWrapper__Un2Su"}},72:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(0),a=r.n(n),i=r(73),c=r.n(i),o=function(e){var t=e.children;return a.a.createElement("div",{className:c.a.wrapper},t)}},73:function(e,t,r){e.exports={wrapper:"CardFooterWrapper_wrapper__1sA5G"}},81:function(e,t,r){"use strict";r.r(t),r.d(t,"ProfileItem",(function(){return C}));var n=r(0),a=r.n(n),i=r(13),c=r(71),o=r.n(c),l=r(48),u=r.n(l),f=function(e){var t=e.options,r=e.value,n=e.onChange,i=e.label,c=e.idPrefix,o="".concat(c,"-select");return a.a.createElement("div",null,a.a.createElement("label",{htmlFor:o},i),a.a.createElement("select",{id:o,value:r,className:"form-control",onChange:function(e){return n(null===e||void 0===e?void 0:e.target.value)}},t.map((function(e){return a.a.createElement("option",{key:e},e)}))))},s=r(49),p=r(14),d=r(60),m=r(61),v=r(62),b=r(63),g=r(64),h=r(65),C=function(e){var t=e.profile,r=void 0===t?p.emptyProfile:t,n=Object(i.c)(d.profileTypesSelector),c=Object(i.c)(Object(m.getIsActiveSelector)(r));return a.a.createElement("li",{className:u()("list-group-item",o.a.profileItem,{active:c}),onClick:Object(g.getItemOnClick)(r.profileId)},a.a.createElement(s.a,{idPrefix:"name-".concat(r.profileId),label:"Name",value:r.name,onChange:Object(v.getNameOnChange)(r.profileId),autoFocus:c}),a.a.createElement(f,{idPrefix:"type-".concat(r.profileId),label:"Type",value:r.profileType,options:n,onChange:Object(b.getTypeOnChange)(r.profileId)}),a.a.createElement("div",{className:o.a.buttonWrapper},a.a.createElement("button",{className:"btn btn-danger",onClick:Object(h.getDeleteOnClick)(r.profileId)},"Delete")))}},93:function(e,t,r){"use strict";r.r(t),r.d(t,"profileListSelector",(function(){return n}));var n=function(e){return e.profile.profileList}},94:function(e,t,r){"use strict";r.r(t),r.d(t,"getCreateOnClick",(function(){return i}));var n=r(12),a=r(4),i=function(){return function(){n.a.dispatch(Object(a.createProfile)())}}}}]);
//# sourceMappingURL=5.776bcd5b.chunk.js.map