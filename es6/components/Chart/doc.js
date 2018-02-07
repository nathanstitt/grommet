import { describe, PropTypes } from 'react-desc';

import { getAvailableAtBadge } from '../../utils';

export default (function (Chart) {
  var DocumentedChart = describe(Chart).availableAt(getAvailableAtBadge('Chart')).description('A graphical chart.').usage("import { Chart } from 'grommet';\n<Chart />");

  DocumentedChart.propTypes = {
    bounds: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).description('The limits for the values, specified as a two dimensional array.\n      If not specified, the bounds will automatically be set to fit\n      the provided values.'),
    color: PropTypes.string.description('A color identifier to use for the graphic color.').defaultValue('accent-1'),
    round: PropTypes.bool.description('Whether to round the line ends.'),
    size: PropTypes.oneOfType([PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'full']), PropTypes.shape({
      height: PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'full']),
      width: PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'full'])
    })]).description('The size of the Chart.').defaultValue({ width: 'medium', height: 'small' }),
    thickness: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']).description('The width of the stroke.').defaultValue('medium'),
    type: PropTypes.oneOf(['bar', 'line', 'area']).description('The visual type of meter.').defaultValue('bar'),
    values: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string, // for accessibility of bars
      value: PropTypes.arrayOf(PropTypes.number).isRequired
    })).description('Array of value objects describing the data.\n      \'value\' is a tuple indicating the coordinate of the value or a triple\n      indicating the x coordinate and a range of two y coordinates.\n      \'label\' is a text string describing it.').isRequired
  };

  return DocumentedChart;
});