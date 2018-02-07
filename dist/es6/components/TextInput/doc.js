import { describe, PropTypes } from 'react-desc';

import { getAvailableAtBadge } from '../../utils';

export default (function (TextInput) {
  var DocumentedTextInput = describe(TextInput).availableAt(getAvailableAtBadge('TextInput')).description('A text input field with optional suggestions.').usage('import { TextInput } from \'grommet\';\n<TextInput id=\'item\' name=\'item\' />');

  DocumentedTextInput.propTypes = {
    defaultValue: PropTypes.string.description('What text to start with in the input.'),
    id: PropTypes.string.description('The id attribute of the input.'),
    focusIndicator: PropTypes.bool.description('Whether the plain text input should receive a focus outline.'),
    messages: PropTypes.shape({
      enterSelect: PropTypes.string,
      suggestionsCount: PropTypes.string,
      suggestionsExist: PropTypes.string,
      suggestionIsOpen: PropTypes.string
    }).description('Custom messages for TextInput. Used for accessibility by screen readers.').defaultValue({
      enterSelect: '(Press Enter to Select)',
      suggestionsCount: 'suggestions available',
      suggestionsExist: 'This input has suggestions use arrow keys to navigate',
      suggestionIsOpen: 'Suggestions drop is open, continue to use arrow keys to navigate'
    }),
    name: PropTypes.string.description('The name attribute of the input.'),
    onInput: PropTypes.func.description('Function that will be called when the user types in the input.'),
    onSelect: PropTypes.func.description('Function that will be called when the user selects a suggestion.\nThe suggestion contains the object chosen from the supplied suggestions.'),
    placeholder: PropTypes.string.description('Placeholder text to use when no value is provided.'),
    plain: PropTypes.bool.description('Whether this is a plain input with no border or padding.\nOnly use this when the containing context provides sufficient affordance'),
    size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']).description('The size of the TextInput.'),
    suggestions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({
      label: PropTypes.node,
      value: PropTypes.any
    }), PropTypes.string])).description('Suggestions to show. It is recommended to avoid showing too many\nsuggestions and instead rely on the user to type more.'),
    value: PropTypes.string.description('What text to put in the input.')
  };

  return DocumentedTextInput;
});