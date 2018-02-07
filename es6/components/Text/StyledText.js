var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';

import { colorForName } from '../../utils';

var marginStyle = function marginStyle(props) {
  if (typeof props.margin === 'string') {
    if (props.margin === 'none') {
      return 'margin: 0;';
    }
    var margin = props.theme.global.edgeSize[props.margin];
    return '\n      margin-top: ' + margin + ';\n      margin-bottom: ' + margin + ';\n      margin-left: ' + margin + ';\n      margin-right: ' + margin + ';\n    ';
  }
  if (props.margin.vertical) {
    return '\n      margin-top: ' + props.theme.global.edgeSize[props.margin.vertical] + ';\n      margin-bottom: ' + props.theme.global.edgeSize[props.margin.vertical] + ';\n    ';
  }
  if (props.margin.horizontal) {
    return '\n      margin-left: ' + props.theme.global.edgeSize[props.margin.horizontal] + ';\n      margin-right: ' + props.theme.global.edgeSize[props.margin.horizontal] + ';\n    ';
  }
  if (props.margin.top) {
    return 'margin-top: ' + props.theme.global.edgeSize[props.margin.top] + ';';
  }
  if (props.margin.bottom) {
    return 'margin-bottom: ' + props.theme.global.edgeSize[props.margin.bottom] + ';';
  }
  if (props.margin.left) {
    return 'margin-left: ' + props.theme.global.edgeSize[props.margin.left] + ';';
  }
  if (props.margin.right) {
    return 'margin-right: ' + props.theme.global.edgeSize[props.margin.right] + ';';
  }
  return '';
};

var sizeStyle = function sizeStyle(props) {
  // size is a combination of the level and size properties
  var size = props.size || 'medium';
  var data = props.theme.text[size];
  return css(['font-size:', ';line-height:', ';'], data.size, data.height);
};

var TEXT_ALIGN_MAP = {
  center: 'center',
  end: 'right',
  start: 'left'
};

var textAlignStyle = /*#__PURE__*/css(['text-align:', ';'], function (props) {
  return TEXT_ALIGN_MAP[props.textAlign];
});

var truncateStyle = '\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n';

var colorStyle = /*#__PURE__*/css(['color:', ''], function (props) {
  return colorForName(props.color, props.theme);
});

var StyledText = /*#__PURE__*/styled.span.withConfig({
  displayName: 'StyledText'
})(['', ' ', ' ', ' ', ' ', ''], function (props) {
  return sizeStyle(props);
}, function (props) {
  return props.margin && marginStyle(props);
}, function (props) {
  return props.textAlign && textAlignStyle;
}, function (props) {
  return props.truncate && truncateStyle;
}, function (props) {
  return props.color && colorStyle;
});

export default StyledText.extend(_templateObject, function (props) {
  return props.theme.text && props.theme.text.extend;
});