import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigators/AppNavigator';

export default (state, action) => {
  let nextState;
  switch (action.type) {
    case 'VmForm':
      console.log("login");
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'VmForm' }),
        state
      );
      break;
    case 'Logout':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'VmForm' }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
};
