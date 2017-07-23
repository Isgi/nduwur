import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import Signin from '../layout/Signin';
import VmList from '../layout/VmList';
import VmDetail from '../layout/VmDetail';

export const AppNavigator = StackNavigator({
  Signin: { screen: Signin },
  Main: { screen: VmList },
  Detail: { screen: Detail }
});

const AppWithNavigationState = ({dispatch, nav}) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: Proptypes.func.isRequired,
  nav: Proptypes.object.isRequired
};

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState)
