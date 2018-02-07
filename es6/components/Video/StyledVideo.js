var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';

import { colorForName } from '../../utils';

var FIT_MAP = {
  cover: 'cover',
  contain: 'contain'
};

var fitStyle = /*#__PURE__*/css(['flex:1 1;min-height:0;object-fit:', ';'], function (props) {
  return FIT_MAP[props.fit];
});

var StyledVideo = /*#__PURE__*/styled.video.withConfig({
  displayName: 'StyledVideo'
})(['max-width:100%;', '::cue{background:', ';}'], function (props) {
  return props.fit && fitStyle;
}, function (props) {
  return props.theme.video.captions.background;
});

export var StyledVideoContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: 'StyledVideo__StyledVideoContainer'
})(['flex:1 1;display:flex;flex-direction:column;overflow:hidden;position:relative;']);

var positionStyle = /*#__PURE__*/css(['position:absolute;left:0;right:0;bottom:0;']);

export var StyledVideoControls = /*#__PURE__*/styled.div.withConfig({
  displayName: 'StyledVideo__StyledVideoControls'
})(['flex:0 0;', ' opacity:0;transition:opacity 0.3s;', ''], function (props) {
  return props.over && positionStyle;
}, function (props) {
  return props.active ? 'opacity: 1;' : 'pointer-events: none';
});

var headStyle = /*#__PURE__*/css(['::after{content:\'\';height:100%;width:', ';background-color:', ';position:absolute;left:', ';}'], function (props) {
  return props.theme.global.edgeSize.xsmall;
}, function (props) {
  return colorForName('light-5', props.theme);
}, function (props) {
  return props.value + '%';
});

export var StyledVideoScrubber = /*#__PURE__*/styled.div.withConfig({
  displayName: 'StyledVideo__StyledVideoScrubber'
})(['cursor:pointer;', ''], function (props) {
  return props.value && headStyle;
});

export default StyledVideo.extend(_templateObject, function (props) {
  return props.theme.video && props.theme.video.extend;
});