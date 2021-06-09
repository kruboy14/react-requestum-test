import * as historySearchActions from './historySearch';
import * as repoActions from './repo';

const ActionCreators = { ...historySearchActions, ...repoActions };

export default ActionCreators;
