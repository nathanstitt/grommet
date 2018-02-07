var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import baseTheme from '../../themes/vanilla';
import { deepMerge } from '../../utils';

import StyledGrommet from './StyledGrommet';
import doc from './doc';

var createAnnouncer = function createAnnouncer() {
  var announcer = document.createElement('div');
  announcer.style.left = '-100%';
  announcer.style.right = '100%';
  announcer.style.position = 'fixed';
  announcer.style['z-index'] = '-1';

  document.body.insertBefore(announcer, document.body.firstChild);

  return announcer;
};

var Grommet = function (_Component) {
  _inherits(Grommet, _Component);

  function Grommet() {
    var _temp, _this, _ret;

    _classCallCheck(this, Grommet);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.announce = function (message) {
      var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'polite';

      // we only create a new container if we don't have one already
      // we create a separate node so that grommet does not set aria-hidden to it
      var announcer = document.body.querySelector('[aria-live]') || createAnnouncer();

      announcer.setAttribute('aria-live', 'off');
      announcer.innerHTML = message;
      announcer.setAttribute('aria-live', mode);
      setTimeout(function () {
        announcer.innerHTML = '';
      }, 500);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Grommet.prototype.getChildContext = function getChildContext() {
    var theme = this.props.theme;


    return {
      grommet: {
        announce: this.announce
      },
      theme: deepMerge(baseTheme, theme)
    };
  };

  Grommet.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        theme = _props.theme,
        rest = _objectWithoutProperties(_props, ['children', 'theme']);

    return React.createElement(
      StyledGrommet,
      _extends({}, rest, { theme: deepMerge(baseTheme, theme) }),
      children
    );
  };

  return Grommet;
}(Component);

Grommet.childContextTypes = {
  grommet: PropTypes.object,
  theme: PropTypes.object
};
Grommet.defaultProps = {
  centered: true,
  theme: undefined
};


if (process.env.NODE_ENV !== 'production') {
  doc(Grommet);
}

export default Grommet;