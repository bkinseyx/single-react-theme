(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[2,3,7,8,9],{14:function(e,t,n){"use strict";n.r(t),n.d(t,"Counter",(function(){return i}));var r=n(65),a=n(0),o=n.n(a),l=n(9),c=n(2),u=n(32),s=n.n(u);function i(){var e=Object(l.c)(c.selectCount),t=Object(l.b)(),n=Object(a.useState)("2"),u=Object(r.a)(n,2),i=u[0],m=u[1];return o.a.createElement("div",null,o.a.createElement("div",{className:s.a.row},o.a.createElement("button",{className:s.a.button,"aria-label":"Increment value",onClick:function(){return t(Object(c.increment)())}},"+"),o.a.createElement("span",{className:s.a.value},e),o.a.createElement("button",{className:s.a.button,"aria-label":"Decrement value",onClick:function(){return t(Object(c.decrement)())}},"-")),o.a.createElement("div",{className:s.a.row},o.a.createElement("input",{className:s.a.textbox,"aria-label":"Set increment amount",value:i,onChange:function(e){return m(e.target.value)}}),o.a.createElement("button",{className:s.a.button,onClick:function(){return t(Object(c.incrementByAmount)(Number(i)||0))}},"Add Amount"),o.a.createElement("button",{className:s.a.asyncButton,onClick:function(){return t(Object(c.incrementAsync)(Number(i)||0))}},"Add Async")))}},16:function(e,t,n){"use strict";n.r(t),n.d(t,"ReduxDemo",(function(){return u}));var r=n(0),a=n.n(r),o=n(34),l=n.n(o),c=n(14),u=(n(33),function(e){var t=e.reactConfig;return console.log({reactConfig:t}),a.a.createElement("div",{className:"ReduxDemo"},a.a.createElement("header",{className:"ReduxDemo-header"},a.a.createElement("img",{src:l.a,className:"ReduxDemo-logo",alt:"logo"}),a.a.createElement(c.Counter,null),a.a.createElement("p",null,"Edit ",a.a.createElement("code",null,"src/ReduxDemo.tsx")," and save to reload."),a.a.createElement("span",null,a.a.createElement("span",null,"Learn "),a.a.createElement("a",{className:"ReduxDemo-link",href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},"React"),a.a.createElement("span",null,", "),a.a.createElement("a",{className:"ReduxDemo-link",href:"https://redux.js.org/",target:"_blank",rel:"noopener noreferrer"},"Redux"),a.a.createElement("span",null,", "),a.a.createElement("a",{className:"ReduxDemo-link",href:"https://redux-toolkit.js.org/",target:"_blank",rel:"noopener noreferrer"},"Redux Toolkit"),",",a.a.createElement("span",null," and "),a.a.createElement("a",{className:"ReduxDemo-link",href:"https://react-redux.js.org/",target:"_blank",rel:"noopener noreferrer"},"React Redux"))))});t.default=u},32:function(e,t,n){e.exports={row:"Counter_row__3rMwG",value:"Counter_value__t9py-",button:"Counter_button__3PzVv",textbox:"Counter_textbox__21yps",asyncButton:"Counter_asyncButton__1PtLE Counter_button__3PzVv"}},33:function(e,t,n){},34:function(e,t,n){e.exports=n.p+"static/media/logo.8dad8028.svg"},65:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=2.f31e1bae.chunk.js.map