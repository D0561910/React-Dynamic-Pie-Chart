(this["webpackJsonpreact-dynamic-pie-chart"]=this["webpackJsonpreact-dynamic-pie-chart"]||[]).push([[0],[,,,,,,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){},,function(e,t,r){},function(e,t,r){"use strict";r.r(t);var s=r(1),n=r.n(s),a=r(3),c=r.n(a),l=(r(9),r(10),r(4)),i=(r(11),r(0)),o=function(e){var t=Object.keys(e.slices).map((function(t,r){return Object(i.jsx)("g",{transform:e.slices[t].rotate,children:Object(i.jsx)("g",{mask:"url(#wedge-mask)",children:Object(i.jsx)("circle",{className:"Slice",cx:"220",cy:"220",r:"200",fill:e.slices[t].fill,style:{transform:"scale("+e.slices[t].transform+")"}})})},t)}));return Object(i.jsx)(i.Fragment,{children:t})},j=(r(13),function(e){var t=e.slices,r=e.selectScore,s=Object.keys(t).map((function(e,s){return Object(i.jsxs)("li",{children:[Object(i.jsx)("p",{children:t[e].question}),Object(i.jsxs)("div",{className:"Answer",children:[Object(i.jsx)("input",{onChange:r(e),type:"range",min:"1",max:"10",value:"1"===t[e].transform?"10":t[e].transform.replace("0.",""),className:"rangeInput",style:{background:t[e].fill}}),Object(i.jsxs)("span",{className:"Score",style:{backgroundColor:t[e].fill},children:[Object(i.jsx)("div",{className:"leftArrow",style:{borderRight:"5px solid "+t[e].fill}}),"1"===t[e].transform?"10":t[e].transform.replace("0.","")]})]})]},s)}));return Object(i.jsx)(i.Fragment,{children:s})}),f=function(){var e=Object(s.useState)({slices:{1:{question:"Health",rotate:"rotate(0.0000, 220, 220)",fill:"#FF5C00",transform:"1"},2:{question:"Love life",rotate:"rotate(45.0000, 220, 220)",fill:"#9245FF",transform:"1"},3:{question:"Career",rotate:"rotate(90.0000, 220, 220)",fill:"#FF234B",transform:"1"},4:{question:"Personal growth",rotate:"rotate(135.0000, 220, 220)",fill:"#357AFF",transform:"1"},5:{question:"Money freedom",rotate:"rotate(180.0000, 220, 220)",fill:"#E5AC00",transform:"1"},6:{question:"Friends and family",rotate:"rotate(225.0000, 220, 220)",fill:"#00AB3A",transform:"1"},7:{question:"Fun and recreation",rotate:"rotate(270.0000, 220, 220)",fill:"#00A9B5",transform:"1"},8:{question:"Physical environment",rotate:"rotate(315.0000, 220, 220)",fill:"#E5AC00",transform:"1"}}}),t=Object(l.a)(e,2),r=t[0],n=t[1];return Object(i.jsxs)("div",{className:"Content",children:[Object(i.jsx)("div",{className:"QuestionsBlock",children:Object(i.jsx)("ul",{children:Object(i.jsx)(j,{slices:r.slices,selectScore:function(e){return function(t){var s="10"===t.target.value?"1":"0."+t.target.value,a=Object.assign({},r);a.slices[e].transform=s,n(a)}}})})}),Object(i.jsx)("div",{className:"ChartBlock",children:Object(i.jsx)("div",{className:"ChartPie",style:{width:"450px"},children:Object(i.jsxs)("svg",{className:"ChartPieChunk",width:"440px",height:"440px",viewBox:"0 0 440 440",xmlns:"http://www.w3.org/2000/svg",children:[Object(i.jsx)("defs",{children:Object(i.jsxs)("g",{id:"overlay",children:[Object(i.jsx)("rect",{x:"219",y:"20",height:"200",width:"2",fill:"#FFF"}),Object(i.jsx)("g",{transform:"translate(210, 10)",children:Object(i.jsx)("path",{fill:"#000"})})]})}),Object(i.jsx)("mask",{id:"wedge-mask",fill:"white",children:Object(i.jsx)("path",{transform:"translate(20, 20)",d:"M93 7.241a200.006 200.006 0 01173.551-.865L200.004 200 112.33 20.241z",fillRule:"nonzero"})}),Object(i.jsx)("circle",{cx:"220",cy:"220",r:"200",fill:"#EFEFEF",stroke:"#E3E3E3",strokeWidth:"1"}),Object(i.jsx)(o,{slices:r.slices}),Object(i.jsx)("use",{xlinkHref:"#overlay",transform:"rotate(19, 220, 220)"}),Object(i.jsx)("use",{xlinkHref:"#overlay",transform:"rotate(63.7143, 220, 220)"}),Object(i.jsx)("use",{xlinkHref:"#overlay",transform:"rotate(108.7143, 220, 220)"}),Object(i.jsx)("use",{xlinkHref:"#overlay",transform:"rotate(153.7143, 220, 220)"}),Object(i.jsx)("use",{xlinkHref:"#overlay",transform:"rotate(198.7143, 220, 220)"}),Object(i.jsx)("use",{xlinkHref:"#overlay",transform:"rotate(243.7143, 220, 220)"}),Object(i.jsx)("use",{xlinkHref:"#overlay",transform:"rotate(288.7143, 220, 220)"}),Object(i.jsx)("use",{xlinkHref:"#overlay",transform:"rotate(333.7143, 220, 220)"})]})})})]})};var u=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("div",{className:"Header",children:"Charles Dynamic Pie Chart"}),Object(i.jsx)(f,{})]})},x=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,15)).then((function(t){var r=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,c=t.getTTFB;r(e),s(e),n(e),a(e),c(e)}))};c.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(u,{})}),document.getElementById("root")),x()}],[[14,1,2]]]);
//# sourceMappingURL=main.8ffff699.chunk.js.map