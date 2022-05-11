exports.id = 546;
exports.ids = [546];
exports.modules = {

/***/ 6165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Page)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@mui/material/Snackbar"
var Snackbar_ = __webpack_require__(1505);
var Snackbar_default = /*#__PURE__*/__webpack_require__.n(Snackbar_);
// EXTERNAL MODULE: external "@mui/material/Alert"
var Alert_ = __webpack_require__(3103);
var Alert_default = /*#__PURE__*/__webpack_require__.n(Alert_);
// EXTERNAL MODULE: ./components/Sidebar.module.css
var Sidebar_module = __webpack_require__(7723);
var Sidebar_module_default = /*#__PURE__*/__webpack_require__.n(Sidebar_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Sidebar.tsx




const Sidebar = props => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Sidebar_module_default()).sidebar,
    children: props.children
  });
};

/* harmony default export */ const components_Sidebar = (Sidebar);
// EXTERNAL MODULE: ./components/Page.module.css
var Page_module = __webpack_require__(555);
var Page_module_default = /*#__PURE__*/__webpack_require__.n(Page_module);
;// CONCATENATED MODULE: ./components/Page.tsx







const defaultProps = {
  sidebar: /*#__PURE__*/jsx_runtime_.jsx(components_Sidebar, {}),
  alert: null
};

const Page = props => {
  const {
    0: snackbarOpen,
    1: setSnackbarOpen
  } = (0,external_react_.useState)(false); // Storing the alert separately here so that we can have a clean animation when the alert prop is changed to null
  // Otherwise when the prop is changed to null there is no fade away animation due to the message being cleared

  const {
    0: alert,
    1: setAlert
  } = (0,external_react_.useState)(null);

  const handleClose = () => {
    setSnackbarOpen(false);
  };

  (0,external_react_.useEffect)(() => {
    if (props.alert) {
      setAlert(props.alert);
      setSnackbarOpen(true);
    } else {
      handleClose();
    }
  }, [props.alert]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Page_module_default()).page,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Page_module_default()).contentContainer,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Page_module_default()).mainContent,
        children: props.children
      }), props.sidebar]
    }), /*#__PURE__*/jsx_runtime_.jsx((Snackbar_default()), {
      open: snackbarOpen,
      onClose: handleClose,
      autoHideDuration: props.autoHideAlertMilliSeconds,
      children: /*#__PURE__*/jsx_runtime_.jsx((Alert_default()), {
        onClose: handleClose,
        severity: alert === null || alert === void 0 ? void 0 : alert.severity,
        children: alert === null || alert === void 0 ? void 0 : alert.message
      })
    })]
  });
};

Page.defaultProps = defaultProps;
/* harmony default export */ const components_Page = (Page);

/***/ }),

/***/ 7392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QP": () => (/* binding */ CreatePollRequest),
/* harmony export */   "Ms": () => (/* binding */ UpdatePollRequest),
/* harmony export */   "Dq": () => (/* binding */ GetPollRequest),
/* harmony export */   "Qh": () => (/* binding */ CreateVote),
/* harmony export */   "zF": () => (/* binding */ GetPollResultsRequest)
/* harmony export */ });
// TODO: move to environment variable
const host = "http://localhost:8080"; // const stagingHost = "https://societyclub-rcv-backend.uc.r.appspot.com"

const CreatePollRequest = (userID, data) => {
  return fetch(`${host}/ranked-choice-vote/v1/poll`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'X-USER-ID': userID
    },
    body: JSON.stringify(data)
  }).then(response => {
    if (!response.ok) {
      return response.json().then(data => Promise.reject({
        data: null,
        messages: []
      }) // TODO: It should probably be this but the backend is not returning errors nicely for 404s and etc.
      // Promise.reject({
      //   data: data.data,
      //   messages: data.messages,
      // })
      );
    }

    return response;
  }).then(data => data.json());
};
const UpdatePollRequest = (userID, id, data) => {
  return fetch(`${host}/ranked-choice-vote/v1/poll/${id}`, {
    method: 'PATCH',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'X-USER-ID': userID
    },
    body: JSON.stringify(data)
  }).then(response => {
    if (!response.ok) {
      return response.json().then(data => Promise.reject({
        data: null,
        messages: []
      }) // TODO: It should probably be this but the backend is not returning errors nicely for 404s and etc.
      // Promise.reject({
      //   data: data.data,
      //   messages: data.messages,
      // })
      );
    }

    return response;
  }).then(data => data.json());
};
const GetPollRequest = (userID, id) => {
  return fetch(`${host}/ranked-choice-vote/v1/poll/${id}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'X-USER-ID': userID
    }
  }).then(response => {
    if (!response.ok) {
      return response.json().then(data => Promise.reject({
        data: null,
        messages: []
      }) // TODO: It should probably be this but the backend is not returning errors nicely for 404s and etc.
      // Promise.reject({
      //   data: data.data,
      //   messages: data.messages,
      // })
      );
    }

    return response;
  }).then(data => data.json());
};
const CreateVote = (userID, id, data) => {
  return fetch(`${host}/ranked-choice-vote/v1/poll/${id}/vote`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'X-USER-ID': userID
    },
    body: JSON.stringify(data)
  }).then(response => {
    if (!response.ok) {
      return response.json().then(data => Promise.reject({
        data: null,
        messages: []
      }) // TODO: It should probably be this but the backend is not returning errors nicely for 404s and etc.
      // Promise.reject({
      //   data: data.data,
      //   messages: data.messages,
      // })
      );
    }

    return response;
  }).then(data => data.json());
};
const GetPollResultsRequest = (userID, id) => {
  return fetch(`${host}/ranked-choice-vote/v1/poll/${id}/results`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'X-USER-ID': userID
    }
  }).then(response => {
    console.log(response);
    const r = {
      messages: [],
      data: {
        pollId: 'test-do-not-deleto',
        pollName: 'This is a test poll',
        totalEntries: 13,
        totalSteps: 3,
        maxNumRankedChoiceCount: 2,
        winner: 'spoodermann',
        steps: [{
          stepId: 0,
          candidateList: [{
            name: 'spoodermann',
            eliminated: false,
            votes: [{
              firstChoiceCandidate: 'spoodermann',
              voteCount: 3
            }]
          }, {
            name: 'batman',
            eliminated: false,
            votes: [{
              firstChoiceCandidate: 'batman',
              voteCount: 4
            }]
          }, {
            name: 'peach',
            eliminated: false,
            votes: [{
              firstChoiceCandidate: 'peach',
              voteCount: 3
            }]
          }, {
            name: 'mario',
            eliminated: false,
            votes: [{
              firstChoiceCandidate: 'mario',
              voteCount: 2
            }]
          }, {
            name: 'luigi',
            eliminated: false,
            votes: [{
              firstChoiceCandidate: 'luigi',
              voteCount: 1
            }]
          }]
        }, {
          stepId: 1,
          candidateList: [{
            name: 'spoodermann',
            eliminated: false,
            votes: [{
              firstChoiceCandidate: 'spoodermann',
              voteCount: 3
            }, {
              firstChoiceCandidate: 'luigi',
              voteCount: 1
            }]
          }, {
            name: 'batman',
            eliminated: false,
            votes: [{
              firstChoiceCandidate: 'batman',
              voteCount: 4
            }]
          }, {
            name: 'peach',
            eliminated: false,
            votes: [{
              firstChoiceCandidate: 'peach',
              voteCount: 3
            }]
          }, {
            name: 'mario',
            eliminated: false,
            votes: [{
              firstChoiceCandidate: 'mario',
              voteCount: 2
            }]
          }, {
            name: 'luigi',
            eliminated: true,
            votes: [{
              firstChoiceCandidate: 'luigi',
              voteCount: 1
            }]
          }]
        }, {
          stepId: 2,
          candidateList: [{
            name: 'spoodermann',
            eliminated: false,
            votes: [{
              firstChoiceCandidate: 'spoodermann',
              voteCount: 3
            }, {
              firstChoiceCandidate: 'luigi',
              voteCount: 1
            }, {
              firstChoiceCandidate: 'mario',
              voteCount: 2
            }]
          }, {
            name: 'batman',
            eliminated: false,
            votes: [{
              firstChoiceCandidate: 'batman',
              voteCount: 4
            }]
          }, {
            name: 'peach',
            eliminated: false,
            votes: [{
              firstChoiceCandidate: 'peach',
              voteCount: 3
            }]
          }, {
            name: 'mario',
            eliminated: true,
            votes: [{
              firstChoiceCandidate: 'mario',
              voteCount: 2
            }]
          }, {
            name: 'luigi',
            eliminated: true,
            votes: [{
              firstChoiceCandidate: 'luigi',
              voteCount: 1
            }]
          }]
        }],
        yourEntry: {
          choices: [{
            choicePosition: 0,
            candidate: {
              name: 'mario'
            }
          }, {
            choicePosition: 1,
            candidate: {
              name: 'spoodermann'
            }
          }]
        }
      }
    }; // Had to do this to match what data.json() typically does since we are hardcoding it here

    return Promise.resolve(r);

    if (!response.ok) {
      return response.json().then(data => Promise.reject({
        data: null,
        messages: []
      }) // TODO: It should probably be this but the backend is not returning errors nicely for 404s and etc.
      // Promise.reject({
      //   data: data.data,
      //   messages: data.messages,
      // })
      );
    }

    return response;
  }); // .then((data) => data.json());
};

/***/ }),

/***/ 2175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i": () => (/* binding */ useFetch)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-cookie"
var external_react_cookie_ = __webpack_require__(311);
// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__(1231);
;// CONCATENATED MODULE: ./hooks/useUserID.ts


const useUserID = () => {
  const [cookies, setCookie, removeCookie] = (0,external_react_cookie_.useCookies)(['X-USER-ID']);

  if (!cookies['X-USER-ID']) {
    const id = (0,external_uuid_.v4)();
    setCookie('X-USER-ID', id, {
      path: '/'
    });
    return id;
  }

  return cookies['X-USER-ID'];
};
;// CONCATENATED MODULE: ./hooks/useFetch.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const emptyFetchData = {
  data: null,
  messages: [],
  isLoading: false,
  isSuccess: false,
  isInitial: true
};
function useFetch(fetchFunction) {
  const {
    0: response,
    1: setResponse
  } = (0,external_react_.useState)(emptyFetchData);
  const userID = useUserID();

  const fetchMethod = (...args) => {
    setResponse(_objectSpread(_objectSpread({}, emptyFetchData), {}, {
      isLoading: true,
      isInitial: false
    }));
    return fetchFunction(String(userID), ...args).then(res => {
      const data = {
        data: res.data,
        messages: res.messages,
        isLoading: false,
        isSuccess: true,
        isInitial: false
      };
      setResponse(data);
      return data;
    }).catch(res => {
      const data = {
        data: res.data,
        messages: res.messages,
        isLoading: false,
        isSuccess: false,
        isInitial: false
      };
      setResponse(data);
      return data;
    });
  };

  return [response, fetchMethod];
}
;

/***/ }),

/***/ 555:
/***/ ((module) => {

// Exports
module.exports = {
	"page": "Page_page__1hHHt",
	"contentContainer": "Page_contentContainer__12rAS",
	"mainContent": "Page_mainContent__GcSbW"
};


/***/ }),

/***/ 7723:
/***/ ((module) => {

// Exports
module.exports = {
	"sidebar": "Sidebar_sidebar__1wPFG"
};


/***/ })

};
;