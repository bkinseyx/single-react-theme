(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[35],{196:function(t,o,e){"use strict";e.r(o);var i=e(12),n=e(5);test("updateToDo test",(function(){var t,o,e=i.a.getState().toDo,a=e.toDoList.find((function(t){return 1===t.toDoId}));expect(null===a||void 0===a?void 0:a.isComplete).toBeTruthy(),expect(null===a||void 0===a?void 0:a.description).toBe("eat tacos"),i.a.dispatch(Object(n.updateToDo)({toDoId:1,isComplete:!1}));var p=(e=i.a.getState().toDo).toDoList.find((function(t){return 1===t.toDoId}));expect(null===(t=p)||void 0===t?void 0:t.isComplete).toBeFalsy(),i.a.dispatch(Object(n.updateToDo)({toDoId:1,description:"be merry"})),p=(e=i.a.getState().toDo).toDoList.find((function(t){return 1===t.toDoId})),expect(null===(o=p)||void 0===o?void 0:o.description).toBe("be merry"),i.a.dispatch(Object(n.updateToDo)({toDoId:1,description:"eat tacos",isComplete:!0}));var c=(e=i.a.getState().toDo).toDoList.find((function(t){return 1===t.toDoId}));expect(c).toMatchInlineSnapshot('\n    Object {\n      "description": "eat tacos",\n      "isComplete": true,\n      "profileId": 1,\n      "toDoId": 1,\n    }\n  '),expect(c).toEqual(a)}))}}]);
//# sourceMappingURL=35.818dfd55.chunk.js.map