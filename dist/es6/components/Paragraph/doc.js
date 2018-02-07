import { describe, PropTypes } from 'react-desc';

import { getAvailableAtBadge } from '../../utils';

export default (function (Paragraph) {
  var DocumentedParagraph = describe(Paragraph).availableAt(getAvailableAtBadge('Paragraph')).description('A paragraph of text.').usage('import { Paragraph } from \'grommet\';\n<Paragraph />');

  DocumentedParagraph.propTypes = {
    margin: PropTypes.oneOfType([PropTypes.oneOf(['none', 'small', 'medium', 'large']), PropTypes.shape({
      bottom: PropTypes.oneOf(['small', 'medium', 'large']),
      top: PropTypes.oneOf(['small', 'medium', 'large'])
    })]).description('The amount of margin above and/or below the paragraph. An object can be\nspecified to distinguish top margin and bottom margin.'),
    size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']).description('The size of the Paragraph text.').defaultValue('medium'),
    textAlign: PropTypes.oneOf(['start', 'center', 'end']).description('How to align the text inside the paragraph.')
  };

  return DocumentedParagraph;
});