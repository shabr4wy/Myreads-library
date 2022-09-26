(this["webpackJsonpnd0191-myreads-starter"]=this["webpackJsonpnd0191-myreads-starter"]||[]).push([[0],{18:function(e,t,s){},20:function(e,t,s){},22:function(e,t,s){"use strict";s.r(t);var o=s(1),r=s(13),c=s.n(r),a=(s(18),s(7)),n=s.n(a),i=s(12),l=s(10),b=s(4),j=(s(20),s(0)),d=function(e){var t=e.book,s=e.updateBooksLibrary,r=Object(o.useState)("moveTo"),c=Object(b.a)(r,2),a=c[0],n=c[1];return Object(j.jsxs)("div",{className:"book",children:[Object(j.jsxs)("div",{className:"book-top",children:[Object(j.jsx)("div",{className:"book-cover",children:t.imageLinks?Object(j.jsx)("img",{src:function(){var e=t.imageLinks.smallThumbnail.split("");return"s"!==e[4]?(e.splice(4,0,"s"),e.join("")):t.imageLinks.smallThumbnail}(),alt:t.title,width:"128",height:"192"}):void 0}),Object(j.jsx)("div",{className:"book-shelf-changer",children:Object(j.jsxs)("select",{value:t.shelf?t.shelf:a,onChange:function(e){return function(e){n(e),s(e,t)}(e.target.value)},children:[Object(j.jsx)("option",{value:"moveTo",disabled:!0,children:"Move to..."}),Object(j.jsx)("option",{value:"currentlyReading",children:"Currently Reading"}),Object(j.jsx)("option",{value:"wantToRead",children:"Want to Read"}),Object(j.jsx)("option",{value:"read",children:"Read"}),Object(j.jsx)("option",{value:"none",children:"None"})]})})]}),Object(j.jsx)("div",{className:"book-title",children:t.title}),Object(j.jsx)("div",{className:"book-authors",children:t.authors})]})},u=function(e){var t=e.booksFromServer,s=e.updateBooksLibrary;return Object(j.jsxs)("div",{className:"bookshelf",children:[Object(j.jsx)("h2",{className:"bookshelf-title",children:"Currently Reading"}),Object(j.jsx)("div",{className:"bookshelf-books",children:Object(j.jsx)("ol",{className:"books-grid",children:t.map((function(e){return"currentlyReading"===e.shelf&&Object(j.jsx)("li",{children:Object(j.jsx)(d,{book:e,updateBooksLibrary:s})},e.id)}))})})]})},h=function(e){var t=e.booksFromServer,s=e.updateBooksLibrary;return Object(j.jsxs)("div",{className:"bookshelf",children:[Object(j.jsx)("h2",{className:"bookshelf-title",children:"Read"}),Object(j.jsx)("div",{className:"bookshelf-books",children:Object(j.jsx)("ol",{className:"books-grid",children:t.map((function(e){return"read"===e.shelf&&Object(j.jsx)("li",{children:Object(j.jsx)(d,{book:e,updateBooksLibrary:s})},e.id)}))})})]})},O=function(e){var t=e.booksFromServer,s=e.updateBooksLibrary;return Object(j.jsxs)("div",{className:"bookshelf",children:[Object(j.jsx)("h2",{className:"bookshelf-title",children:"Wants To Read"}),Object(j.jsx)("div",{className:"bookshelf-books",children:Object(j.jsx)("ol",{className:"books-grid",children:t.map((function(e){return"wantToRead"===e.shelf&&Object(j.jsx)("li",{children:Object(j.jsx)(d,{book:e,updateBooksLibrary:s})},e.id)}))})})]})},k=s(5),f=function(e){var t=e.booksFromServer,s=e.updateBooksLibrary;return Object(j.jsxs)("div",{className:"list-books",children:[Object(j.jsx)("div",{className:"list-books-title",children:Object(j.jsx)("h1",{children:"MyReads"})}),Object(j.jsxs)("div",{className:"list-books-content",children:[Object(j.jsx)(u,{booksFromServer:t,updateBooksLibrary:s}),Object(j.jsx)(O,{booksFromServer:t,updateBooksLibrary:s}),Object(j.jsx)(h,{booksFromServer:t,updateBooksLibrary:s})]}),Object(j.jsx)("div",{className:"open-search",children:Object(j.jsx)(k.b,{to:"/searchPage",children:"add"})})]})},m=s(9),v="https://reactnd-books-api.udacity.com",x=localStorage.token;x||(x=localStorage.token=Math.random().toString(36).substr(-8));var p={Accept:"application/json",Authorization:x},y=function(e,t){return fetch("".concat(v,"/search"),{method:"POST",headers:Object(m.a)(Object(m.a)({},p),{},{"Content-Type":"application/json"}),body:JSON.stringify({query:e,maxResults:t})}).then((function(e){return e.json()})).then((function(e){return e.books}))},N=function(e){var t=e.booksFromServer,s=e.updateBooksLibrary,r=Object(o.useState)(""),c=Object(b.a)(r,2),a=c[0],i=c[1],u=Object(o.useState)([]),h=Object(b.a)(u,2),O=h[0],f=h[1];Object(o.useEffect)((function(){a?function(){var e=Object(l.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(a,10);case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()():f([])}),[a]);return Object(j.jsxs)("div",{className:"search-books",children:[Object(j.jsxs)("div",{className:"search-books-bar",children:[Object(j.jsx)(k.b,{to:"/",className:"close-search",children:"close"}),Object(j.jsx)("div",{className:"search-books-input-wrapper",children:Object(j.jsx)("input",{type:"text",placeholder:"Search by title, author, or ISBN",value:a,onChange:function(e){return i(e.target.value)}})})]}),Object(j.jsx)("div",{className:"search-books-results",children:Object(j.jsx)("ol",{className:"books-grid",children:O.error?Object(j.jsx)("p",{children:" not found "}):O.map((function(e){var o;return o=e,t.forEach((function(e){o.id===e.id&&(o.shelf=e.shelf)})),Object(j.jsx)("li",{children:Object(j.jsx)(d,{book:e,updateBooksLibrary:s})},e.id)}))})})]})},g=s(2);var S=function(){var e=Object(o.useState)([]),t=Object(b.a)(e,2),s=t[0],r=t[1];Object(o.useEffect)((function(){(function(){var e=Object(l.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"/books"),{headers:p}).then((function(e){return e.json()})).then((function(e){return e.books}));case 2:t=e.sent,r(Object(i.a)(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var c=function(e,t){var o,c;o=t,c=e,fetch("".concat(v,"/books/").concat(o.id),{method:"PUT",headers:Object(m.a)(Object(m.a)({},p),{},{"Content-Type":"application/json"}),body:JSON.stringify({shelf:c})}).then((function(e){return e.json()}));var a=s.filter((function(e){return t.id!==e.id}));t.shelf=e,r([].concat(Object(i.a)(a),[t]))};return Object(j.jsxs)(g.c,{children:[Object(j.jsx)(g.a,{exact:!0,path:"/",element:Object(j.jsx)(f,{booksFromServer:s,updateBooksLibrary:c})}),Object(j.jsx)(g.a,{path:"/searchPage",element:Object(j.jsx)(N,{booksFromServer:s,updateBooksLibrary:c})})]})};c.a.render(Object(j.jsx)(k.a,{children:Object(j.jsx)(S,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.120d3ae7.chunk.js.map