(() => {
var exports = {};
exports.id = 297;
exports.ids = [297];
exports.modules = {

/***/ 2726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(1874);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
;// CONCATENATED MODULE: external "react-beautiful-dnd"
const external_react_beautiful_dnd_namespaceObject = require("react-beautiful-dnd");
// EXTERNAL MODULE: ./components/Page.tsx + 1 modules
var Page = __webpack_require__(6165);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(8082);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/icons-material/Menu"
var Menu_ = __webpack_require__(3903);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
;// CONCATENATED MODULE: external "@mui/material/Box"
const Box_namespaceObject = require("@mui/material/Box");
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_namespaceObject);
// EXTERNAL MODULE: ./components/shared.module.css
var shared_module = __webpack_require__(6589);
var shared_module_default = /*#__PURE__*/__webpack_require__.n(shared_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/CandidateSelectionBox.tsx








function CandidateSelectionBox({
  candidateName,
  width
}) {
  const styleVals = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    background: "white",
    zIndex: 1,
    width: width
  };
  const boxWrapperStyle = {
    height: "calc(56px + 1rem)" // Setting to the height of the box plus the 1rem of margin

  };
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    style: boxWrapperStyle,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Box_default()), {
      className: (shared_module_default()).candidateBoxSize + " " + (shared_module_default()).centered,
      style: styleVals,
      sx: {
        boxShadow: 3
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
        variant: "h5",
        children: candidateName
      }), /*#__PURE__*/jsx_runtime_.jsx((Menu_default()), {})]
    })
  });
}

/* harmony default export */ const components_CandidateSelectionBox = (CandidateSelectionBox);
;// CONCATENATED MODULE: ./components/CandidateChoiceBox.tsx




function CandidateChoiceBox({
  children,
  width
}) {
  const styleVals = {
    backgroundColor: "rgba(0, 0, 0, 0.12)",
    color: "rgba(0, 0, 0, 0.38)",
    // border is darker than background because alpha channel is additive
    border: "1px solid rgba(0, 0, 0, 0.12)",
    borderRadius: "4px",
    zIndex: -1,
    width: width
  };
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (shared_module_default()).candidateBoxSize + " " + (shared_module_default()).centered,
    style: styleVals,
    children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
      variant: "h5",
      children: children
    })
  });
}

/* harmony default export */ const components_CandidateChoiceBox = (CandidateChoiceBox);
// EXTERNAL MODULE: ./components/api.ts
var api = __webpack_require__(7392);
// EXTERNAL MODULE: ./hooks/useFetch.ts + 1 modules
var useFetch = __webpack_require__(2175);
;// CONCATENATED MODULE: ./components/VotePoll.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















function VotePoll({
  pollData,
  setPageAlert
}) {
  const [_, createVote] = (0,useFetch/* useFetch */.i)(api/* CreateVote */.Qh);
  const {
    0: candidates,
    1: setCandidates
  } = (0,external_react_.useState)([]);
  const {
    0: chosenCandidates,
    1: setChosenCandidates
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    if (pollData.candidateList) {
      setCandidates(pollData.candidateList.map(candidate => candidate.name));
    }
  }, [pollData.candidateList]);
  const dropIdMap = {
    candidatesDropId: {
      list: candidates,
      setList: setCandidates
    },
    chosenCandidatesDropId: {
      list: chosenCandidates,
      setList: setChosenCandidates
    }
  };

  const onDragEnd = result => {
    const {
      source,
      destination
    } = result;
    if (!destination) return;
    const sourceId = source.droppableId;
    const destId = destination.droppableId;

    if (sourceId === destId) {
      const reOrderedItems = reorder(dropIdMap[sourceId].list, source.index, destination.index);
      dropIdMap[sourceId].setList(reOrderedItems);
    } else {
      // Item is being moved from one list to another
      if (!isValidMove(destId)) {
        return;
      }

      const [newSourceList, newDestList] = move(dropIdMap[sourceId].list, dropIdMap[destId].list, source.index, destination.index);
      dropIdMap[sourceId].setList(newSourceList);
      dropIdMap[destId].setList(newDestList);
    }
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const isValidMove = destId => {
    const destList = dropIdMap[destId].list;
    const userChoosesMoreThanAllowedNumberOfCandidates = destId == 'chosenCandidatesDropId' && destList.length >= pollData.maxNumRankedChoiceCount;

    if (userChoosesMoreThanAllowedNumberOfCandidates) {
      setPageAlert({
        severity: 'warning',
        message: `You can only choose a max of ${pollData.maxNumRankedChoiceCount} candidates!`
      });
    }

    const isValid = !userChoosesMoreThanAllowedNumberOfCandidates;
    return isValid;
  };

  const move = (source, destination, sourceIndex, destIndex) => {
    const sourceClone = [...source];
    const destClone = [...destination];
    const [removed] = sourceClone.splice(sourceIndex, 1);
    destClone.splice(destIndex, 0, removed);
    return [sourceClone, destClone];
  };

  const boxWidth = '22.5rem';

  const handleSubmitVote = () => {
    if (chosenCandidates.length == 0) {
      setPageAlert({
        severity: 'error',
        message: `You must choose at least 1 candidate!`
      });
      return;
    }

    const createVoteRequest = {
      choices: chosenCandidates.map((candidateName, index) => ({
        choicePosition: index + 1,
        // positions are 1-indexed so add 1
        candidate: {
          name: candidateName
        }
      }))
    };
    createVote(pollData.pollId, createVoteRequest).then(() => {
      setPageAlert({
        severity: 'success',
        message: 'Your vote was submitted!'
      });
      router_default().push(`/poll/${pollData.pollId}/results`);
    }).catch(() => {
      setPageAlert({
        severity: 'error',
        message: 'Failed to submit your vote.'
      });
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      padding: '5rem'
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center'
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
          variant: "h2",
          children: pollData.pollName
        }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
          variant: "subtitle2",
          children: pollData.pollDesc
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          style: {
            height: '2rem'
          }
        }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
          variant: "h5",
          children: "Drag your selections to the ranked spots on the right."
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          style: {
            height: '4rem'
          }
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_beautiful_dnd_namespaceObject.DragDropContext, {
      onDragEnd: onDragEnd,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        style: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_beautiful_dnd_namespaceObject.Droppable, {
          droppableId: "candidatesDropId",
          children: (provided, _) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", _objectSpread(_objectSpread({}, provided.droppableProps), {}, {
            style: {
              minWidth: boxWidth
            },
            ref: provided.innerRef,
            children: [candidates.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx(external_react_beautiful_dnd_namespaceObject.Draggable, {
              draggableId: item,
              index: index,
              children: (provided, _) => /*#__PURE__*/jsx_runtime_.jsx("div", _objectSpread(_objectSpread(_objectSpread({
                ref: provided.innerRef
              }, provided.draggableProps), provided.dragHandleProps), {}, {
                children: /*#__PURE__*/jsx_runtime_.jsx(components_CandidateSelectionBox, {
                  candidateName: item,
                  width: boxWidth
                })
              }))
            }, item)), provided.placeholder]
          }))
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          style: {
            width: '2rem'
          }
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_beautiful_dnd_namespaceObject.Droppable, {
          droppableId: "chosenCandidatesDropId",
          children: (provided, _) => /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", _objectSpread(_objectSpread({}, provided.droppableProps), {}, {
              style: {
                minWidth: boxWidth // Width of the Boxes

              },
              ref: provided.innerRef,
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                style: {
                  position: 'absolute',
                  zIndex: -1
                },
                children: Array.from(Array(pollData.maxNumRankedChoiceCount).keys()).map(num => /*#__PURE__*/(0,jsx_runtime_.jsxs)(components_CandidateChoiceBox, {
                  width: boxWidth,
                  children: ["Candidate ", num + 1]
                }, num))
              }), chosenCandidates.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx(external_react_beautiful_dnd_namespaceObject.Draggable, {
                draggableId: item,
                index: index,
                children: (provided, _) => /*#__PURE__*/jsx_runtime_.jsx("div", _objectSpread(_objectSpread(_objectSpread({
                  ref: provided.innerRef
                }, provided.draggableProps), provided.dragHandleProps), {}, {
                  children: /*#__PURE__*/jsx_runtime_.jsx(components_CandidateSelectionBox, {
                    candidateName: item,
                    width: boxWidth
                  })
                }))
              }, item)), provided.placeholder]
            }))
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
      variant: "contained",
      color: "primary",
      onClick: handleSubmitVote,
      children: "Submit Your Vote!"
    })]
  });
}

/* harmony default export */ const components_VotePoll = (VotePoll);
;// CONCATENATED MODULE: ./hooks/useCopyToClipboard.ts


// Return success
function useCopyToClipboard() {
  const {
    0: copiedText,
    1: setCopiedText
  } = (0,external_react_.useState)(null);

  const copy = async text => {
    var _navigator;

    if (!((_navigator = navigator) !== null && _navigator !== void 0 && _navigator.clipboard)) {
      console.warn("Clipboard not supported");
      return false;
    } // Try to save to clipboard then save it in the state if worked


    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      console.warn("Copy failed", error);
      setCopiedText(null);
      return false;
    }
  };

  return [copiedText, copy];
}

/* harmony default export */ const hooks_useCopyToClipboard = (useCopyToClipboard);
;// CONCATENATED MODULE: ./pages/vote/[id].tsx
function _id_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _id_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _id_ownKeys(Object(source), true).forEach(function (key) { _id_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _id_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _id_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const SidebarButton = props => /*#__PURE__*/jsx_runtime_.jsx((Button_default()), _id_objectSpread(_id_objectSpread({}, props), {}, {
  style: {
    marginBottom: '0.5rem'
  },
  children: props.children
}));

const VotePageSidebar = ({
  onShareClick,
  onEditClick,
  onCloseClick
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: '8rem',
      minHeight: '2rem',
      paddingTop: '5rem'
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx(SidebarButton, {
      variant: "contained",
      color: "primary",
      onClick: onShareClick,
      children: "Share"
    }), /*#__PURE__*/jsx_runtime_.jsx(SidebarButton, {
      variant: "outlined",
      onClick: onEditClick,
      children: "Edit Poll"
    }), /*#__PURE__*/jsx_runtime_.jsx(SidebarButton, {
      variant: "outlined",
      onClick: onCloseClick,
      children: "Close Poll"
    })]
  });
};

function VotePage() {
  const router = (0,router_.useRouter)();
  const [pollData, getPollData] = (0,useFetch/* useFetch */.i)(api/* GetPollRequest */.Dq);
  const [_, copyToClipboard] = hooks_useCopyToClipboard();
  (0,external_react_.useEffect)(() => {
    if (!router.isReady) {
      return;
    }

    const {
      id
    } = router.query;
    getPollData(String(id));
  }, [router.isReady]);
  const {
    0: pageAlert,
    1: setPageAlert
  } = (0,external_react_.useState)(null);
  return /*#__PURE__*/jsx_runtime_.jsx(Page/* default */.Z, {
    alert: pageAlert,
    sidebar: /*#__PURE__*/jsx_runtime_.jsx(VotePageSidebar, {
      onShareClick: () => {
        var _window, _window$location;

        copyToClipboard(((_window = window) === null || _window === void 0 ? void 0 : (_window$location = _window.location) === null || _window$location === void 0 ? void 0 : _window$location.href) || '');
        setPageAlert({
          message: 'Copied the link to your Clipboard',
          severity: 'info'
        });
      },
      onEditClick: () => {
        var _pollData$data;

        router.push(`/updatePoll/${pollData === null || pollData === void 0 ? void 0 : (_pollData$data = pollData.data) === null || _pollData$data === void 0 ? void 0 : _pollData$data.pollId}`);
      },
      onCloseClick: () => {}
    }),
    autoHideAlertMilliSeconds: 4000,
    children: pollData.data ? /*#__PURE__*/jsx_runtime_.jsx(components_VotePoll, {
      pollData: pollData.data,
      setPageAlert: setPageAlert
    }) : 'Loading'
  });
}

const getServerSideProps = async () => {
  // Required for react-beautiful-dnd to work
  (0,external_react_beautiful_dnd_namespaceObject.resetServerContext)(); // <-- CALL RESET SERVER CONTEXT, SERVER SIDE

  return {
    props: {
      data: []
    }
  };
};
/* harmony default export */ const _id_ = (VotePage);

/***/ }),

/***/ 6589:
/***/ ((module) => {

// Exports
module.exports = {
	"candidateBoxSize": "shared_candidateBoxSize__1264_",
	"centered": "shared_centered__TKD3A"
};


/***/ }),

/***/ 3903:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 3103:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Alert");

/***/ }),

/***/ 1874:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Button");

/***/ }),

/***/ 1505:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Snackbar");

/***/ }),

/***/ 8082:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 311:
/***/ ((module) => {

"use strict";
module.exports = require("react-cookie");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1231:
/***/ ((module) => {

"use strict";
module.exports = require("uuid");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [546], () => (__webpack_exec__(2726)));
module.exports = __webpack_exports__;

})();