(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[297],{8017:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vote/[id]",function(){return t(7717)}])},6323:function(e,n,t){"use strict";var r=t(5893),i=t(108),o=t.n(i),a=t(5861);n.Z=function(e){var n=e.children,t={backgroundColor:"rgba(0, 0, 0, 0.12)",color:"rgba(0, 0, 0, 0.38)",border:"1px solid rgba(0, 0, 0, 0.12)",borderRadius:"4px",zIndex:-1,width:e.width};return(0,r.jsx)("div",{className:o().candidateBoxSize+" "+o().centered,style:t,children:(0,r.jsx)(a.Z,{variant:"h5",children:n})})}},4007:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var r=t(5893),i=t(7294),o=t(6798),a=t(1737),s=t(7102),c=t.n(s),d=function(e){return(0,r.jsx)("div",{className:c().sidebar,children:e.children})},l=t(1973),u=t.n(l),f=function(e){var n=(0,i.useState)(!1),t=n[0],s=n[1],c=(0,i.useState)(null),d=c[0],l=c[1],f=function(){s(!1)};return(0,i.useEffect)((function(){e.alert?(l(e.alert),s(!0)):f()}),[e.alert]),(0,r.jsxs)("div",{className:u().page,children:[(0,r.jsxs)("div",{className:u().contentContainer,children:[(0,r.jsx)("div",{className:u().mainContent,children:e.children}),e.sidebar]}),(0,r.jsx)(o.Z,{open:t,onClose:f,autoHideDuration:e.autoHideAlertMilliSeconds,children:(0,r.jsxs)(a.Z,{onClose:f,severity:null===d||void 0===d?void 0:d.severity,children:[null===d||void 0===d?void 0:d.message,(null===d||void 0===d?void 0:d.errorMessages)&&d.errorMessages.map((function(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),e.messageContent]})}))]})})]})};f.defaultProps={sidebar:(0,r.jsx)(d,{}),alert:null};var h=f},9542:function(e,n,t){"use strict";t.d(n,{Dq:function(){return o},Gm:function(){return a},Ms:function(){return i},QP:function(){return r},Qh:function(){return s},zF:function(){return c}});var r=function(e,n){return fetch("/api/v1/poll",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json","X-USER-ID":e},body:JSON.stringify(n)}).then((function(e){return e.ok?e:e.json().then((function(e){return Promise.reject({data:e.data,messages:e.messages})}))})).then((function(e){return e.json()}))},i=function(e,n,t){return fetch("/api/v1/poll/".concat(n),{method:"PATCH",mode:"cors",headers:{"Content-Type":"application/json","X-USER-ID":e},body:JSON.stringify(t)}).then((function(e){return e.ok?e:e.json().then((function(e){return Promise.reject({data:e.data,messages:e.messages})}))})).then((function(e){return e.json()}))},o=function(e,n){return fetch("/api/v1/poll/".concat(n),{method:"GET",mode:"cors",headers:{"Content-Type":"application/json","X-USER-ID":e}}).then((function(e){return e.ok?e:e.json().then((function(e){return Promise.reject({data:e.data,messages:e.messages})}))})).then((function(e){return e.json()}))},a=function(e,n){return fetch("/api/v1/poll/".concat(n,"/vote"),{method:"GET",mode:"cors",headers:{"Content-Type":"application/json","X-USER-ID":e}}).then((function(e){return e.ok?e:e.json().then((function(e){return Promise.reject({data:e.data,messages:e.messages})}))})).then((function(e){return e.json()}))},s=function(e,n,t){return fetch("/api/v1/poll/".concat(n,"/vote"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json","X-USER-ID":e},body:JSON.stringify(t)}).then((function(e){return e.ok?e:e.json().then((function(e){return Promise.reject({data:e.data,messages:e.messages})}))})).then((function(e){return e.json()}))},c=function(e,n){return fetch("/api/v1/poll/".concat(n,"/results"),{method:"GET",mode:"cors",headers:{"Content-Type":"application/json","X-USER-ID":e}}).then((function(e){return e.ok?e:e.json().then((function(e){return Promise.reject({data:e.data,messages:e.messages})}))})).then((function(e){return e.json()}))}},393:function(e,n,t){"use strict";t.d(n,{i:function(){return u}});var r=t(1799),i=t(9396),o=t(9815),a=t(7294),s=t(828),c=t(708),d=t(5934),l={data:null,messages:[],isLoading:!1,isSuccess:!1,isInitial:!0};function u(e){var n=(0,a.useState)(l),t=n[0],u=n[1],f=function(){var e=(0,s.Z)((0,c.Z)(["X-USER-ID"]),3),n=e[0],t=e[1];if(e[2],!n["X-USER-ID"]){var r=(0,d.Z)();return t("X-USER-ID",r,{path:"/"}),r}return n["X-USER-ID"]}();return[t,function(){for(var n=arguments.length,t=new Array(n),a=0;a<n;a++)t[a]=arguments[a];return u((0,i.Z)((0,r.Z)({},l),{isLoading:!0,isInitial:!1})),e.apply(void 0,[String(f)].concat((0,o.Z)(t))).then((function(e){var n={data:e.data,messages:e.messages,isLoading:!1,isSuccess:!0,isInitial:!1};return u(n),n})).catch((function(e){var n={data:e.data,messages:e.messages,isLoading:!1,isSuccess:!1,isInitial:!1};return u(n),Promise.reject(n)}))}]}},7717:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return N}});var r=t(1799),i=t(9396),o=t(828),a=t(5893),s=t(7294),c=t(1163),d=t.n(c),l=t(3321),u=t(4007),f=t(9815),h=t(5861),p=t(5948),v=t(326),m=t(7357),x=t(108),g=t.n(x);var j=function(e){var n=e.candidateName,t={display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",background:"white",zIndex:1,width:e.width};return(0,a.jsx)("div",{style:{height:"calc(56px + 1rem)"},children:(0,a.jsxs)(m.Z,{className:g().candidateBoxSize+" "+g().centered,style:t,sx:{boxShadow:3},children:[(0,a.jsx)(h.Z,{variant:"h5",children:n}),(0,a.jsx)(v.Z,{})]})})},y=t(6323),C=t(9542),b=t(393),Z=t(2027),S=t.n(Z);var w=function(e){var n=e.pollData,t=e.setPageAlert,c=(0,o.Z)((0,b.i)(C.Qh),2),u=(c[0],c[1]),v=(0,s.useState)([]),m=v[0],x=v[1],g=(0,s.useState)([]),Z=g[0],w=g[1];(0,s.useEffect)((function(){n.candidateList&&x(n.candidateList.map((function(e){return e.name})))}),[n.candidateList]);var k={candidatesDropId:{list:m,setList:x},chosenCandidatesDropId:{list:Z,setList:w}},_=function(e,n,t){var r=Array.from(e),i=(0,o.Z)(r.splice(n,1),1)[0];return r.splice(t,0,i),r},I=function(e){var r=k[e].list,i="chosenCandidatesDropId"==e&&r.length>=n.maxNumRankedChoiceCount;return i&&t({severity:"warning",message:"You can only choose a max of ".concat(n.maxNumRankedChoiceCount," candidates!")}),!i},P=function(e,n,t,r){var i=(0,f.Z)(e),a=(0,f.Z)(n),s=(0,o.Z)(i.splice(t,1),1)[0];return a.splice(r,0,s),[i,a]},D="22.5rem";return(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",padding:"5rem"},children:[(0,a.jsx)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around"},children:(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",textAlign:"center"},children:[(0,a.jsx)(h.Z,{variant:"h2",children:n.pollName}),(0,a.jsx)("div",{style:{height:"2rem"}}),(0,a.jsx)(h.Z,{variant:"h5",children:"Drag your selections to the ranked spots on the right."}),(0,a.jsx)("div",{style:{height:"4rem"}})]})}),(0,a.jsx)(p.Z5,{onDragEnd:function(e){var n=e.source,t=e.destination;if(t){var r=n.droppableId,i=t.droppableId;if(r===i){var a=_(k[r].list,n.index,t.index);k[r].setList(a)}else{if(!I(i))return;var s=(0,o.Z)(P(k[r].list,k[i].list,n.index,t.index),2),c=s[0],d=s[1];k[r].setList(c),k[i].setList(d)}}},children:(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"},children:[(0,a.jsx)(p.bK,{droppableId:"candidatesDropId",children:function(e,n){return(0,a.jsxs)("div",(0,i.Z)((0,r.Z)({},e.droppableProps),{style:{minWidth:D},ref:e.innerRef,children:[m.map((function(e,n){return(0,a.jsx)(p._l,{draggableId:e,index:n,children:function(n,t){return(0,a.jsx)("div",(0,i.Z)((0,r.Z)({ref:n.innerRef},n.draggableProps,n.dragHandleProps),{children:(0,a.jsx)(j,{candidateName:e,width:D})}))}},e)})),e.placeholder]}))}}),(0,a.jsx)("div",{style:{width:"2rem"}}),(0,a.jsx)(p.bK,{droppableId:"chosenCandidatesDropId",children:function(e,t){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",(0,i.Z)((0,r.Z)({},e.droppableProps),{style:{minWidth:D},ref:e.innerRef,children:[(0,a.jsx)("div",{style:{position:"absolute",zIndex:-1},children:Array.from(Array(n.maxNumRankedChoiceCount).keys()).map((function(e){return(0,a.jsxs)(y.Z,{width:D,children:["Candidate ",e+1]},e)}))}),Z.map((function(e,n){return(0,a.jsx)(p._l,{draggableId:e,index:n,children:function(n,t){return(0,a.jsx)("div",(0,i.Z)((0,r.Z)({ref:n.innerRef},n.draggableProps,n.dragHandleProps),{children:(0,a.jsx)(j,{candidateName:e,width:D})}))}},e)})),e.placeholder]}))})}})]})}),(0,a.jsx)(l.Z,{variant:"contained",color:"primary",onClick:function(){if(0!=Z.length){var e={choices:Z.map((function(e,n){return{choicePosition:n+1,candidate:{name:e}}}))};u(n.pollId,e).then((function(){t({severity:"success",message:"Your vote was submitted!"}),d().push("/poll/".concat(n.pollId,"/results"))})).catch((function(){t({severity:"error",message:"Failed to submit your vote."})}))}else t({severity:"error",message:"You must choose at least 1 candidate!"})},children:"Submit Your Vote!"}),(0,a.jsx)(l.Z,{className:S().skipVoteButton,variant:"text",color:"primary",onClick:function(){d().push("/poll/".concat(n.pollId,"/results"))},children:"Skip to Results"})]})},k=t(7568),_=t(4051),I=t.n(_);var P=function(){var e=(0,s.useState)(null),n=e[0],t=e[1],r=function(){var e=(0,k.Z)(I().mark((function e(n){return I().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.clipboard){e.next=3;break}return console.warn("Clipboard not supported"),e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,navigator.clipboard.writeText(n);case 6:return t(n),e.abrupt("return",!0);case 10:return e.prev=10,e.t0=e.catch(3),console.warn("Copy failed",e.t0),t(null),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(n){return e.apply(this,arguments)}}();return[n,r]},D=function(e){return(0,a.jsx)(l.Z,(0,i.Z)((0,r.Z)({},e),{style:{marginBottom:"0.5rem"},children:e.children}))},E=function(e){var n=e.onShareClick,t=e.onEditClick,r=e.onCloseClick,i=e.showEditButton;return(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",minWidth:"8rem",minHeight:"2rem",paddingTop:"5rem"},children:[(0,a.jsx)(D,{variant:"contained",color:"primary",onClick:n,children:"Share"}),i&&(0,a.jsx)(D,{variant:"outlined",onClick:t,children:"Edit Poll"}),(0,a.jsx)(D,{variant:"outlined",onClick:r,children:"Close Poll"})]})};var N=function(){var e,n=(0,c.useRouter)(),t=(0,o.Z)((0,b.i)(C.Dq),2),r=t[0],i=t[1],d=(0,o.Z)(P(),2),l=(d[0],d[1]);(0,s.useEffect)((function(){if(n.isReady){var e=n.query.id;i(String(e))}}),[n.isReady]);var f=(0,s.useState)(null),h=f[0],p=f[1];return(0,a.jsx)(u.Z,{alert:h,sidebar:(0,a.jsx)(E,{onShareClick:function(){var e;l((null===window||void 0===window||null===(e=window.location)||void 0===e?void 0:e.href)||""),p({message:"Copied the link to your Clipboard",severity:"info"})},onEditClick:function(){var e;n.push("/updatePoll/".concat(null===r||void 0===r||null===(e=r.data)||void 0===e?void 0:e.pollId))},onCloseClick:function(){},showEditButton:(null===(e=r.data)||void 0===e?void 0:e.userIsCreator)||!1}),autoHideAlertMilliSeconds:4e3,children:r.data?(0,a.jsx)(w,{pollData:r.data,setPageAlert:p}):"Loading"})}},1973:function(e){e.exports={page:"Page_page__WUVFs",contentContainer:"Page_contentContainer__BRpFP",mainContent:"Page_mainContent__Wuje1"}},7102:function(e){e.exports={sidebar:"Sidebar_sidebar__78n6f"}},2027:function(e){e.exports={skipVoteButton:"VotePoll_skipVoteButton__3mHG7"}},108:function(e){e.exports={candidateBoxSize:"shared_candidateBoxSize__tv5GK",centered:"shared_centered__3NXpX"}}},function(e){e.O(0,[630,133,598,774,888,179],(function(){return n=8017,e(e.s=n);var n}));var n=e.O();_N_E=n}]);