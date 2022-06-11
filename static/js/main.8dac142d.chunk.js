(this["webpackJsonpreact-coin-tracker"]=this["webpackJsonpreact-coin-tracker"]||[]).push([[0],{75:function(n,e,t){"use strict";t.r(e);var c=t(0),i=t.n(c),r=t(22),o=t.n(r),a=t(15),s=t(18),l=t(7),d=t(6),b=t(17),j=t(9),h=t(30),p="https://api.coinpaprika.com/v1";function u(){return fetch("".concat(p,"/coins")).then((function(n){return n.json()}))}var x=t(46),f=t.n(x),O=Object(s.b)({key:"isDark",default:!0}),g=t(1);var m,v,y=function(n){var e,t=n.coinId,c=Object(s.c)(O),i=Object(a.useQuery)(["ohlcv",t],(function(){return function(n){var e=Math.floor(Date.now()/1e3),t=e-79200;return console.log(t),console.log(e),fetch("".concat(p,"/coins/").concat(n,"/ohlcv/historical?start=").concat(t,"&end=").concat(e)).then((function(n){return n.json()}))}(t)}),{refetchInterval:1e4}),r=i.isLoading,o=i.data;return Object(g.jsx)("div",{children:r?"Loading chart...":Object(g.jsx)(f.a,{type:"line",series:[{name:"Price",data:null!==(e=null===o||void 0===o?void 0:o.map((function(n){return n.close})))&&void 0!==e?e:[]}],options:{theme:{mode:c?"dark":"light"},chart:{height:300,width:500,toolbar:{show:!1},background:"transparent"},grid:{show:!1},stroke:{curve:"smooth",width:4},yaxis:{show:!1},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1},type:"datetime",categories:null===o||void 0===o?void 0:o.map((function(n){return n.time_close}))},fill:{type:"gradient",gradient:{gradientToColors:["#0be881"],stops:[0,100]}},colors:["#0fbcf9"],tooltip:{y:{formatter:function(n){return"$".concat(n.toFixed(2))}}}}})})},k=d.c.div(m||(m=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  height: 200px;\n  justify-content: space-between;\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.5);\n"]))),w=d.c.li(v||(v=Object(l.a)(["\n  padding: 5px;\n"])));var C,I,L,q,S,Q,T,z,B,P,F=function(n){return n.coinId,Object(g.jsx)(k,{children:Object(g.jsxs)("ul",{children:[Object(g.jsx)(w,{children:"1"}),Object(g.jsx)(w,{children:"2"}),Object(g.jsx)(w,{children:"3"}),Object(g.jsx)(w,{children:"4"})]})})},M=d.c.h1(C||(C=Object(l.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),N=d.c.span(I||(I=Object(l.a)(["\n  text-align: center;\n  display: block;\n"]))),D=d.c.div(L||(L=Object(l.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),A=d.c.header(q||(q=Object(l.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),$=d.c.div(S||(S=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 10px 20px;\n  border-radius: 10px;\n"]))),_=Object(d.c)($)(Q||(Q=Object(l.a)(["\n  margin-top: 43px;\n  width: 100px;\n  position: absolute;\n  justify-content: center;\n  align-items: center;\n"]))),H=d.c.div(T||(T=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 33%;\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),J=d.c.p(z||(z=Object(l.a)(["\n  margin: 20px 0px;\n"]))),R=d.c.div(B||(B=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 25px 0px;\n  gap: 10px;\n"]))),E=d.c.span(P||(P=Object(l.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  color: ",";\n  a {\n    padding: 7px 0px;\n    display: block;\n  }\n"])),(function(n){return n.isActive?n.theme.accentColor:n.theme.textColor}));var U,X,G,K,V,W,Y,Z=function(){var n=Object(j.g)().coinId,e=Object(j.f)().state,t=Object(j.h)("/:coinId/price"),c=Object(j.h)("/:coinId/chart"),i=Object(a.useQuery)(["info",n],(function(){return function(n){return fetch("".concat(p,"/coins/").concat(n)).then((function(n){return n.json()}))}(n)})),r=i.isLoading,o=i.data,s=Object(a.useQuery)(["tickers",n],(function(){return function(n){return fetch("".concat(p,"/tickers/").concat(n)).then((function(n){return n.json()}))}(n)}),{refetchInterval:5e3}),l=s.isLoading,d=s.data;console.log(d);var u=r||l;return Object(g.jsxs)(D,{children:[Object(g.jsx)(h.a,{children:Object(g.jsx)("title",{children:null!==e&&void 0!==e&&e.name?e.name:u?"Loading...":null===o||void 0===o?void 0:o.name})}),Object(g.jsx)(_,{children:Object(g.jsx)(b.b,{to:"/",children:"Back"})}),Object(g.jsx)(A,{children:Object(g.jsx)(M,{children:null!==e&&void 0!==e&&e.name?e.name:u?"Loading...":null===o||void 0===o?void 0:o.name})}),u?Object(g.jsx)(N,{children:"Loading..."}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)($,{children:[Object(g.jsxs)(H,{children:[Object(g.jsx)("span",{children:"Rank:"}),Object(g.jsx)("span",{children:null===o||void 0===o?void 0:o.rank})]}),Object(g.jsxs)(H,{children:[Object(g.jsx)("span",{children:"Symbol:"}),Object(g.jsxs)("span",{children:["$",null===o||void 0===o?void 0:o.symbol]})]}),Object(g.jsxs)(H,{children:[Object(g.jsx)("span",{children:"Price:"}),Object(g.jsxs)("span",{children:["$",null===d||void 0===d?void 0:d.quotes.USD.price.toFixed(3)]})]})]}),Object(g.jsx)(J,{children:null===o||void 0===o?void 0:o.description}),Object(g.jsxs)($,{children:[Object(g.jsxs)(H,{children:[Object(g.jsx)("span",{children:"Total Suply:"}),Object(g.jsx)("span",{children:null===d||void 0===d?void 0:d.total_supply})]}),Object(g.jsxs)(H,{children:[Object(g.jsx)("span",{children:"Max Supply:"}),Object(g.jsx)("span",{children:null===d||void 0===d?void 0:d.max_supply})]})]}),Object(g.jsxs)(R,{children:[Object(g.jsx)(E,{isActive:null!==c,children:Object(g.jsx)(b.b,{to:"/".concat(n,"/chart"),children:"Chart"})}),Object(g.jsx)(E,{isActive:null!==t,children:Object(g.jsx)(b.b,{to:"/".concat(n,"/price"),children:"Price"})})]}),Object(g.jsxs)(j.c,{children:[Object(g.jsx)(j.a,{path:"/:coinId/price",children:Object(g.jsx)(F,{coinId:n})}),Object(g.jsx)(j.a,{path:"/:coinId/chart",children:Object(g.jsx)(y,{coinId:n})})]})]})]})},nn=d.c.div(U||(U=Object(l.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),en=d.c.header(X||(X=Object(l.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),tn=d.c.ul(G||(G=Object(l.a)([""]))),cn=d.c.li(K||(K=Object(l.a)(["\n  background-color: ",";\n  color: ",";\n  border-radius: 15px;\n  margin-bottom: 10px;\n  border: 1px solid white;\n  a {\n    display: flex;\n    align-items: center;\n    padding: 15px;\n    transition: color 0.2s ease-in;\n  }\n  &:hover {\n    a {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.cardBgColor}),(function(n){return n.theme.textColor}),(function(n){return n.theme.accentColor})),rn=d.c.h1(V||(V=Object(l.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),on=d.c.span(W||(W=Object(l.a)(["\n  text-align: center;\n  display: block;\n"]))),an=d.c.img(Y||(Y=Object(l.a)(["\n  width: 35px;\n  height: 35px;\n  margin-right: 10px;\n"])));var sn=function(){var n=Object(a.useQuery)("allCoins",u),e=n.isLoading,t=n.data;return Object(g.jsxs)(nn,{children:[Object(g.jsx)(h.a,{children:Object(g.jsx)("title",{children:"CoinTracker"})}),Object(g.jsx)(en,{children:Object(g.jsx)(rn,{children:"CoinTracker"})}),e?Object(g.jsx)(on,{children:"Loading..."}):Object(g.jsx)(tn,{children:null===t||void 0===t?void 0:t.slice(0,100).map((function(n){return Object(g.jsx)(cn,{children:Object(g.jsxs)(b.b,{to:{pathname:"/".concat(n.id),state:{name:n.name}},children:[Object(g.jsx)(an,{src:"https://cryptocurrencyliveprices.com/img/".concat(n.id,".png")}),n.name," \u2192"]})},n.id)}))})]})};var ln,dn,bn=function(){return Object(g.jsx)(b.a,{basename:"/coin-tracker",children:Object(g.jsxs)(j.c,{children:[Object(g.jsx)(j.a,{path:"/:coinId",children:Object(g.jsx)(Z,{})}),Object(g.jsx)(j.a,{path:"/",children:Object(g.jsx)(sn,{})})]})})},jn=t(51),hn={bgColor:"#2f3640",textColor:"white",accentColor:"#9c88ff",cardBgColor:"transparent"},pn={bgColor:"whitesmoke",textColor:"black",accentColor:"#9c88ff",cardBgColor:"white"},un=Object(d.b)(ln||(ln=Object(l.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:",";\n  line-height: 1.2;\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor})),xn=d.c.div(dn||(dn=Object(l.a)(["\n  display: absolute;\n  justigy-content: center;\n  align-items: center;\n  margin-top: 50px;\n  margin-left: 890px;\n  position: absolute;\n  .checkbox {\n    opacity: 0;\n    position: absolute;\n  }\n\n  .label {\n    width: 50px;\n    height: 26px;\n\n    background-color: transparent;\n    border: solid 1px #9c88ff;\n    display: flex;\n    justify-content: space-between;\n    border-radius: 50px;\n    padding: 5px;\n    align-items: center;\n    position: relative;\n  }\n  .ball {\n    width: 22px;\n    height: 22px;\n    background-color: #9c88ff;\n    position: absolute;\n    left: 1px;\n    top: 1px;\n    cursor: pointer;\n    border-radius: 50%;\n    transition: transform 0.2s linear;\n  }\n  .checkbox:checked + .label .ball {\n    transform: translateX(24px);\n  }\n  .fa-moon {\n    color: #f1c40f;\n  }\n  .fa-sun {\n    color: #f39c12;\n  }\n"])));var fn=function(){var n=Object(s.c)(O),e=Object(s.d)(O);return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(d.a,{theme:n?hn:pn,children:[Object(g.jsx)(un,{}),Object(g.jsxs)(xn,{children:[Object(g.jsx)("input",{onClick:function(){return e((function(n){return!n}))},type:"checkbox",className:"checkbox",id:"checkbox"}),Object(g.jsxs)("label",{htmlFor:"checkbox",className:"label",children:[Object(g.jsx)("i",{className:"fas fa-sun"}),Object(g.jsx)("i",{className:"fas fa-moon"}),Object(g.jsx)("div",{className:"ball"})]})]}),Object(g.jsx)(bn,{}),Object(g.jsx)(jn.ReactQueryDevtools,{initialIsOpen:!0})]})})},On=new a.QueryClient;o.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(s.a,{children:Object(g.jsx)(a.QueryClientProvider,{client:On,children:Object(g.jsx)(fn,{})})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.8dac142d.chunk.js.map