(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),s=n(15),i=n.n(s),a=(n(25),n.p+"static/media/logo.6ce24c58.svg"),o=(n(26),n(0)),j=function(e){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("h1",{children:["Hello ",e.name," aka ",e.nickame]}),e.children]})},l=function(){return Object(o.jsx)("p",{children:"children props"})},d=n(16),h=n(17),u=n(20),b=n(19),O=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).addCounter=function(){e.setState({count:e.state.count+1})},e.state={count:0},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:this.addCounter,children:"Click this button"}),Object(o.jsxs)("p",{children:["counts = ",this.state.count]})]})}}]),n}(r.a.Component),p=n(5),f=n(18),x=n.n(f).a.create({baseURL:"http://localhost:8080/api/v1",headers:{"Content-type":"application/json"}}),m=function(){return x.get("/hello")},g=function(){var e=Object(c.useState)(""),t=Object(p.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){m().then((function(e){r(e.data)})).catch((function(e){console.log("something went wrong lol")}))})),n},v=function(){return x.get("/employees")},k=function(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){v().then((function(e){r(e.data)})).catch((function(){console.log("suri na pasinsha na gudbliz")}))})),Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"List of Employees"}),Object(o.jsx)("div",{children:Object(o.jsxs)("table",{border:"1",children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"Name"}),Object(o.jsx)("td",{children:"Location"}),Object(o.jsx)("td",{children:"Department"})]}),n.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.name}),Object(o.jsx)("td",{children:e.department}),Object(o.jsx)("td",{children:e.location})]})}))]})})]})};var C=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsx)("img",{src:a,className:"App-logo",alt:"logo"}),Object(o.jsxs)("p",{children:["Edit ",Object(o.jsx)("code",{children:"src/App.js"})," and save to reload. SI OPTIMUM RPIDE EURGH ARGH EOURGH"]}),Object(o.jsx)("p",{children:g()}),Object(o.jsx)(k,{}),Object(o.jsxs)(j,{name:"Peter",nickname:"the bato",children:[Object(o.jsx)(l,{}),Object(o.jsx)(O,{})]}),Object(o.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(o.jsxs)(r.a.StrictMode,{children:[Object(o.jsx)(C,{}),Object(o.jsx)(C,{})]}),document.getElementById("root")),E()}},[[46,1,2]]]);
//# sourceMappingURL=main.92471329.chunk.js.map