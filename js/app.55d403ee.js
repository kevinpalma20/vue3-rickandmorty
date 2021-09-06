(function(e){function t(t){for(var r,i,s=t[0],u=t[1],o=t[2],f=0,b=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&b.push(c[i][0]),c[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(b.length)b.shift()();return a.push.apply(a,o||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==c[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue3-rickandmorty/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var o=0;o<s.length;o++)t(s[o]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"36ba":function(e,t,n){"use strict";n("4069")},4069:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={class:"container"},a=Object(r["e"])("h1",null,"Rick And Morty",-1);function i(e,t,n,i,s,u){var o=Object(r["n"])("Pagination"),l=Object(r["n"])("FilterByStatus"),f=Object(r["n"])("FilterByName"),b=Object(r["n"])("ListCharacters");return Object(r["j"])(),Object(r["d"])("div",c,[a,Object(r["f"])(o),Object(r["f"])(l),Object(r["f"])(f),Object(r["f"])(b)])}var s={class:"characters"};function u(e,t,n,c,a,i){var u=Object(r["n"])("CardCharacters");return Object(r["j"])(),Object(r["d"])("section",null,[Object(r["e"])("div",s,[(Object(r["j"])(!0),Object(r["d"])(r["a"],null,Object(r["m"])(c.characters,(function(e){return Object(r["j"])(),Object(r["d"])("div",{class:"characters__item",key:e.id},[Object(r["f"])(u,{item:e},null,8,["item"])])})),128))])])}var o=n("5502"),l=(n("b0c0"),{class:"character"}),f=["src","alt"],b={class:"character__info"},d={class:"status"},p={class:"origin"},j={class:"origin"};function O(e,t,n,c,a,i){return Object(r["j"])(),Object(r["d"])("div",l,[Object(r["e"])("img",{src:n.item.image,alt:n.item.name},null,8,f),Object(r["e"])("div",b,[Object(r["e"])("h3",null,Object(r["o"])(n.item.name),1),Object(r["e"])("div",d,[Object(r["e"])("span",{class:Object(r["h"])("Alive"==n.item.status?"alive":"Dead"==n.item.status?"dead":"default")},null,2),Object(r["e"])("span",null,Object(r["o"])(n.item.status)+" - "+Object(r["o"])(n.item.species),1)]),Object(r["e"])("div",p,[Object(r["e"])("span",null," Gender: "+Object(r["o"])(n.item.gender),1)]),Object(r["e"])("div",j,[Object(r["e"])("span",null," Origin: "+Object(r["o"])(n.item.origin.name),1)]),Object(r["e"])("div",null,[Object(r["e"])("span",null," Location: "+Object(r["o"])(n.item.location.name),1)])])])}var h={props:["item"]};n("e1dd");h.render=O;var m=h,v={components:{CardCharacters:m},setup:function(){var e=Object(o["b"])(),t=Object(r["b"])((function(){return e.state.charactersFilter}));Object(r["i"])((function(){e.dispatch("getCharacters")}));var n=function(){e.dispatch("getCharacters")};return{characters:t,getCharacters:n}}};n("c5fb");v.render=u;var g=v,y=(n("4de4"),{class:"containerfilter status"});function C(e,t,n,c,a,i){return Object(r["j"])(),Object(r["d"])("div",y,[Object(r["e"])("div",{class:"item",onClick:t[0]||(t[0]=function(e){return c.filter("")})}," All "),Object(r["e"])("div",{class:"item",onClick:t[1]||(t[1]=function(e){return c.filter("Alive")})}," Alive "),Object(r["e"])("div",{class:"item",onClick:t[2]||(t[2]=function(e){return c.filter("Dead")})}," Dead "),Object(r["e"])("div",{class:"item",onClick:t[3]||(t[3]=function(e){return c.filter("unknown")})}," Unknown ")])}var P={setup:function(){var e=Object(o["b"])(),t=function(t){e.dispatch("filterByStatus",t)};return{filter:t}}};n("dde9");P.render=C;var k=P,w={class:"search"};function x(e,t,n,c,a,i){return Object(r["j"])(),Object(r["d"])("div",w,[Object(r["r"])(Object(r["e"])("input",{type:"text",placeholder:"Search by name","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.name=e}),onKeyup:t[1]||(t[1]=function(e){return c.filter()})},null,544),[[r["p"],c.name]])])}var F={setup:function(){var e=Object(r["l"])(""),t=Object(o["b"])(),n=function(){t.dispatch("filterByName",e.value)};return{name:e,filter:n}}};n("36ba");F.render=x;var S=F,_={class:"containerfilter pagination"},D={class:"item"};function B(e,t,n,c,a,i){return Object(r["j"])(),Object(r["d"])("div",_,[Object(r["e"])("div",{class:"item",onClick:t[0]||(t[0]=function(e){return c.setDiminishPages()})}," - "),Object(r["e"])("div",D,"Page: "+Object(r["o"])(c.page),1),Object(r["e"])("div",{class:"item",onClick:t[1]||(t[1]=function(e){return c.setIncreasePages()})}," + ")])}var A={data:function(){return{}},setup:function(){var e=Object(o["b"])(),t=Object(r["b"])((function(){return e.state.pages})),n=function(){e.dispatch("setIncreasePages"),e.dispatch("getCharacters")},c=function(){e.dispatch("setDiminishPages"),e.dispatch("getCharacters")};return{setIncreasePages:n,setDiminishPages:c,page:t}}};A.render=B;var I=A,L={name:"App",data:function(){return{}},components:{ListCharacters:g,FilterByStatus:k,FilterByName:S,Pagination:I}};n("8b59");L.render=i;var M=L,N=n("1da1"),R=(n("96cf"),n("d3b7"),n("caad"),n("2532"),Object(o["a"])({state:{characters:[],charactersFilter:[],pages:1},mutations:{setIncreasePages:function(e){e.pages<34&&e.pages++},setDiminishPages:function(e){e.pages>1&&e.pages--},setCharacters:function(e,t){e.characters=t},setCharactersFilter:function(e,t){e.charactersFilter=t}},actions:{getCharacters:function(e){var t=this;return Object(N["a"])(regeneratorRuntime.mark((function n(){var r,c,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.prev=1,n.next=4,fetch("https://rickandmortyapi.com/api/character/?page=".concat(t.state.pages));case 4:return c=n.sent,n.next=7,c.json();case 7:a=n.sent,r("setCharacters",a.results),r("setCharactersFilter",a.results),n.next=15;break;case 12:n.prev=12,n.t0=n["catch"](1),console.error(n.t0);case 15:case"end":return n.stop()}}),n,null,[[1,12]])})))()},setIncreasePages:function(e){var t=e.commit;e.state;t("setIncreasePages")},setDiminishPages:function(e){var t=e.commit;e.state;t("setDiminishPages")},filterByStatus:function(e,t){var n=e.commit,r=e.state,c=r.characters.filter((function(e){return e.status.includes(t)}));n("setCharactersFilter",c)},filterByName:function(e,t){var n=e.commit,r=e.state,c=t.toLowerCase(),a=r.characters.filter((function(e){var t=e.name.toLowerCase();if(t.includes(c))return e}));n("setCharactersFilter",a)}},modules:{}}));Object(r["c"])(M).use(R).mount("#app")},"5d39":function(e,t,n){},"6e60":function(e,t,n){},"8b59":function(e,t,n){"use strict";n("6e60")},9892:function(e,t,n){},"9c60":function(e,t,n){},c5fb:function(e,t,n){"use strict";n("9892")},dde9:function(e,t,n){"use strict";n("5d39")},e1dd:function(e,t,n){"use strict";n("9c60")}});
//# sourceMappingURL=app.55d403ee.js.map