!function u(i,c,l){function f(r,e){if(!c[r]){if(!i[r]){var t="function"==typeof require&&require;if(!e&&t)return t(r,!0);if(s)return s(r,!0);var n=new Error("Cannot find module '"+r+"'");throw n.code="MODULE_NOT_FOUND",n}var o=c[r]={exports:{}};i[r][0].call(o.exports,function(e){return f(i[r][1][e]||e)},o,o.exports,u,i,c,l)}return c[r].exports}for(var s="function"==typeof require&&require,e=0;e<l.length;e++)f(l[e]);return f}({1:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.con=function(e){return"hello "+e+" str"}},{}],2:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sayHello=function(e){return"Hello from "+e}},{}],3:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o,u=e("./greet"),i=e("./con");console.log(i.con("con")),n="greeting",o="TypeScript test ts",console.log("test var 123 es6"),document.getElementById(n).innerText=u.sayHello(o)},{"./con":1,"./greet":2}]},{},[3]);
//# sourceMappingURL=main.js.map
