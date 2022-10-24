(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[750],{6540:function(e,t,n){"use strict";var a=n(4836);t.Z=void 0;var s=a(n(4938)),i=n(5893),r=(0,s.default)((0,i.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.Z=r},9885:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/createPoll",function(){return n(4078)}])},6e3:function(e,t,n){"use strict";var a=n(5893),s=n(7294),i=n(9243),r=n(2741),o=n(1973),c=n.n(o),u=function(e){var t=(0,s.useState)(!1),n=t[0],o=t[1],u=(0,s.useState)(null),l=u[0],d=u[1],f=function(){o(!1)};return(0,s.useEffect)((function(){e.alert?(d(e.alert),o(!0)):f()}),[e.alert]),(0,a.jsxs)("div",{className:c().page,children:[(0,a.jsxs)("div",{className:c().contentContainer,children:[(0,a.jsx)("div",{className:c().mainContent,children:e.children}),e.sidebar]}),(0,a.jsx)(i.Z,{open:n,onClose:f,autoHideDuration:e.autoHideAlertMilliSeconds,children:(0,a.jsxs)(r.Z,{onClose:f,severity:null===l||void 0===l?void 0:l.severity,children:[null===l||void 0===l?void 0:l.message,(null===l||void 0===l?void 0:l.errorMessages)&&l.errorMessages.map((function(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("br",{}),e.messageContent]})}))]})})]})};u.defaultProps={alert:null},t.Z=u},532:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var a=n(5893),s=n(7294),i=n(9630),r=n(3676),o=n(9815),c=n(562),u=n(5084),l=n(6761),d=n(6853),f=n.n(d),h=function(e){var t=(0,s.useState)(!0),n=t[0],d=t[1],h=(0,s.useCallback)((function(){var t=document.querySelectorAll("."+e.textFieldClassName+":last-of-type input")[0];t&&t.focus&&t.focus()}),[e.textFieldClassName]),m=function(t){"Enter"===t.key&&(d(!n),e.setCandidateList((0,o.Z)(e.candidateList).concat([{name:""}])))},v=function(t){var n=Number(t.target.name),a=(0,o.Z)(e.candidateList);a[n]={name:t.target.value},e.setCandidateList(a)};return(0,s.useEffect)((function(){h()}),[n,h]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z,{variant:"h4",children:"Candidates"}),e.candidateList.map((function(t,n){return(0,a.jsxs)("div",{style:{display:"flex"},children:[(0,a.jsx)(r.Z,{style:{flexGrow:1},name:String(n),className:e.textFieldClassName,onKeyPress:m,label:"Candidate Name",variant:"filled",value:t.name,onChange:v},n),(0,a.jsx)(c.Z,{"aria-label":"delete",onClick:function(){return function(t){e.candidateList.splice(t,1),e.setCandidateList((0,o.Z)(e.candidateList))}(n)},children:(0,a.jsx)(l.Z,{})},n)]},n)})),(0,a.jsx)(u.Z,{className:f().addCandidateButton,variant:"contained",onClick:function(){d(!n),e.setCandidateList((0,o.Z)(e.candidateList).concat([{name:""}]))},children:"Add Candidate"})]})};h.defaultProps={};var m=h,v=n(7056),p=function(e){var t=Math.max(10,e.candidateList.length);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z,{variant:"h4",children:"Poll Details"}),(0,a.jsx)(r.Z,{className:e.textFieldClassName,label:"Poll Title",id:"poll-title",variant:"filled",value:e.pollName,onChange:function(t){return e.setPollName(t.target.value)}}),(0,a.jsx)(r.Z,{className:e.textFieldClassName,label:"Number of Ranked Choices",id:"ranked-choice-count",select:!0,variant:"filled",value:e.maxNumRankedChoiceCount,onChange:function(t){return e.setMaxNumRankedChoiceCount(Number(t.target.value))},children:Array(t).fill(0).map((function(e,t){return(0,a.jsx)(v.Z,{value:t+1,children:t+1},t+1)}))}),(0,a.jsx)(m,{candidateList:e.candidateList,setCandidateList:e.setCandidateList,textFieldClassName:e.textFieldClassName})]})};p.defaultProps={};var C=p},9542:function(e,t,n){"use strict";n.d(t,{Dq:function(){return i},Gm:function(){return r},Ms:function(){return s},QP:function(){return a},Qh:function(){return o},zF:function(){return c}});var a=function(e,t){return fetch("/api/v1/poll",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json","X-USER-ID":e},body:JSON.stringify(t)}).then((function(e){return e.ok?e:e.json().then((function(e){return Promise.reject({data:e.data,messages:e.messages})}))})).then((function(e){return e.json()}))},s=function(e,t,n){return fetch("/api/v1/poll/".concat(t),{method:"PATCH",mode:"cors",headers:{"Content-Type":"application/json","X-USER-ID":e},body:JSON.stringify(n)}).then((function(e){return e.ok?e:e.json().then((function(e){return Promise.reject({data:e.data,messages:e.messages})}))})).then((function(e){return e.json()}))},i=function(e,t){return fetch("/api/v1/poll/".concat(t),{method:"GET",mode:"cors",headers:{"Content-Type":"application/json","X-USER-ID":e}}).then((function(e){return e.ok?e:e.json().then((function(e){return Promise.reject({data:e.data,messages:e.messages})}))})).then((function(e){return e.json()}))},r=function(e,t){return fetch("/api/v1/poll/".concat(t,"/vote"),{method:"GET",mode:"cors",headers:{"Content-Type":"application/json","X-USER-ID":e}}).then((function(e){return e.ok?e:e.json().then((function(e){return Promise.reject({data:e.data,messages:e.messages})}))})).then((function(e){return e.json()}))},o=function(e,t,n){return fetch("/api/v1/poll/".concat(t,"/vote"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json","X-USER-ID":e},body:JSON.stringify(n)}).then((function(e){return e.ok?e:e.json().then((function(e){return Promise.reject({data:e.data,messages:e.messages})}))})).then((function(e){return e.json()}))},c=function(e,t){return fetch("/api/v1/poll/".concat(t,"/results"),{method:"GET",mode:"cors",headers:{"Content-Type":"application/json","X-USER-ID":e}}).then((function(e){return e.ok?e:e.json().then((function(e){return Promise.reject({data:e.data,messages:e.messages})}))})).then((function(e){return e.json()}))}},393:function(e,t,n){"use strict";n.d(t,{i:function(){return d}});var a=n(1799),s=n(9396),i=n(9815),r=n(7294),o=n(828),c=n(708),u=n(5934),l={data:null,messages:[],isLoading:!1,isSuccess:!1,isInitial:!0};function d(e){var t=(0,r.useState)(l),n=t[0],d=t[1],f=function(){var e=(0,o.Z)((0,c.Z)(["X-USER-ID"]),3),t=e[0],n=e[1];if(e[2],!t["X-USER-ID"]){var a=(0,u.Z)();return n("X-USER-ID",a,{path:"/"}),a}return t["X-USER-ID"]}();return[n,function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return d((0,s.Z)((0,a.Z)({},l),{isLoading:!0,isInitial:!1})),e.apply(void 0,[String(f)].concat((0,i.Z)(n))).then((function(e){var t={data:e.data,messages:e.messages,isLoading:!1,isSuccess:!0,isInitial:!1};return d(t),t})).catch((function(e){var t={data:e.data,messages:e.messages,isLoading:!1,isSuccess:!1,isInitial:!1};return d(t),Promise.reject(t)}))}]}},4078:function(e,t,n){"use strict";n.r(t);var a=n(828),s=n(5893),i=n(7294),r=n(5084),o=n(9630),c=n(6540),u=n(6e3),l=n(4828),d=n.n(l),f=n(9542),h=n(532),m=n(393),v=n(1163),p=n.n(v);t.default=function(){var e=(0,i.useState)(""),t=e[0],n=e[1],l=(0,i.useState)(3),v=l[0],C=l[1],g=(0,i.useState)([{name:""}]),j=g[0],x=g[1],N=(0,a.Z)((0,m.i)(f.QP),2),P=N[0],_=N[1],S=(0,i.useState)(null),Z=S[0],L=S[1];(0,i.useEffect)((function(){P.isInitial||(P.isLoading||P.isSuccess||L({severity:"error",message:"An error has occured while creating the poll",errorMessages:P.messages}),(P.isLoading||P.isSuccess)&&L(null))}),[P.isInitial,P.isLoading,P.isSuccess]);return(0,s.jsxs)(u.Z,{alert:Z,children:[(0,s.jsx)(o.Z,{variant:"h3",children:"Create a New Poll"}),(0,s.jsx)(h.Z,{textFieldClassName:d().candidateTextField,pollName:t,maxNumRankedChoiceCount:v,candidateList:j,setPollName:n,setMaxNumRankedChoiceCount:C,setCandidateList:x}),(0,s.jsx)(r.Z,{className:d().createPollButton,variant:"contained",startIcon:(0,s.jsx)(c.Z,{}),color:"success",onClick:function(){_({pollName:t,maxNumRankedChoiceCount:v,candidateList:j}).then((function(e){var t;p().push("/vote/".concat(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.pollId))})).catch((function(){L({severity:"error",message:"An error has occured while creating the poll"})}))},children:"Create Poll"})]})}},6853:function(e){e.exports={addCandidateButton:"CandidateInputList_addCandidateButton__nYhqX"}},1973:function(e){e.exports={page:"Page_page__WUVFs",contentContainer:"Page_contentContainer__BRpFP",mainContent:"Page_mainContent__Wuje1"}},4828:function(e){e.exports={textField:"createPoll_textField__hz3bv",candidateTextField:"createPoll_candidateTextField__lJ_v0",createPollButton:"createPoll_createPollButton__hGmiL"}}},function(e){e.O(0,[246,419,774,888,179],(function(){return t=9885,e(e.s=t);var t}));var t=e.O();_N_E=t}]);