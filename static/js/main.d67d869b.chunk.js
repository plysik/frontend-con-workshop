(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(4),c=n.n(l),u=(n(12),n(1)),o=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(a.useState)(e),n=Object(u.a)(t,2),r=n[0],l=n[1];return[r,function(){return l(!r)},l]},i=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=o(e),n=Object(u.a)(t,2);return{value:n[0],inverse:n[1]}},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=Object(a.useState)(e),n=Object(u.a)(t,2),r=n[0],l=n[1];return[r,function(){return l(function(e){return e+1})},function(){return l(function(e){return e-1})},l]},m=n(6),v=function(){var e=Object(a.useState)({width:window.outerWidth,height:window.outerHeight}),t=Object(u.a)(e,2),n=t[0],r=t[1],l=function(e){r({width:e.target.outerWidth,height:e.target.outerHeight})};return Object(a.useEffect)(function(){return window.addEventListener("resize",l),function(){window.removeEventListener("risze",l)}}),Object(m.a)({},n)},E=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1];return{value:n,onChange:function(e){r(e.target.value)}}},d=function(){var e=v(),t=e.width,n=e.height;return r.a.createElement("div",null,r.a.createElement("h2",null,"WindowMeasure solution"),r.a.createElement("p",null,"Window size is: ".concat(t,"px X ").concat(n,"px.")))},p=function(){var e=s(0),t=Object(u.a)(e,3),n=t[0],a=t[1],l=t[2];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Counter solution"),r.a.createElement("p",null,"You have clicked ",n," times"),r.a.createElement("button",{onClick:a},"Increase"),r.a.createElement("button",{onClick:l},"Decrease"))},f=r.a.createContext({});function b(e){var t=e.children,n=Object(a.useState)({name:"John",surname:"Lemon"}),l=Object(u.a)(n,2),c=l[0],o=l[1];return r.a.createElement(f.Provider,{value:{user:c,setUser:o}},t)}function h(){var e=E(""),t=E(""),n=Object(a.useContext)(f).setUser;return r.a.createElement("div",null,r.a.createElement("h2",null,"Form solution"),r.a.createElement("p",null,r.a.createElement("input",Object.assign({type:"text"},e))),r.a.createElement("p",null,r.a.createElement("input",Object.assign({type:"text"},t))),r.a.createElement("p",null,r.a.createElement("button",{type:"submit",onClick:function(a){a.preventDefault();var r={name:e.value,surname:t.value};n(r)}},"Submit")))}function O(){var e=Object(a.useContext)(f).user;return e.name&&e.surname?r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h2",null,"Header"),r.a.createElement("p",null,"User name is ".concat(e.name))):r.a.createElement("div",null,"No user :( ")}function g(){var e=Object(a.useContext)(f).user;return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h2",null,"Footer"),r.a.createElement("p",null,"User surname is ".concat(e.surname)))}function j(){var e=i(!0);return r.a.createElement("div",{className:"toggle"},r.a.createElement("button",{onClick:e.inverse},e.value?"Hide":"Show"," counter"),e.value&&r.a.createElement(p,null))}var w=n(5),C=n(2),k=n.n(C),x=r.a.createContext({});function y(e){var t=e.children,n=Object(a.useState)(null),l=Object(u.a)(n,2),c=l[0],o=l[1],i=Object(a.useState)(!0),s=Object(u.a)(i,2),m=s[0],v=s[1],E=Object(a.useState)([]),d=Object(u.a)(E,2),p=d[0],f=d[1],b=function(e){o(e),v(!1)},h=function(e){return r.a.cloneElement(e,{className:k()(e.props.className,"option--selected")})};return m?r.a.createElement(x.Provider,{value:{selectedOption:c,selectOption:b,registerOption:function(e){f(Object(w.a)(p).concat([e])),c||b(p[0])}}},r.a.createElement("div",{className:"select"},t)):r.a.createElement("div",{className:"select",onClick:function(e){v(!0)}},c?h(c.body):p[0]?h(p[0].body):r.a.createElement("button",null,"pick one"))}function S(e){var t=e.value,n=e.children,l=Object(a.useContext)(x),c=l.selectOption,u=l.registerOption,o=l.selectedOption;Object(a.useEffect)(function(){u({value:t,body:s()})},[]);var i=function(){console.log("picked ".concat(t)),c({value:t,body:s()})},s=function(){return r.a.createElement("div",{className:k()("option",{"option--selected":o&&o.value===t}),onClick:i},n)};return s()}n(14);var N=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(b,null,r.a.createElement(O,null),r.a.createElement("div",{className:"App"},r.a.createElement(y,null,r.a.createElement(S,{value:"apple"},r.a.createElement("span",null,"Apple")),r.a.createElement(S,{value:"pear"},r.a.createElement("span",null,"Pear")),r.a.createElement(S,{value:"grapes"},r.a.createElement("span",null,"Grapes"))),r.a.createElement(j,null),r.a.createElement(d,null),r.a.createElement(h,null)),r.a.createElement(g,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,n){e.exports=n(16)}},[[7,2,1]]]);
//# sourceMappingURL=main.d67d869b.chunk.js.map