(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[549],{9062:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r=n(3366),i=n(7462),o=n(7294),a=(n(5697),n(6010)),s=n(7463),c=n(917),d=n(8216),l=n(6122),u=n(9602),m=n(1420);function h(e){return(0,m.Z)("MuiCircularProgress",e)}(0,n(1271).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var f=n(5893);const v=["className","color","disableShrink","size","style","thickness","value","variant"];let p,C,g,S,b=e=>e;const y=44,j=(0,c.F4)(p||(p=b`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),k=(0,c.F4)(C||(C=b`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),P=(0,u.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`color${(0,d.Z)(n.color)}`]]}})((({ownerState:e,theme:t})=>(0,i.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:t.palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,c.iv)(g||(g=b`
      animation: ${0} 1.4s linear infinite;
    `),j))),x=(0,u.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),Z=(0,u.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.circle,t[`circle${(0,d.Z)(n.variant)}`],n.disableShrink&&t.circleDisableShrink]}})((({ownerState:e,theme:t})=>(0,i.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,c.iv)(S||(S=b`
      animation: ${0} 1.4s ease-in-out infinite;
    `),k)));var w=o.forwardRef((function(e,t){const n=(0,l.Z)({props:e,name:"MuiCircularProgress"}),{className:o,color:c="primary",disableShrink:u=!1,size:m=40,style:p,thickness:C=3.6,value:g=0,variant:S="indeterminate"}=n,b=(0,r.Z)(n,v),j=(0,i.Z)({},n,{color:c,disableShrink:u,size:m,thickness:C,value:g,variant:S}),k=(e=>{const{classes:t,variant:n,color:r,disableShrink:i}=e,o={root:["root",n,`color${(0,d.Z)(r)}`],svg:["svg"],circle:["circle",`circle${(0,d.Z)(n)}`,i&&"circleDisableShrink"]};return(0,s.Z)(o,h,t)})(j),w={},D={},O={};if("determinate"===S){const e=2*Math.PI*((y-C)/2);w.strokeDasharray=e.toFixed(3),O["aria-valuenow"]=Math.round(g),w.strokeDashoffset=`${((100-g)/100*e).toFixed(3)}px`,D.transform="rotate(-90deg)"}return(0,f.jsx)(P,(0,i.Z)({className:(0,a.Z)(k.root,o),style:(0,i.Z)({width:m,height:m},D,p),ownerState:j,ref:t,role:"progressbar"},O,b,{children:(0,f.jsx)(x,{className:k.svg,ownerState:j,viewBox:"22 22 44 44",children:(0,f.jsx)(Z,{className:k.circle,style:w,ownerState:j,cx:y,cy:y,r:(y-C)/2,fill:"none",strokeWidth:C})})}))}))},6165:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(7294),i=n(1002),o=n(6186),a=n(7512),s=n.n(a),c=n(5893),d=function(e){return(0,c.jsx)("div",{className:s().sidebar,children:e.children})},l=n(9035),u=n.n(l),m=function(e){var t=(0,r.useState)(!1),n=t[0],a=t[1],s=(0,r.useState)(null),d=s[0],l=s[1],m=function(){a(!1)};return(0,r.useEffect)((function(){e.alert?(l(e.alert),a(!0)):m()}),[e.alert]),(0,c.jsxs)("div",{className:u().page,children:[(0,c.jsxs)("div",{className:u().contentContainer,children:[(0,c.jsx)("div",{className:u().mainContent,children:e.children}),e.sidebar]}),(0,c.jsx)(i.Z,{open:n,onClose:m,autoHideDuration:e.autoHideAlertMilliSeconds,children:(0,c.jsx)(o.Z,{onClose:m,severity:null===d||void 0===d?void 0:d.severity,children:null===d||void 0===d?void 0:d.message})})]})};m.defaultProps={sidebar:(0,c.jsx)(d,{}),alert:null};var h=m},7392:function(e,t,n){"use strict";n.d(t,{QP:function(){return i},Ms:function(){return o},Dq:function(){return a},Qh:function(){return s},zF:function(){return c}});var r="http://localhost:8080",i=function(e,t){return fetch("/api/v1/poll",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json","X-USER-ID":e},body:JSON.stringify(t)}).then((function(e){return e.ok?e:e.json().then((function(e){return Promise.reject({data:e.data,messages:e.messages})}))})).then((function(e){return e.json()}))},o=function(e,t,n){return fetch("".concat(r,"/ranked-choice-vote/v1/poll/").concat(t),{method:"PATCH",mode:"cors",headers:{"Content-Type":"application/json","X-USER-ID":e},body:JSON.stringify(n)}).then((function(e){return e.ok?e:e.json().then((function(e){return Promise.reject({data:null,messages:[]})}))})).then((function(e){return e.json()}))},a=function(e,t){return fetch("/api/v1/poll/".concat(t),{method:"GET",mode:"cors",headers:{"Content-Type":"application/json","X-USER-ID":e}}).then((function(e){return e.ok?e:e.json().then((function(e){return Promise.reject({data:e.data,messages:e.messages})}))})).then((function(e){return e.json()}))},s=function(e,t,n){return fetch("/api/v1/poll/".concat(t,"/vote"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json","X-USER-ID":e},body:JSON.stringify(n)}).then((function(e){return e.ok?e:e.json().then((function(e){return Promise.reject({data:e.data,messages:e.messages})}))})).then((function(e){return e.json()}))},c=function(e,t){return fetch("".concat(r,"/ranked-choice-vote/v1/poll/").concat(t,"/results"),{method:"GET",mode:"cors",headers:{"Content-Type":"application/json","X-USER-ID":e}}).then((function(e){console.log(e);return Promise.resolve({messages:[],data:{pollId:"test-do-not-deleto",pollName:"This is a test poll",totalEntries:13,totalSteps:3,maxNumRankedChoiceCount:2,winner:"spoodermann",steps:[{stepId:0,candidateList:[{name:"spoodermann",eliminated:!1,votes:[{firstChoiceCandidate:"spoodermann",voteCount:3}]},{name:"batman",eliminated:!1,votes:[{firstChoiceCandidate:"batman",voteCount:4}]},{name:"peach",eliminated:!1,votes:[{firstChoiceCandidate:"peach",voteCount:3}]},{name:"mario",eliminated:!1,votes:[{firstChoiceCandidate:"mario",voteCount:2}]},{name:"luigi",eliminated:!1,votes:[{firstChoiceCandidate:"luigi",voteCount:1}]}]},{stepId:1,candidateList:[{name:"spoodermann",eliminated:!1,votes:[{firstChoiceCandidate:"spoodermann",voteCount:3},{firstChoiceCandidate:"luigi",voteCount:1}]},{name:"batman",eliminated:!1,votes:[{firstChoiceCandidate:"batman",voteCount:4}]},{name:"peach",eliminated:!1,votes:[{firstChoiceCandidate:"peach",voteCount:3}]},{name:"mario",eliminated:!1,votes:[{firstChoiceCandidate:"mario",voteCount:2}]},{name:"luigi",eliminated:!0,votes:[{firstChoiceCandidate:"luigi",voteCount:1}]}]},{stepId:2,candidateList:[{name:"spoodermann",eliminated:!1,votes:[{firstChoiceCandidate:"spoodermann",voteCount:3},{firstChoiceCandidate:"luigi",voteCount:1},{firstChoiceCandidate:"mario",voteCount:2}]},{name:"batman",eliminated:!1,votes:[{firstChoiceCandidate:"batman",voteCount:4}]},{name:"peach",eliminated:!1,votes:[{firstChoiceCandidate:"peach",voteCount:3}]},{name:"mario",eliminated:!0,votes:[{firstChoiceCandidate:"mario",voteCount:2}]},{name:"luigi",eliminated:!0,votes:[{firstChoiceCandidate:"luigi",voteCount:1}]}]}],yourEntry:{choices:[{choicePosition:0,candidate:{name:"mario"}},{choicePosition:1,candidate:{name:"spoodermann"}}]}}})}))}},2175:function(e,t,n){"use strict";n.d(t,{i:function(){return u}});var r=n(2809),i=n(7294),o=n(318),a=n(6645),s=n(4586);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={data:null,messages:[],isLoading:!1,isSuccess:!1,isInitial:!0};function u(e){var t=(0,i.useState)(l),n=t[0],r=t[1],c=function(){var e=(0,a.Z)(["X-USER-ID"]),t=(0,o.Z)(e,3),n=t[0],r=t[1];if(t[2],!n["X-USER-ID"]){var i=(0,s.Z)();return r("X-USER-ID",i,{path:"/"}),i}return n["X-USER-ID"]}();return[n,function(){r(d(d({},l),{},{isLoading:!0,isInitial:!1}));for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return e.apply(void 0,[String(c)].concat(n)).then((function(e){var t={data:e.data,messages:e.messages,isLoading:!1,isSuccess:!0,isInitial:!1};return r(t),t})).catch((function(e){var t={data:e.data,messages:e.messages,isLoading:!1,isSuccess:!1,isInitial:!1};return r(t),Promise.reject(t)}))}]}},9035:function(e){e.exports={page:"Page_page__1hHHt",contentContainer:"Page_contentContainer__12rAS",mainContent:"Page_mainContent__GcSbW"}},7512:function(e){e.exports={sidebar:"Sidebar_sidebar__1wPFG"}}}]);