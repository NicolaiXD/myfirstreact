(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(19),l=n.n(s),r=(n(29),n.p+"static/media/logo.6ce24c58.svg"),o=(n(30),n(0)),i=function(e){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("h1",{children:["Hello ",e.name," aka ",e.nickame]}),e.children]})},d=function(){return Object(o.jsx)("p",{children:"children props"})},j=n(20),b=n(21),h=n(24),u=n(23),m=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).addCounter=function(){e.setState({count:e.state.count+1})},e.state={count:0},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:this.addCounter,children:"Click this button"}),Object(o.jsxs)("p",{children:["counts = ",this.state.count]})]})}}]),n}(a.a.Component),p=n(3),O=n(22),x=n.n(O).a.create({baseURL:"http://localhost:8080/api/v1",headers:{"Content-type":"application/json"}}),f=function(){return x.get("/hello")},v=function(){var e=Object(c.useState)(""),t=Object(p.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){f().then((function(e){a(e.data)})).catch((function(e){console.log("something went wrong lol")}))})),n},g=n(6),y=function(){return x.get("/employees")},N=function(e){return x.post("/employees",e)},k=function(e){return x.put("/employees",e)},C=function(e){return x.get("/employees/".concat(e))},A=function(e){return x.delete("/employees/".concat(e))},w=function(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){s()}));var s=function(){y().then((function(e){a(e.data)})).catch((function(){console.log("suri na pasinsha na gudbliz")}))};return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"List of Employees"}),Object(o.jsx)("div",{children:Object(o.jsxs)("table",{className:"table table-hover table-light table-striped",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{className:"table-danger",children:[Object(o.jsx)("td",{children:"Name"}),Object(o.jsx)("td",{children:"Location"}),Object(o.jsx)("td",{children:"Department"}),Object(o.jsx)("td",{children:"Action"})]})}),Object(o.jsx)("tbody",{children:n.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.name}),Object(o.jsx)("td",{children:e.department}),Object(o.jsx)("td",{children:e.location}),Object(o.jsx)("td",{children:Object(o.jsxs)("div",{className:"d-grid gap-2 d-md-flex",children:[Object(o.jsx)(g.b,{className:"btn btn-primary",to:"/employees/edit/".concat(e.employeeId),children:"Update"}),Object(o.jsx)("button",{className:"btn btn-danger",onClick:function(){return t=e.employeeId,void A(t).then((function(e){console.log("deleted employee yay")})).catch((function(e){console.error("something went wrong oh no!",e)}));var t},children:"Delete"})]})})]},e.employeeId)}))})]})})]})},F=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(o.jsxs)("div",{class:"container-fluid",children:[Object(o.jsx)("a",{class:"navbar-brand",href:"/",children:"ICS2608"}),Object(o.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(o.jsxs)("div",{class:"navbar-nav",children:[Object(o.jsx)("a",{class:"nav-link",href:"/",children:"Home"}),Object(o.jsx)("a",{class:"nav-link",href:"/employees",children:"Employees"}),Object(o.jsx)("a",{class:"nav-link",href:"/add",children:"Add employee"}),Object(o.jsx)("a",{class:"nav-link disabled",href:"#",tabindex:"-1","aria-disabled":"true",children:"Disabled"})]})})]})})})};var S=function(){return Object(o.jsx)("div",{className:"Home",children:Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsx)("img",{src:r,className:"App-logo",alt:"logo"}),Object(o.jsxs)("p",{children:["Edit ",Object(o.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(o.jsx)("p",{children:v()}),Object(o.jsxs)(i,{name:"Peter",nickname:"the bato",children:[Object(o.jsx)(d,{}),Object(o.jsx)(m,{})]}),Object(o.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},I=n(2),E=function(){var e=Object(c.useState)(""),t=Object(p.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),l=Object(p.a)(s,2),r=l[0],i=l[1],d=Object(c.useState)(""),j=Object(p.a)(d,2),b=j[0],h=j[1],u=Object(I.f)(),m=Object(I.g)().employeeId;return Object(c.useEffect)((function(){m&&C(m).then((function(e){a(e.data.name),i(e.data.location),h(e.data.department),console.log(e.data.name),console.log(e.data.location),console.log(e.data.department)})).catch((function(e){console.error("error")}))}),[]),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h3",{children:"Add employee"}),Object(o.jsxs)("form",{children:[Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("label",{for:"nameField",className:"form-label",children:"Name"}),Object(o.jsx)("input",{type:"text",className:"form-control",id:"nameField",placeholder:"Add employee name",onChange:function(e){a(e.target.value)}})]}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("label",{for:"locationField",className:"form-label",children:"Location"}),Object(o.jsx)("input",{type:"text",className:"form-control",id:"locationField",placeholder:"Add employee location",onChange:function(e){i(e.target.value)}})]}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("label",{for:"departmentField",className:"form-label",children:"Department"}),Object(o.jsx)("input",{type:"text",className:"form-control",id:"departmentField",placeholder:"Add employee department",onChange:function(e){h(e.target.value)}})]}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){return function(e){e.preventDefault(),m?k({employeeId:m,name:n,location:r,department:b}).then((function(e){console.log("updated employee!",e.data),u("/employees")})).catch((function(e){console.error("somethingwent wrong!")})):N({name:n,location:r,department:b}).then((function(e){console.log("added new employee!",e.data),u("/employees")})).catch((function(e){console.error("somethingwent wrong!")}))}(e)},children:"Save"})]})]})},L=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"page not found :("})})},D=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(g.a,{children:Object(o.jsxs)(I.c,{children:[Object(o.jsx)(I.a,{exact:!0,path:"/",element:Object(o.jsx)(S,{})}),Object(o.jsx)(I.a,{exact:!0,path:"/employees",element:Object(o.jsx)(w,{})}),Object(o.jsx)(I.a,{exact:!0,path:"/add",element:Object(o.jsx)(E,{})}),Object(o.jsx)(I.a,{exact:!0,path:"employees/edit/:employeeId",element:Object(o.jsx)(E,{})}),Object(o.jsx)(I.a,{exact:!0,path:"*",element:Object(o.jsx)(L,{})})]})})})};var H=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(F,{}),Object(o.jsx)(D,{})]})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,l=t.getTTFB;n(e),c(e),a(e),s(e),l(e)}))};n(50);l.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(H,{})}),document.getElementById("root")),P()}},[[51,1,2]]]);
//# sourceMappingURL=main.71878f96.chunk.js.map