(this["webpackJsonpuniquelab-monitor-frontend"]=this["webpackJsonpuniquelab-monitor-frontend"]||[]).push([[0],{51:function(e,t,n){},52:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(14),c=n.n(s),i=(n(51),n(32)),o=n(33),u=n(43),l=n(42),j=(n(52),n(53)),b=0,d=1,v=2;n(55);var h=n(81),O=n(82),x=n(83),f=n(88),m=n(85),g=n(86),p=n(87),S=n(25),y=n(84),N=n(40),M=n.n(N),k=n(41),w=n.n(k),D=n(34),F=n.n(D),I=n(28),L=n.n(I),J=n(4);function T(e){return e.serverStatus===b?Object(J.jsx)(F.a,{style:{color:M.a[500]}}):e.serverStatus===d?Object(J.jsx)(L.a,{color:"disabled"}):Object(J.jsx)(L.a,{style:{color:w.a[500]}})}function U(e){var t="online"===e.server.status?b:d;return t===b&&Math.abs(e.server.lastUpdate-(new Date).getTime()/1e3)>75&&(t=v),Object(J.jsxs)(h.a,{button:!0,children:[Object(J.jsx)(O.a,{children:Object(J.jsx)(T,{serverStatus:t})}),Object(J.jsx)(x.a,{primary:e.server.host,className:"host-name"}),Object(J.jsx)(f.a,{label:new Date(1e3*e.server.lastUpdate).toLocaleString(),variant:"outlined"})]})}function q(e){var t=Object(J.jsxs)(h.a,{button:!0,children:[Object(J.jsx)(O.a,{children:Object(J.jsx)(y.a,{children:Object(J.jsx)(T,{})})}),Object(J.jsx)(y.a,{width:"100%"})]}),n=[];if(e.loading){var r=Number(localStorage.getItem("serverNum"));r||(r=3);for(var a=0;a<r;a++)n.push(t)}else localStorage.setItem("serverNum",e.servers.length);return e.loading?Object(J.jsx)(m.a,{children:n}):Object(J.jsx)(m.a,{children:Object(J.jsx)(g.a,{children:e.servers.map((function(e){return Object(J.jsx)(U,{server:e})}))})})}var C=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={servers:[],loading:!0},j.init({appId:"WLW0NUvqDRXsa9LTTB1XnRJm-MdYXbMMI",appKey:"FkUto9kGPPVc1oDsEVJ2NzA2"}),r}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;new j.Query("Server").find().then((function(e){var t=[];return e.forEach((function(e){return t.push(e.toFullJSON())})),t})).then((function(t){e.setState({servers:t,loading:!1})}))}},{key:"render",value:function(){return Object(J.jsx)("div",{className:"App",children:Object(J.jsxs)(p.a,{maxWidth:"sm",children:[Object(J.jsx)(S.a,{variant:"h1",style:{margin:"0.2em"},children:"UniqueLab Monitor"}),Object(J.jsx)(q,{servers:this.state.servers,loading:this.state.loading})]})})}}]),n}(a.a.Component),P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,89)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};c.a.render(Object(J.jsx)(a.a.StrictMode,{children:Object(J.jsx)(C,{})}),document.getElementById("root")),P()}},[[63,1,2]]]);
//# sourceMappingURL=main.98480946.chunk.js.map