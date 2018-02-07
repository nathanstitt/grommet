import { describe, PropTypes } from 'react-desc';

import { getAvailableAtBadge } from '../../utils';

import SkipLink from './SkipLink';

export default (function (SkipLinks) {
  var DocumentedSkipLinks = describe(SkipLinks).availableAt(getAvailableAtBadge('SkipLinks')).description('Describe a list of elements to skip to.').usage('import { SkipLinks } from \'grommet\';\n<SkipLinks elements={[\'main\', \'footer\']} />');

  DocumentedSkipLinks.propTypes = {
    children: PropTypes.arrayOf(PropTypes.instanceOf(SkipLink)).description('SkipLink array').isRequired,
    messages: PropTypes.shape({
      skipTo: PropTypes.string
    }).description('Custom messages for SkipLinks. Used for accessibility by screen readers.')
  };

  return DocumentedSkipLinks;
});