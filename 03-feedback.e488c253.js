!function(){function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="Expected a function",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,m=Math.max,p=Math.min,v=function(){return s.Date.now()};function g(t,e,n){var o,i,u,a,f,c,l=0,s=!1,d=!1,g=!0;if("function"!=typeof t)throw new TypeError(r);function j(e){var n=o,r=i;return o=i=void 0,l=e,a=t.apply(r,n)}function S(t){return l=t,f=setTimeout(h,e),s?j(t):a}function T(t){var n=t-c;return void 0===c||n>=e||n<0||d&&t-l>=u}function h(){var t=v();if(T(t))return w(t);f=setTimeout(h,function(t){var n=e-(t-c);return d?p(n,u-(t-l)):n}(t))}function w(t){return f=void 0,g&&o?j(t):(o=i=void 0,a)}function x(){var t=v(),n=T(t);if(o=arguments,i=this,c=t,n){if(void 0===f)return S(c);if(d)return f=setTimeout(h,e),j(c)}return void 0===f&&(f=setTimeout(h,e)),a}return e=b(e)||0,y(n)&&(s=!!n.leading,u=(d="maxWait"in n)?m(b(n.maxWait)||0,e):u,g="trailing"in n?!!n.trailing:g),x.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=c=i=f=void 0},x.flush=function(){return void 0===f?a:w(v())},x}function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=u.test(t);return n||a.test(t)?f(t.slice(2),n?2:8):i.test(t)?NaN:+t}e=function(t,e,n){var o=!0,i=!0;if("function"!=typeof t)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),g(t,e,{leading:o,maxWait:e,trailing:i})};const j="feedback-form-state",S={},T={form:document.querySelector(".feedback-form"),textarea:document.querySelector("textarea"),input:document.querySelector("input")};T.form.addEventListener("submit",(function(t){t.preventDefault(),t.currentTarget.reset(),localStorage.removeItem(j)})),T.form.addEventListener("input",t(e)((function(t){S[t.target.name]=t.target.value;const e=JSON.stringify(S);localStorage.setItem(j,e)}),500)),function(){const t=localStorage.getItem(j);if(t){const e=JSON.parse(t);console.log(e),T.input.value=e.email,T.textarea.value=e.message}}()}();
//# sourceMappingURL=03-feedback.e488c253.js.map
