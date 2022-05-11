exports.id = 346;
exports.ids = [346];
exports.modules = {

/***/ 1346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_PollInputForm)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(8082);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(8258);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(7949);
// EXTERNAL MODULE: ./components/CandidateInputList.module.css
var CandidateInputList_module = __webpack_require__(338);
var CandidateInputList_module_default = /*#__PURE__*/__webpack_require__.n(CandidateInputList_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/CandidateInputList.tsx






const defaultProps = {};

const CandidateInputList = props => {
  // Using this state to cause the focus to move to the new candidate input field
  // When the Enter Key or Add Candidate button is pressed, I didn't want to listen to
  // props.candidateList changes since those can happen from API calls
  // and we don't always want to change focus when that happens
  const {
    0: focusChange,
    1: setNumFocusChange
  } = (0,external_react_.useState)(true);

  const addCandidate = () => {
    setNumFocusChange(!focusChange);
    props.setCandidateList([...props.candidateList, {
      name: ""
    }]);
  };

  const setFocusToLastCandidate = (0,external_react_.useCallback)(() => {
    const lastCandidateTextInput = document.querySelectorAll("." + props.textFieldClassName + ":last-of-type input")[0];

    if (lastCandidateTextInput && lastCandidateTextInput.focus) {
      lastCandidateTextInput.focus();
    }
  }, [props.textFieldClassName]);

  const handleEnterKey = event => {
    if (event.key === "Enter") {
      setNumFocusChange(!focusChange);
      props.setCandidateList([...props.candidateList, {
        name: ""
      }]);
    }
  };

  const handleChange = event => {
    const index = Number(event.target.name);
    const candidateListCopy = [...props.candidateList];
    candidateListCopy[index] = {
      name: event.target.value
    };
    props.setCandidateList(candidateListCopy);
  };

  (0,external_react_.useEffect)(() => {
    setFocusToLastCandidate();
  }, [focusChange, setFocusToLastCandidate]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Typography, {
      variant: "h4",
      children: "Candidates"
    }), props.candidateList.map((candidate, i) => /*#__PURE__*/jsx_runtime_.jsx(material_.TextField, {
      name: String(i),
      className: props.textFieldClassName,
      onKeyPress: handleEnterKey,
      label: "Candidate Name",
      variant: "filled",
      value: candidate.name,
      onChange: handleChange
    }, i)), /*#__PURE__*/jsx_runtime_.jsx(material_.Button, {
      className: (CandidateInputList_module_default()).addCandidateButton,
      variant: "contained",
      onClick: addCandidate,
      children: "Add Candidate"
    })]
  });
};

CandidateInputList.defaultProps = defaultProps;
/* harmony default export */ const components_CandidateInputList = (CandidateInputList);
;// CONCATENATED MODULE: ./components/PollInputForm.tsx








const PollInputForm_defaultProps = {};

const PollInputForm = props => {
  const maxNumberOfRankedChoices = Math.max(10, props.candidateList.length);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
      variant: "h4",
      children: "Poll Details"
    }), /*#__PURE__*/jsx_runtime_.jsx((TextField_default()), {
      className: props.textFieldClassName,
      label: "Poll Title",
      id: "poll-title",
      variant: "filled",
      value: props.pollName,
      onChange: event => props.setPollName(event.target.value)
    }), /*#__PURE__*/jsx_runtime_.jsx((TextField_default()), {
      className: props.textFieldClassName,
      label: "Number of Ranked Choices",
      id: "ranked-choice-count",
      select: true,
      variant: "filled",
      value: props.maxNumRankedChoiceCount,
      onChange: event => props.setMaxNumRankedChoiceCount(Number(event.target.value)),
      children: Array(maxNumberOfRankedChoices).fill(0).map((_, i) => /*#__PURE__*/jsx_runtime_.jsx(material_.MenuItem, {
        value: i + 1,
        children: i + 1
      }, i + 1))
    }), /*#__PURE__*/jsx_runtime_.jsx(components_CandidateInputList, {
      candidateList: props.candidateList,
      setCandidateList: props.setCandidateList,
      textFieldClassName: props.textFieldClassName
    })]
  });
};

PollInputForm.defaultProps = PollInputForm_defaultProps;
/* harmony default export */ const components_PollInputForm = (PollInputForm);

/***/ }),

/***/ 338:
/***/ ((module) => {

// Exports
module.exports = {
	"addCandidateButton": "CandidateInputList_addCandidateButton__1jCCi"
};


/***/ })

};
;