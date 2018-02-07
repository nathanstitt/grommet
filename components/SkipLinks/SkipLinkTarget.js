'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Anchor = require('../Anchor');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hiddenAnchor = {
  width: 0,
  height: 0,
  overflow: 'hidden',
  position: 'absolute'
};

var SkipLinkTarget = function SkipLinkTarget(_ref) {
  var label = _ref.label,
      rest = _objectWithoutProperties(_ref, ['label']);

  return _react2.default.createElement(
    _Anchor.Anchor,
    _extends({}, rest, { tabIndex: '-1', 'aria-hidden': 'true', style: hiddenAnchor }),
    label
  );
};

exports.default = SkipLinkTarget;