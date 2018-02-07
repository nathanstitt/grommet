import { describe, PropTypes } from 'react-desc';

import { a11yTitlePropType, backgroundPropType, getAvailableAtBadge } from '../../utils';

export default (function (Select) {
  var DocumentedSelect = describe(Select).availableAt(getAvailableAtBadge('Select')).description('An select-like field with optional search capability.').usage('import { Select } from \'grommet\';\n<Select />');

  DocumentedSelect.propTypes = {
    a11yTitle: a11yTitlePropType,
    activeOptionIndex: PropTypes.number.description('Highlight a given option at the provided index.'),
    background: backgroundPropType,
    children: PropTypes.func.description('Function that will be called when each option is rendered.'),
    dropSize: PropTypes.string.description('Size of the options container inside the Select drop.'),
    focusIndicator: PropTypes.bool.description('Whether when \'plain\' it should receive a focus outline.'),
    onChange: PropTypes.func.description('Function that will be called when the user selects an option.'),
    onClose: PropTypes.func.description('Function that will be called when the Select drop closes.'),
    onSearch: PropTypes.func.description('Function that will be called when the user types in the search input.\nIf this property is not provided, no search field will be rendered.'),
    open: PropTypes.bool.description('Whether the Select drop should be open or not.'),
    options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.object])).description('Options can be either a string or an object. If an object is used, use children callback\nin order to render anything based on the current item.').isRequired,
    placeholder: PropTypes.string.description('Placeholder text to use when no value is provided.'),
    plain: PropTypes.bool.description('Whether this is a plain Select input with no border or padding.'),
    searchPlaceholder: PropTypes.string.description('Placeholder text to use in the search box when the search input is empty.'),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.object]).description('Currently selected value.')
  };

  return DocumentedSelect;
});