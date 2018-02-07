'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ALIGN_MAP = {
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};

var alignStyle = /*#__PURE__*/(0, _styledComponents.css)(['align-items:', ';'], function (props) {
  return ALIGN_MAP[props.align];
});

var ALIGN_CONTENT_MAP = {
  around: 'space-around',
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};

var alignContentStyle = /*#__PURE__*/(0, _styledComponents.css)(['align-content:', ';'], function (props) {
  return ALIGN_CONTENT_MAP[props.alignContent];
});

var JUSTIFY_MAP = {
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};

var justifyStyle = /*#__PURE__*/(0, _styledComponents.css)(['justify-content:', ';'], function (props) {
  return JUSTIFY_MAP[props.justify];
});

var JUSTIFY_CONTENT_MAP = {
  around: 'space-around',
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};

var justifyContentStyle = /*#__PURE__*/(0, _styledComponents.css)(['justify-content:', ';'], function (props) {
  return JUSTIFY_CONTENT_MAP[props.justifyContent];
});

var gapStyle = function gapStyle(props) {
  if (typeof props.gap === 'string') {
    var gapSize = props.theme.global.edgeSize[props.gap];
    return 'grid-gap: ' + gapSize + ' ' + gapSize + ';';
  }
  if (props.gap.horizontal && props.gap.vertical) {
    return '\n      grid-row-gap: ' + props.theme.global.edgeSize[props.gap.horizontal] + ';\n      grid-column-gap: ' + props.theme.global.edgeSize[props.gap.vertical] + ';\n    ';
  }
  if (props.gap.horizontal) {
    return '\n      grid-row-gap: ' + props.theme.global.edgeSize[props.gap.horizontal] + ';\n    ';
  }
  if (props.gap.vertical) {
    return '\n      grid-column-gap: ' + props.theme.global.edgeSize[props.gap.vertical] + ';\n    ';
  }
  return '';
};

var SIZE_MAP = {
  'flex': '1fr',
  'full': '100%',
  '1/2': '50%',
  '1/4': '25%',
  '3/4': '75%',
  '1/3': '33.33%',
  '2/3': '66.66%'
};

var columnsStyle = /*#__PURE__*/(0, _styledComponents.css)(['grid-template-columns:', ';'], function (props) {
  return props.columns.map(function (s) {
    return SIZE_MAP[s] || props.theme.global.size[s];
  }).join(' ');
});

var rowsStyle = /*#__PURE__*/(0, _styledComponents.css)(['grid-template-rows:', ';'], function (props) {
  return props.rows.map(function (s) {
    return SIZE_MAP[s] || props.theme.global.size[s];
  }).join(' ');
});

var areasStyle = function areasStyle(props) {
  // translate areas objects into grid-template-areas syntax
  var cells = props.rows.map(function () {
    return props.columns.map(function () {
      return '.';
    });
  });
  props.areas.forEach(function (area) {
    for (var row = area.start[1]; row <= area.end[1]; row += 1) {
      for (var column = area.start[0]; column <= area.end[0]; column += 1) {
        cells[row][column] = area.name;
      }
    }
  });
  return 'grid-template-areas: ' + cells.map(function (r) {
    return '"' + r.join(' ') + '"';
  }).join(' ') + ';';
};

var StyledGrid = /*#__PURE__*/_styledComponents2.default.div.withConfig({
  displayName: 'StyledGrid'
})(['display:grid;height:100%;', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''], function (props) {
  return props.align && alignStyle;
}, function (props) {
  return props.alignContent && alignContentStyle;
}, function (props) {
  return props.areas && areasStyle(props);
}, function (props) {
  return props.columns && columnsStyle;
}, function (props) {
  return props.gap && gapStyle(props);
}, function (props) {
  return props.justify && justifyStyle;
}, function (props) {
  return props.justifyContent && justifyContentStyle;
}, function (props) {
  return props.rows && rowsStyle;
});

exports.default = StyledGrid.extend(_templateObject, function (props) {
  return props.theme.grid && props.theme.grid.extend;
});