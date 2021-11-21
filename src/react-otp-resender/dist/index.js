"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Main;

require("core-js/modules/es.regexp.to-string.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Main(props) {
  const calculateTimeLeft = innerSeconds => {
    var m = Math.floor(innerSeconds % 3600 / 60).toString().padStart(2, '0'),
        s = Math.floor(innerSeconds % 60).toString().padStart(2, '0');
    return "".concat(m, ":").concat(s);
  };

  const [innerSeconds, setInnerSeconds] = (0, _react.useState)(props.seconds);
  const [timeLeft, setTimeLeft] = (0, _react.useState)(calculateTimeLeft(props.seconds));
  const [resendStatus, setResendStatus] = (0, _react.useState)(false);
  var timer = null;
  (0, _react.useEffect)(() => {
    if (innerSeconds <= 0) {
      setResendStatus(true);
      clearTimeout(timer);
    } else {
      timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft(innerSeconds - 1));
        setInnerSeconds(innerSeconds - 1);
      }, 1000);
    }

    return () => clearTimeout(timer);
  });

  function resend() {
    setResendStatus(false);
    setInnerSeconds(props.seconds);
    setTimeLeft(calculateTimeLeft(props.seconds));
    props.resendFunc();
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: props.wrapperStyle
  }, resendStatus ? /*#__PURE__*/_react.default.createElement("button", {
    style: props.resendBtnStyle,
    onClick: resend
  }, props.resendBtnText) : /*#__PURE__*/_react.default.createElement("p", {
    style: props.textStyle
  }, timeLeft));
}