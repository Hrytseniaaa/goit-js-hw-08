var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,o=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,c=u||f||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,v=function(){return c.Date.now()};function m(e,t,n){var i,r,o,a,u,f,c=0,l=!1,m=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,o=r;return i=r=void 0,c=t,a=e.apply(o,n)}function h(e){return c=e,u=setTimeout(j,t),l?y(e):a}function T(e){var n=e-f;return void 0===f||n>=t||n<0||m&&e-c>=o}function j(){var e=v();if(T(e))return w(e);u=setTimeout(j,function(e){var n=t-(e-f);return m?d(n,o-(e-c)):n}(e))}function w(e){return u=void 0,b&&i?y(e):(i=r=void 0,a)}function x(){var e=v(),n=T(e);if(i=arguments,r=this,f=e,n){if(void 0===u)return h(f);if(m)return u=setTimeout(j,t),y(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=p(t)||0,g(n)&&(l=!!n.leading,o=(m="maxWait"in n)?s(p(n.maxWait)||0,t):o,b="trailing"in n?!!n.trailing:b),x.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=f=r=u=void 0},x.flush=function(){return void 0===u?a:w(v())},x}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=r.test(e);return u||o.test(e)?a(e.slice(2),u?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),m(e,t,{leading:i,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form"),y=b.email,h=b.message;function T(){const e=b.elements,t={email:e.email.value,text:e.message.value};localStorage.setItem("feedback-form-state",JSON.stringify({dates:t}))}!function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);e&&(y.value=t.dates.email,h.value=t.dates.text)}(),b.addEventListener("input",t(T,500)),b.addEventListener("submit",(function(e){const t=e.currentTarget.elements;t.email.value,t.message.value})),b.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem("feedback-form-state"),0!==h.value.length&&0!==y.value.length&&e.currentTarget.reset()}));t(T,500);
//# sourceMappingURL=03-feedback.1ded2133.js.map
