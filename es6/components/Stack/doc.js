import { describe, PropTypes } from 'react-desc';

import { getAvailableAtBadge } from '../../utils';

export default (function (Stack) {
  var DocumentedStack = describe(Stack).availableAt(getAvailableAtBadge('Stack')).description('Stacks components on top of the first child component.').usage('import { Stack } from \'grommet\';\n<Stack />');

  DocumentedStack.propTypes = {
    anchor: PropTypes.oneOf(['center', 'left', 'right', 'top', 'bottom', 'top-left', 'bottom-left', 'top-right', 'bottom-right']).description('Where to anchor children from. If not specified, children fill the\nguiding child\'s area.'),
    guidingChild: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['first', 'last'])]).description('Which child to guide layout from. All other children will be positioned\n      within that area.').defaultValue('first')
  };

  return DocumentedStack;
});