var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';

import { focusStyle } from '../../utils';

export var StyledCheckBoxContainer = /*#__PURE__*/styled.label.withConfig({
  displayName: 'StyledCheckBox__StyledCheckBoxContainer'
})(['display:flex;flex-direction:', ';align-items:center;cursor:pointer;user-select:none;> div:first-child{', '}:hover input:not([disabled]) + div,:hover input:not([disabled]) + span{border-color:', ';}'], function (props) {
  return props.reverse ? 'row-reverse' : 'row';
}, function (props) {
  return props.reverse ? 'margin-left: ' + props.theme.global.edgeSize.small + ';' : 'margin-right: ' + props.theme.global.edgeSize.small + ';';
}, function (props) {
  return props.grommet.dark ? props.theme.global.colors.white : props.theme.global.colors.black;
});

export var StyledCheckBoxInput = /*#__PURE__*/styled.input.withConfig({
  displayName: 'StyledCheckBox__StyledCheckBoxInput'
})(['opacity:0;width:0;height:0;margin:0;:focus + div,:focus + span{', '}:checked + div{border-color:', ';}:checked + div > svg{display:block;}:checked + span > span{left:', ';background-color:', ';}'], focusStyle, function (props) {
  return props.grommet.dark ? props.theme.global.colors.white : props.theme.checkBox.check.color;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.grommet.dark ? props.theme.global.colors.white : props.theme.checkBox.check.color;
});

export var StyledCheckBoxBox = /*#__PURE__*/styled.div.withConfig({
  displayName: 'StyledCheckBox__StyledCheckBoxBox'
})(['position:relative;top:-1px;display:inline-block;width:', ';height:', ';vertical-align:middle;background-color:inherit;border:', ' solid;border-color:', ';border-radius:', ';> svg{position:absolute;top:-2px;left:-2px;display:none;width:', ';height:', ';stroke-width:', ';stroke:', ';}'], function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.border.width;
}, function (props) {
  return props.theme.checkBox.border.color[props.grommet.dark ? 'dark' : 'light'];
}, function (props) {
  return props.theme.checkBox.border.radius;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.check.width;
}, function (props) {
  return props.grommet.dark ? props.theme.global.colors.white : props.theme.checkBox.check.color;
});

export var StyledCheckBoxToggle = /*#__PURE__*/styled.span.withConfig({
  displayName: 'StyledCheckBox__StyledCheckBoxToggle'
})(['position:relative;vertical-align:middle;display:inline-block;width:', ';height:', ';border:', ' solid;border-color:', ';border-radius:', ';'], function (props) {
  return props.theme.checkBox.toggle.size;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.border.width;
}, function (props) {
  return props.theme.checkBox.border.color[props.grommet.dark ? 'dark' : 'light'];
}, function (props) {
  return props.theme.checkBox.toggle.radius;
});

export var StyledCheckBoxKnob = /*#__PURE__*/styled.span.withConfig({
  displayName: 'StyledCheckBox__StyledCheckBoxKnob'
})(['position:absolute;top:-', ';left:-', ';transition:all 0.3s;width:', ';height:', ';background-color:', ';border-radius:', ';'], function (props) {
  return props.theme.checkBox.border.width;
}, function (props) {
  return props.theme.checkBox.border.width;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.toggle.color;
}, function (props) {
  return props.theme.checkBox.toggle.radius;
});

var StyledCheckBox = /*#__PURE__*/styled.div.withConfig({
  displayName: 'StyledCheckBox'
})(['']);

export default StyledCheckBox.extend(_templateObject, function (props) {
  return props.theme.checkBox && props.theme.checkBox.extend;
});