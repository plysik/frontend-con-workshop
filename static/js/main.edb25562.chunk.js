(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),u=n.n(o),c=(n(10),n(1)),i=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(a.useState)(e),n=Object(c.a)(t,2),r=n[0],o=n[1];return[r,function(){return o(!r)},o]},l=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=i(e),n=Object(c.a)(t,2);return{value:n[0],inverse:n[1]}},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=Object(a.useState)(e),n=Object(c.a)(t,2),r=n[0],o=n[1];return[r,function(){return o(function(e){return e+1})},function(){return o(function(e){return e-1})},o]},m=n(4),v=function(){var e=Object(a.useState)({width:window.outerWidth,height:window.outerHeight}),t=Object(c.a)(e,2),n=t[0],r=t[1],o=function(e){r({width:e.target.outerWidth,height:e.target.outerHeight})};return Object(a.useEffect)(function(){return window.addEventListener("resize",o),function(){window.removeEventListener("risze",o)}}),Object(m.a)({},n)},d=function(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],r=t[1];return{value:n,onChange:function(e){r(e.target.value)}}},h=function(){var e=v(),t=e.width,n=e.height;return r.a.createElement("div",null,r.a.createElement("h2",null,"WindowMeasure solution"),r.a.createElement("p",null,"Window size is: ".concat(t,"px X ").concat(n,"px.")))},w=function(){var e=s(0),t=Object(c.a)(e,3),n=t[0],a=t[1],o=t[2];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Counter solution"),r.a.createElement("p",null,"You have clicked ",n," times"),r.a.createElement("button",{onClick:a},"Increase"),r.a.createElement("button",{onClick:o},"Decrease"))};function E(){var e=d(""),t=d("");return r.a.createElement("div",null,r.a.createElement("h2",null,"Form solution"),r.a.createElement("p",null,r.a.createElement("input",Object.assign({type:"text"},e))),r.a.createElement("p",null,r.a.createElement("input",Object.assign({type:"password"},t))),r.a.createElement("p",null,r.a.createElement("button",{type:"submit"},"Submit")))}n(12);var f=function(){var e=l(!0);return r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement("button",{onClick:e.inverse},e.value?"Hide":"Show"," counter"),e.value&&r.a.createElement(w,null)),r.a.createElement(h,null),r.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},5:function(e,t,n){e.exports=n(14)}},[[5,2,1]]]);
//# sourceMappingURL=main.edb25562.chunk.js.map