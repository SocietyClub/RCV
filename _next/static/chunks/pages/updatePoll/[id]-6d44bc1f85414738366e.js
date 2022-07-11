(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[122],{6818:function(e,t,a){"use strict";var i=a(5318);t.Z=void 0;var n=i(a(4938)),s=a(5893),d=(0,n.default)((0,s.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save");t.Z=d},1346:function(e,t,a){"use strict";a.d(t,{Z:function(){return v}});var i=a(7294),n=a(2658),s=a(1482),d=a(3789),l=a(2642),o=a(1947),u=a.n(o),r=a(5893),c=function(e){var t=(0,i.useState)(!0),a=t[0],o=t[1],c=(0,i.useCallback)((function(){var t=document.querySelectorAll("."+e.textFieldClassName+":last-of-type input")[0];t&&t.focus&&t.focus()}),[e.textFieldClassName]),m=function(t){"Enter"===t.key&&(o(!a),e.setCandidateList([].concat((0,d.Z)(e.candidateList),[{name:""}])))},f=function(t){var a=Number(t.target.name),i=(0,d.Z)(e.candidateList);i[a]={name:t.target.value},e.setCandidateList(i)};return(0,i.useEffect)((function(){c()}),[a,c]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Z,{variant:"h4",children:"Candidates"}),e.candidateList.map((function(t,a){return(0,r.jsx)(s.Z,{name:String(a),className:e.textFieldClassName,onKeyPress:m,label:"Candidate Name",variant:"filled",value:t.name,onChange:f},a)})),(0,r.jsx)(l.Z,{className:u().addCandidateButton,variant:"contained",onClick:function(){o(!a),e.setCandidateList([].concat((0,d.Z)(e.candidateList),[{name:""}]))},children:"Add Candidate"})]})};c.defaultProps={};var m=c,f=a(4347),h=function(e){var t=Math.max(10,e.candidateList.length);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Z,{variant:"h4",children:"Poll Details"}),(0,r.jsx)(s.Z,{className:e.textFieldClassName,label:"Poll Title",id:"poll-title",variant:"filled",value:e.pollName,onChange:function(t){return e.setPollName(t.target.value)}}),(0,r.jsx)(s.Z,{className:e.textFieldClassName,label:"Number of Ranked Choices",id:"ranked-choice-count",select:!0,variant:"filled",value:e.maxNumRankedChoiceCount,onChange:function(t){return e.setMaxNumRankedChoiceCount(Number(t.target.value))},children:Array(t).fill(0).map((function(e,t){return(0,r.jsx)(f.Z,{value:t+1,children:t+1},t+1)}))}),(0,r.jsx)(m,{candidateList:e.candidateList,setCandidateList:e.setCandidateList,textFieldClassName:e.textFieldClassName})]})};h.defaultProps={};var v=h},3328:function(e,t,a){"use strict";a.r(t);var i=a(318),n=a(1163),s=a(7294),d=a(2658),l=a(2642),o=a(6818),u=a(6165),r=a(5416),c=a.n(r),m=a(7392),f=a(1346),h=a(2175),v=a(9062),C=a(6628),x=a(5893);t.default=function(){var e,t,a=(0,n.useRouter)(),r=a.query.id,N=(0,s.useState)(""),p=N[0],g=N[1],_=(0,s.useState)(3),L=_[0],Z=_[1],j=(0,s.useState)([]),k=j[0],S=j[1],y=(0,h.i)(m.Dq),F=(0,i.Z)(y,2),P=F[0],E=F[1],b=(0,h.i)(m.Ms),w=(0,i.Z)(b,2),I=w[0],R=w[1],A=(0,s.useState)(null),B=A[0],T=A[1];(0,s.useEffect)((function(){a.isReady&&E(String(r))}),[a.isReady,r]),(0,s.useEffect)((function(){P.data&&(g(P.data.pollName),Z(P.data.maxNumRankedChoiceCount),S(P.data.candidateList))}),[P.data]),(0,s.useEffect)((function(){var e;P.isInitial||(P.isLoading||P.isSuccess||T({severity:"error",message:"An error has occured while loading the poll"}),(P.isLoading||P.isSuccess)&&T(null),!P.isSuccess||null!==(e=P.data)&&void 0!==e&&e.userIsCreator||T({severity:"error",message:"You are not allowed to edit a poll you did not create"}))}),[P.isInitial,P.isLoading,P.isSuccess]),(0,s.useEffect)((function(){I.isInitial||(I.isLoading||I.isSuccess||T({severity:"error",message:"An error has occured while updating the poll"}),(I.isLoading||I.isSuccess)&&T(null))}),[I.isInitial,I.isLoading,I.isSuccess]);var M=!P.isLoading&&(null===(e=P.data)||void 0===e?void 0:e.userIsCreator),O=!P.isLoading&&!(null!==(t=P.data)&&void 0!==t&&t.userIsCreator);return(0,x.jsxs)(u.Z,{alert:B,children:[(0,x.jsx)(d.Z,{variant:"h3",children:"Edit Poll"}),P.isLoading&&(0,x.jsx)(C.Z,{in:P.isLoading,style:{transitionDelay:P.isLoading?"800ms":"0ms"},unmountOnExit:!0,children:(0,x.jsx)(v.Z,{})}),M&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(f.Z,{textFieldClassName:c().candidateTextField,pollName:p,maxNumRankedChoiceCount:L,candidateList:k,setPollName:g,setMaxNumRankedChoiceCount:Z,setCandidateList:S}),(0,x.jsx)(l.Z,{className:c().updatePollButton,variant:"contained",startIcon:(0,x.jsx)(o.Z,{}),color:"success",onClick:function(){var e={pollName:p,maxNumRankedChoiceCount:L,candidateList:k};R(String(r),e).then((function(){var e;a.push("/vote/".concat(null===P||void 0===P||null===(e=P.data)||void 0===e?void 0:e.pollId))})).catch((function(){T({severity:"error",message:"An error has occured while updating the poll"})}))},children:"Update Poll"})]}),O&&(0,x.jsx)(d.Z,{variant:"subtitle1",children:"You do not have permission to edit this Poll"})]})}},3270:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/updatePoll/[id]",function(){return a(3328)}])},1947:function(e){e.exports={addCandidateButton:"CandidateInputList_addCandidateButton__1jCCi"}},5416:function(e){e.exports={textField:"_id__textField__OjyV9",candidateTextField:"_id__candidateTextField__2kmi8",updatePollButton:"_id__updatePollButton__2__E1"}}},function(e){e.O(0,[859,878,549,774,888,179],(function(){return t=3270,e(e.s=t);var t}));var t=e.O();_N_E=t}]);