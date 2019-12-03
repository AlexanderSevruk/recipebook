(this.webpackJsonprecipebook=this.webpackJsonprecipebook||[]).push([[0],{64:function(e,t,a){e.exports=a(80)},69:function(e,t,a){},77:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),i=(a(69),a(17)),o=a(19),u=a(51),s=a.n(u),m=function(e,t){switch(t.type){case"ADD_RECIPE":return[].concat(Object(o.a)(e),[{title:t.recipe.title,ingredient:t.recipe.ingredient,direction:t.recipe.direction,id:s()()}]);case"REMOVE_RECIPE":return e.filter((function(e){return e.id!==t.id}));default:return e}},p=Object(n.createContext)(),d=function(e){var t=Object(n.useReducer)(m,[],(function(){var e=localStorage.getItem("recipes");return e?JSON.parse(e):[]})),a=Object(i.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){localStorage.setItem("recipes",JSON.stringify(c))}),[c]),r.a.createElement(p.Provider,{value:{recipes:c,dispatch:l}},e.children)},E=a(81),f=a(110),b=a(52),v=a.n(b),h=Object(f.a)((function(e){return{button:{margin:e.spacing(3)}}}));function g(){var e=h();return r.a.createElement("div",null,r.a.createElement(E.a,{type:"submit",variant:"contained",color:"primary",className:e.button,startIcon:r.a.createElement(v.a,null)},"Add recipe"))}var O=a(117),y=function(){var e=Object(n.useContext)(p).dispatch,t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),u=Object(i.a)(o,2),s=u[0],m=u[1],d=Object(n.useState)(""),E=Object(i.a)(d,2),f=E[0],b=E[1];return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e({type:"ADD_RECIPE",recipe:{title:c,ingredient:s,direction:f}}),l(""),m(""),b("")}},r.a.createElement(O.a,{style:{margin:"12px 0"},inputProps:{"aria-label":"description"},id:"standard-basic",color:"primary",fullWidth:!0,label:"Recipe title",value:c,onChange:function(e){return l(e.target.value)},required:!0}),r.a.createElement(O.a,{style:{margin:"12px 0"},inputProps:{"aria-label":"description"},id:"standard-basic",color:"primary",fullWidth:!0,label:"Ingredients",value:s,onChange:function(e){return m(e.target.value)},required:!0}),r.a.createElement(O.a,{style:{margin:"12px 0"},label:"Directions(optional)",id:"standard-multiline-flexible",multiline:!0,fullWidth:!0,rowsMax:"4",value:f,onChange:function(e){return b(e.target.value)}}),r.a.createElement(g,null,"Add"))},j=a(114),N=a(115),x=a(119);function C(){return r.a.createElement(j.a,{className:"button__group"},r.a.createElement(N.a,{size:"large","aria-label":"large contained button group"},r.a.createElement(x.a,{href:"#",underline:"none"},r.a.createElement(E.a,{color:"primary"}," create ")),r.a.createElement(x.a,{href:"#/search",underline:"none"},r.a.createElement(E.a,{color:"primary"},"search")),r.a.createElement(x.a,{href:"#/archive",underline:"none"},r.a.createElement(E.a,{color:"primary"},"archive"))))}var k=function(){var e=Object(n.useContext)(p).recipes;return r.a.createElement("div",{className:"navbar"},r.a.createElement("h1",null,"Recipe Book"),r.a.createElement(C,null),r.a.createElement("p",null,"You can find your saved recipes in the Archive. Currently you have"," ",e.length," ",e.length>=2||0===e.length?"recipes":"recipe"," ","saved"),r.a.createElement(y,null))},w=a(39),S=a.n(w),I=a(53),_=function(e){var t=e.title,a=e.calories,n=e.image,c=e.ingredients,l=e.url;return r.a.createElement("div",{className:"recipes"},r.a.createElement("h2",null,t),r.a.createElement("ul",null,c.map((function(e){return r.a.createElement("li",null,e.text)}))),r.a.createElement("p",null,"calories : ",a),r.a.createElement("p",null,r.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer"},"View full recipe")),r.a.createElement("img",{src:n,alt:""}))},D=a(118),R=a(116),P=a(54),A=a.n(P),B=(a(77),function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(i.a)(l,2),u=o[0],s=o[1],m=Object(n.useState)("banana"),p=Object(i.a)(m,2),d=p[0],E=p[1];Object(n.useEffect)((function(){f()}),[d]);var f=function(){var e=Object(I.a)(S.a.mark((function e(){var t,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(d,"&app_id=").concat("6bb717cb","&app_key=").concat("83f22d27bb00b6d3afebeeca94d8da7a"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(a.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"search-page"},r.a.createElement("div",{className:"BottomNav"},r.a.createElement(C,null)),r.a.createElement("div",{className:"search"},r.a.createElement(D.a,{className:"input",placeholder:"Search field",inputProps:{"aria-label":"search google maps"},value:u,onChange:function(e){s(e.target.value)}}),r.a.createElement(R.a,{type:"submit","aria-label":"search"},r.a.createElement(A.a,{onClick:function(e){e.preventDefault(),E(u),s("")}}))),r.a.createElement("div",{className:"recipes"},a.map((function(e){return r.a.createElement("div",{className:"recipe_output"},r.a.createElement(_,{key:e.recipe.label,title:e.recipe.label,calories:Math.floor(e.recipe.calories),image:e.recipe.image,ingredients:e.recipe.ingredients,url:e.recipe.url}))}))))}),W=a(56),J=a(21),M=a(55),q=a.n(M),V=function(e){var t=e.recipe,a=Object(n.useContext)(p).dispatch;return r.a.createElement("li",null,r.a.createElement("div",{className:"title"},t.title),r.a.createElement("br",null),r.a.createElement("div",{className:"ingredient"},"Ingredients: ",t.ingredient),r.a.createElement("br",null),r.a.createElement("div",{className:"direction"},"Direction: ",t.direction),r.a.createElement("br",null),r.a.createElement(E.a,{onClick:function(){return a({type:"REMOVE_RECIPE",id:t.id})},variant:"contained",color:"primary",startIcon:r.a.createElement(q.a,null)},"Delete"))},z=function(){var e=Object(n.useContext)(p).recipes;return e.length?r.a.createElement("div",{className:"recipe-list"},r.a.createElement("ul",null,e.map((function(e){return r.a.createElement(V,{recipe:e,key:e.id})}))),r.a.createElement("div",{className:"BottomNav"},r.a.createElement(C,null))):r.a.createElement("div",{className:"empty"},"No saved recipes",r.a.createElement(C,null))},Y=function(){return r.a.createElement(W.a,null,r.a.createElement(J.c,null,r.a.createElement(J.a,{exact:!0,path:"/",component:k}),r.a.createElement(J.a,{exact:!0,path:"/create",component:y}),r.a.createElement(J.a,{exact:!0,path:"/search",component:B}),r.a.createElement(J.a,{exact:!0,path:"/archive",component:z})))};var $=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null,r.a.createElement(Y,null,r.a.createElement(k,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[64,1,2]]]);
//# sourceMappingURL=main.e3b3885d.chunk.js.map