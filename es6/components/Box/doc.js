import { describe, PropTypes } from 'react-desc';

import { a11yTitlePropType, getAvailableAtBadge } from '../../utils';

var PAD_SIZES = ['xsmall', 'small', 'medium', 'large'];

var ANIMATION_TYPE = PropTypes.oneOf(['fadeIn', 'fadeOut', 'jiggle', 'pulse', 'slideUp', 'slideDown', 'slideLeft', 'slideRight', 'zoomIn', 'zoomOut']);
var ANIMATION_SHAPE = PropTypes.shape({
  type: ANIMATION_TYPE,
  delay: PropTypes.number,
  duration: PropTypes.number,
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge'])
});

export default (function (Box) {
  var DocumentedBox = describe(Box).availableAt(getAvailableAtBadge('Box')).description('A flexible box that lays out its contents along a single direction.').usage("import { Box } from 'grommet';\n<Box />");
  DocumentedBox.propTypes = {
    a11yTitle: a11yTitlePropType,
    align: PropTypes.oneOf(['start', 'center', 'end', 'baseline', 'stretch']).description('How to align the contents along the cross axis.'),
    alignContent: PropTypes.oneOf(['start', 'center', 'end', 'between', 'around', 'stretch']).description('How to align the contents when there is extra space in the cross axis.').defaultValue('stretch'),
    alignSelf: PropTypes.oneOf(['start', 'center', 'end', 'stretch']).description('How to align along the cross axis when contained in a Box or along\nthe column axis when contained in a Grid.'),
    animation: PropTypes.oneOfType([ANIMATION_TYPE, ANIMATION_SHAPE, PropTypes.arrayOf(PropTypes.oneOfType([ANIMATION_TYPE, ANIMATION_SHAPE]))]).description('Animation effect(s) to use.\n      \'duration\' and \'delay\' should be in milliseconds.\n      \'jiggle\' and \'pulse\' types are intended for small elements, like icons.'),
    background: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
      color: PropTypes.string,
      dark: PropTypes.bool,
      image: PropTypes.string,
      position: PropTypes.string,
      opacity: PropTypes.oneOfType([PropTypes.oneOf(['weak', 'medium', 'strong']), PropTypes.bool])
    })]).description('Either a color identifier to use for the background color. For example:\n\'neutral-1\'. Or, a \'url()\' for an image. Dark is not needed if color is provided.'),
    basis: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'full', '1/2', '1/3', '2/3', '1/4', '3/4']).description('A fixed or relative size along its container\'s main axis.'),
    border: PropTypes.oneOfType([PropTypes.oneOf(['top', 'left', 'bottom', 'right', 'horizontal', 'vertical', 'all']), PropTypes.shape({
      color: PropTypes.string,
      side: PropTypes.oneOf(['top', 'left', 'bottom', 'right', 'horizontal', 'vertical', 'all']),
      size: PropTypes.oneOf(['small', 'medium', 'large'])
    })]).description('Include a border.'),
    direction: PropTypes.oneOf(['row', 'column']).description('The orientation to layout the child components in.').defaultValue('column'),
    flex: PropTypes.oneOf(['grow', 'shrink', true, false]).description('Whether flex-grow and/or flex-shrink is true.'),
    full: PropTypes.oneOf(['horizontal', 'vertical', true, false, 'grow']).description('Whether the width and/or height should take the full viewport size.'),
    gridArea: PropTypes.string.description('The name of the area to place this Box in inside a parent Grid.'),
    justify: PropTypes.oneOf(['start', 'center', 'between', 'end']).description('How to align the contents along the main axis.'),
    justifySelf: PropTypes.oneOf(['start', 'center', 'end', 'stretch']).description('How to align along the row axis when contained in a Grid.'),
    margin: PropTypes.oneOfType([PropTypes.oneOf(['none'].concat(PAD_SIZES)), PropTypes.shape({
      bottom: PropTypes.oneOf(PAD_SIZES),
      horizontal: PropTypes.oneOf(PAD_SIZES),
      left: PropTypes.oneOf(PAD_SIZES),
      right: PropTypes.oneOf(PAD_SIZES),
      top: PropTypes.oneOf(PAD_SIZES),
      vertical: PropTypes.oneOf(PAD_SIZES)
    })]).description('The amount of margin around the box. An object can be specified to\ndistinguish horizontal margin, vertical margin, and margin on a\nparticular side of the box'),
    overflow: PropTypes.oneOf(['auto', 'hidden', 'scroll']).description('box overflow.'),
    pad: PropTypes.oneOfType([PropTypes.oneOf(['none'].concat(PAD_SIZES)), PropTypes.shape({
      bottom: PropTypes.oneOf(PAD_SIZES),
      horizontal: PropTypes.oneOf(PAD_SIZES),
      left: PropTypes.oneOf(PAD_SIZES),
      right: PropTypes.oneOf(PAD_SIZES),
      top: PropTypes.oneOf(PAD_SIZES),
      vertical: PropTypes.oneOf(PAD_SIZES)
    })]).description('The amount of padding around the box contents. An object can be specified to\ndistinguish horizontal padding, vertical padding, and padding on a\nparticular side of the box'),
    responsive: PropTypes.bool.description('Whether children laid out in a row direction should be switched to a\ncolumn layout when the display area narrows.'),
    reverse: PropTypes.bool.description('Whether to reverse the order of the child components.'),
    round: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'full']).description('How much to round the corners.'),
    tag: PropTypes.string.description('The DOM tag to use for the element.').defaultValue('div'),
    textAlign: PropTypes.oneOf(['start', 'center', 'end']).description('How to align the text inside the box.'),
    wrap: PropTypes.bool.description('Whether children can wrap if they can\'t all fit.')
  };
  return DocumentedBox;
});