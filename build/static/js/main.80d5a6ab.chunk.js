(this["webpackJsonpreact-coin-tracker"]=this["webpackJsonpreact-coin-tracker"]||[]).push([[0],{75:function(n,e,t){"use strict";t.r(e);var c=t(0),r=t.n(c),i=t(22),o=t.n(i),a=t(16),s=t(15),l=t(9),d=t(7),b=t(21),j=t(8),h=t(30),u="https://api.coinpaprika.com/v1";function p(){return fetch("".concat(u,"/coins")).then((function(n){return n.json()}))}var x=t(46),f=t.n(x),O=Object(s.b)({key:"isDark",default:!0}),g=t(1);var m=function(n){var e,t=n.coinId,c=Object(s.c)(O),r=Object(a.useQuery)(["ohlcv",t],(function(){return function(n){var e=Math.floor(Date.now()/1e3),t=e-1209600;return console.log(t),console.log(e),fetch("".concat(u,"/coins/").concat(n,"/ohlcv/historical?start=").concat(t,"&end=").concat(e)).then((function(n){return n.json()}))}(t)}),{refetchInterval:1e4}),i=r.isLoading,o=r.data;return Object(g.jsx)("div",{children:i?"Loading chart...":Object(g.jsx)(f.a,{type:"line",series:[{name:"Price",data:null!==(e=null===o||void 0===o?void 0:o.map((function(n){return n.close})))&&void 0!==e?e:[]}],options:{theme:{mode:c?"dark":"light"},chart:{height:300,width:500,toolbar:{show:!1},background:"transparent"},grid:{show:!1},stroke:{curve:"smooth",width:4},yaxis:{show:!1},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1},type:"datetime",categories:null===o||void 0===o?void 0:o.map((function(n){return n.time_close}))},fill:{type:"gradient",gradient:{gradientToColors:["#0be881"],stops:[0,100]}},colors:["#0fbcf9"],tooltip:{y:{formatter:function(n){return"$".concat(n.toFixed(2))}}}}})})};var v,y,k,w,C,I,L,q,S,T=function(){return Object(g.jsx)("h1",{children:"Price"})},z=d.c.h1(v||(v=Object(l.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),P=d.c.span(y||(y=Object(l.a)(["\n  text-align: center;\n  display: block;\n"]))),Q=d.c.div(k||(k=Object(l.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),M=d.c.header(w||(w=Object(l.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),B=d.c.div(C||(C=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 10px 20px;\n  border-radius: 10px;\n"]))),D=d.c.div(I||(I=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 33%;\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),F=d.c.p(L||(L=Object(l.a)(["\n  margin: 20px 0px;\n"]))),A=d.c.div(q||(q=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 25px 0px;\n  gap: 10px;\n"]))),$=d.c.span(S||(S=Object(l.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  color: ",";\n  a {\n    padding: 7px 0px;\n    display: block;\n  }\n"])),(function(n){return n.isActive?n.theme.accentColor:n.theme.textColor}));var _,H,J,R,E,U,G,K,N=function(){var n=Object(j.g)().coinId,e=Object(j.f)().state,t=Object(j.h)("/:coinId/price"),c=Object(j.h)("/:coinId/chart"),r=Object(a.useQuery)(["info",n],(function(){return function(n){return fetch("".concat(u,"/coins/").concat(n)).then((function(n){return n.json()}))}(n)})),i=r.isLoading,o=r.data,s=Object(a.useQuery)(["tickers",n],(function(){return function(n){return fetch("".concat(u,"/tickers/").concat(n)).then((function(n){return n.json()}))}(n)}),{refetchInterval:5e3}),l=s.isLoading,d=s.data,p=i||l;return Object(g.jsxs)(Q,{children:[Object(g.jsx)(h.a,{children:Object(g.jsx)("title",{children:null!==e&&void 0!==e&&e.name?e.name:p?"Loading...":null===o||void 0===o?void 0:o.name})}),Object(g.jsx)(M,{children:Object(g.jsx)(z,{children:null!==e&&void 0!==e&&e.name?e.name:p?"Loading...":null===o||void 0===o?void 0:o.name})}),p?Object(g.jsx)(P,{children:"Loading..."}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(B,{children:[Object(g.jsxs)(D,{children:[Object(g.jsx)("span",{children:"Rank:"}),Object(g.jsx)("span",{children:null===o||void 0===o?void 0:o.rank})]}),Object(g.jsxs)(D,{children:[Object(g.jsx)("span",{children:"Symbol:"}),Object(g.jsxs)("span",{children:["$",null===o||void 0===o?void 0:o.symbol]})]}),Object(g.jsxs)(D,{children:[Object(g.jsx)("span",{children:"Price:"}),Object(g.jsxs)("span",{children:["$",null===d||void 0===d?void 0:d.quotes.USD.price.toFixed(3)]})]})]}),Object(g.jsx)(F,{children:null===o||void 0===o?void 0:o.description}),Object(g.jsxs)(B,{children:[Object(g.jsxs)(D,{children:[Object(g.jsx)("span",{children:"Total Suply:"}),Object(g.jsx)("span",{children:null===d||void 0===d?void 0:d.total_supply})]}),Object(g.jsxs)(D,{children:[Object(g.jsx)("span",{children:"Max Supply:"}),Object(g.jsx)("span",{children:null===d||void 0===d?void 0:d.max_supply})]})]}),Object(g.jsxs)(A,{children:[Object(g.jsx)($,{isActive:null!==c,children:Object(g.jsx)(b.b,{to:"/".concat(n,"/chart"),children:"Chart"})}),Object(g.jsx)($,{isActive:null!==t,children:Object(g.jsx)(b.b,{to:"/".concat(n,"/price"),children:"Price"})})]}),Object(g.jsxs)(j.c,{children:[Object(g.jsx)(j.a,{path:"/:coinId/price",children:Object(g.jsx)(T,{})}),Object(g.jsx)(j.a,{path:"/:coinId/chart",children:Object(g.jsx)(m,{coinId:n})})]})]})]})},V=d.c.div(_||(_=Object(l.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),W=d.c.header(H||(H=Object(l.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),X=d.c.ul(J||(J=Object(l.a)([""]))),Y=d.c.li(R||(R=Object(l.a)(["\n  background-color: ",";\n  color: ",";\n  border-radius: 15px;\n  margin-bottom: 10px;\n  border: 1px solid white;\n  a {\n    display: flex;\n    align-items: center;\n    padding: 20px;\n    transition: color 0.2s ease-in;\n  }\n  &:hover {\n    a {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.cardBgColor}),(function(n){return n.theme.textColor}),(function(n){return n.theme.accentColor})),Z=d.c.h1(E||(E=Object(l.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),nn=d.c.span(U||(U=Object(l.a)(["\n  text-align: center;\n  display: block;\n"]))),en=d.c.img(G||(G=Object(l.a)(["\n  width: 35px;\n  height: 35px;\n  margin-right: 10px;\n"]))),tn=d.c.button(K||(K=Object(l.a)(["\n  font-size: 1em;\n  margin-top: 2em;\n  margin-left: 70%;\n  color: white;\n  background-color: #9c88ff;\n  padding: 0.25em 1em;\n  border: 2px solid #9c88ff;\n  border-radius: 3px;\n"])));var cn=function(){var n=Object(s.d)(O),e=Object(a.useQuery)("allCoins",p),t=e.isLoading,c=e.data;return Object(g.jsxs)(V,{children:[Object(g.jsx)(h.a,{children:Object(g.jsx)("title",{children:"CoinTracker"})}),Object(g.jsx)(tn,{onClick:function(){return n((function(n){return!n}))},children:"Toggle Mode"}),Object(g.jsx)(W,{children:Object(g.jsx)(Z,{children:"CoinTracker"})}),t?Object(g.jsx)(nn,{children:"Loading..."}):Object(g.jsx)(X,{children:null===c||void 0===c?void 0:c.slice(0,100).map((function(n){return Object(g.jsx)(Y,{children:Object(g.jsxs)(b.b,{to:{pathname:"/".concat(n.id),state:{name:n.name}},children:[Object(g.jsx)(en,{src:"https://cryptocurrencyliveprices.com/img/".concat(n.id,".png")}),n.name," \u2192"]})},n.id)}))})]})};var rn,on=function(){return Object(g.jsx)(b.a,{basename:"/coin-tracker",children:Object(g.jsxs)(j.c,{children:[Object(g.jsx)(j.a,{path:"/:coinId",children:Object(g.jsx)(N,{})}),Object(g.jsx)(j.a,{path:"/",children:Object(g.jsx)(cn,{})})]})})},an=t(51),sn={bgColor:"#2f3640",textColor:"white",accentColor:"#9c88ff",cardBgColor:"transparent"},ln={bgColor:"whitesmoke",textColor:"black",accentColor:"#9c88ff",cardBgColor:"white"},dn=Object(d.b)(rn||(rn=Object(l.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:",";\n  line-height: 1.2;\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}));var bn=function(){var n=Object(s.c)(O);return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(d.a,{theme:n?sn:ln,children:[Object(g.jsx)(dn,{}),Object(g.jsx)(on,{}),Object(g.jsx)(an.ReactQueryDevtools,{initialIsOpen:!0})]})})},jn=new a.QueryClient;o.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(s.a,{children:Object(g.jsx)(a.QueryClientProvider,{client:jn,children:Object(g.jsx)(bn,{})})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.80d5a6ab.chunk.js.map