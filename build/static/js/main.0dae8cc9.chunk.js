(this["webpackJsonpmvst-github-repos"]=this["webpackJsonpmvst-github-repos"]||[]).push([[0],{39:function(e,s,c){},40:function(e,s,c){},58:function(e,s,c){},63:function(e,s,c){},85:function(e,s,c){},86:function(e,s,c){},89:function(e,s,c){"use strict";c.r(s);var t=c(1),n=c.n(t),a=c(30),i=c.n(a),r=(c(39),c(40),c(13)),o=c(3),l=c(12),j=c(18),d=c.n(j),m=(c(58),c(10)),b=c(9),u=(c(63),c(0));function h(e){return Object(u.jsxs)("div",{className:"repo-card",children:[Object(u.jsx)("a",{className:"repo-name",href:"https://github.com/"+e.repo.owner.login+"/"+e.repo.name,target:"_blank",children:e.repo.name}),Object(u.jsx)("div",{className:"repo-description",children:e.repo.description}),Object(u.jsxs)("div",{className:"repo-card-footer mt-2",children:[e.repo.language&&Object(u.jsxs)("div",{className:"repo-language me-3 d-flex align-items-center justify-content-center",children:[Object(u.jsx)("span",{className:"circle-language"}),e.repo.language]}),e.repo.forks>0?Object(u.jsxs)("div",{className:"repo-forks",children:[Object(u.jsx)(b.a,{className:"icon-followers me-2",icon:m.d,color:"#000000",size:"sm"}),e.repo.forks]}):null,e.repo.license&&Object(u.jsxs)("div",{className:"repo-licence",children:[Object(u.jsx)(b.a,{className:"icon-followers me-2",icon:m.a,color:"#000000",size:"sm"}),e.repo.license.name]}),Object(u.jsxs)("div",{className:"repo-updated-on",children:["Updated at ",function(e){var s=new Date(e);return s.getDay()+" "+["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][s.getMonth()]}(e.repo.updated_at)]})]}),Object(u.jsx)("div",{className:"hr-container",children:Object(u.jsx)("hr",{className:"hr-element"})})]})}var O=c(31),x=c.n(O);function p(){var e=Object(t.useState)({}),s=Object(l.a)(e,2),c=s[0],n=s[1],a=Object(t.useState)([]),i=Object(l.a)(a,2),r=i[0],j=i[1],O=Object(t.useState)([]),p=Object(l.a)(O,2),f=p[0],N=p[1],v=Object(t.useState)(!0),g=Object(l.a)(v,2),w=g[0],y=g[1],k=Object(o.g)().user,C=Object(o.f)();Object(t.useEffect)((function(){S(),E()}),[]);var S=function(){d.a.get("https://api.github.com/users/"+k).then((function(e){n(e.data)})).catch((function(e){C.push("/404")}))},E=function(){d.a.get("https://api.github.com/users/"+k+"/repos").then((function(e){j(e.data),N(e.data),y(!1)})).catch((function(e){console.log(e)}))};return Object(u.jsx)("div",{children:w?Object(u.jsx)(x.a,{className:"spinner",type:"Rings",color:"#e85c66",height:100,width:100}):Object(u.jsx)("div",{className:"repos-container",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"user-infos-container col-md-3 col-12 me-4",children:[Object(u.jsx)("div",{className:"user-avatar-container",children:Object(u.jsx)("img",{className:"user-avatar img-fluid",src:c.avatar_url,alt:""})}),Object(u.jsxs)("div",{className:"user-infos",children:[Object(u.jsx)("div",{className:"user-name",children:c.name}),Object(u.jsx)("div",{className:"underline-decoration my-2"}),Object(u.jsx)("div",{className:"user-login",children:c.login}),Object(u.jsx)("div",{className:"user-bio",children:c.bio}),Object(u.jsxs)("div",{className:"user-followers-container",children:[Object(u.jsxs)("div",{className:"user-followers",children:[Object(u.jsx)(b.a,{className:"icon-followers me-3",icon:m.g,color:"#000000"}),Object(u.jsxs)("span",{className:"fw-bold me-1",children:[" ",c.followers]}),"followers"]}),Object(u.jsxs)("div",{className:"user-following",children:[Object(u.jsx)(b.a,{className:"icon-followers me-3",icon:m.g,color:"#000000"}),Object(u.jsx)("span",{className:"fw-bold me-1",children:c.following}),"following"]}),Object(u.jsxs)("div",{className:"user-stars",children:[Object(u.jsx)(b.a,{className:"icon-followers me-3",icon:m.f,color:"#000000"}),Object(u.jsx)("span",{className:"fw-bold me-1",children:c.following})]})]}),Object(u.jsxs)("div",{className:"users-links-container",children:[c.email&&Object(u.jsxs)("div",{className:"user-email",children:[Object(u.jsx)(b.a,{className:"me-3",icon:m.b,color:"#000000"}),c.email]}),c.blog&&Object(u.jsxs)("div",{className:"user-website",children:[Object(u.jsx)(b.a,{className:"me-3",icon:m.c,color:"#000000"}),Object(u.jsx)("a",{href:c.blog,children:c.blog})]})]})]})]}),Object(u.jsxs)("div",{className:"user-repos-container col-md-9 col-12",children:[Object(u.jsx)("div",{className:"user-repos-header",children:Object(u.jsxs)("div",{className:"text-container",children:[Object(u.jsx)("div",{className:"text",children:"Repositories"}),Object(u.jsx)("div",{className:"underline-decoration"})]})}),Object(u.jsx)("div",{className:"search-input-container mt-3",children:Object(u.jsx)("input",{className:"search-input",onChange:function(e){return function(e){var s=e.target.value.toLowerCase();if(""===s)N(r);else{var c=r.filter((function(e){return e.name.toLowerCase().includes(s)}));N(c)}}(e)},type:"text",placeholder:"Find a repository..."})}),Object(u.jsx)("div",{className:"repositories-container",children:f.length?f.map((function(e){return Object(u.jsx)(h,{repo:e},e.id)})):Object(u.jsx)("div",{className:"no-repos",children:"No repositories found."})})]})]})})})}c(85);var f=c(34);function N(){var e=Object(t.useState)(""),s=Object(l.a)(e,2),c=s[0],n=s[1],a=Object(o.f)();Object(t.useEffect)((function(){document.getElementsByClassName("home-input")[0].addEventListener("keyup",(function(e){13===e.keyCode&&document.getElementsByClassName("btn-search")[0].click()}))}),[]);return Object(u.jsxs)("div",{className:"home-container",children:[Object(u.jsx)("div",{className:"stars"}),Object(u.jsx)("div",{className:"stars-second"}),Object(u.jsx)("div",{className:"stars-third"}),Object(u.jsx)("div",{className:"github-icon-container",children:Object(u.jsx)(b.a,{className:"github-icon",icon:f.a,color:"white",size:"10x"})}),Object(u.jsxs)("div",{className:"home-title-container",children:[Object(u.jsx)("span",{children:"Enter your GitHub name to get all the repositories"}),Object(u.jsxs)("div",{className:"home-input-container",children:[Object(u.jsx)("input",{className:"home-input",type:"text",placeholder:"Ex: YassineGabsi",onChange:function(e){return n(e.target.value)}}),Object(u.jsx)("div",{className:"search-icon-container",children:Object(u.jsx)(b.a,{className:"search-icon",icon:m.e,color:"#192330"})})]}),Object(u.jsx)("button",{className:"btn-custom btn-search",onClick:function(){""!==c&&a.push("/repositories/"+c)},children:"Start searching !"})]})]})}c(86);function v(){var e=Object(o.f)();return Object(u.jsxs)("div",{className:"not-found-container d-flex justify-content-center align-items-center",children:[Object(u.jsx)("div",{className:"not-found-label text-center",children:"Oops! Sorry this user doesn't exist!"}),Object(u.jsx)("button",{className:"btn-custom",onClick:function(){e.push("/")},children:"Search again !"})]})}var g=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(r.a,{children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/repositories/:user",component:p}),Object(u.jsx)(o.a,{exact:!0,path:"/404",component:v}),Object(u.jsx)(o.a,{exact:!0,path:"/",component:N})]})})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,90)).then((function(s){var c=s.getCLS,t=s.getFID,n=s.getFCP,a=s.getLCP,i=s.getTTFB;c(e),t(e),n(e),a(e),i(e)}))};c(87),c(88);i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),w()}},[[89,1,2]]]);
//# sourceMappingURL=main.0dae8cc9.chunk.js.map