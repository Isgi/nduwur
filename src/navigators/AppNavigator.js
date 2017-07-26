import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import VmList from '../layout/VmList';
import VmDetail from '../layout/VmDetail';
import VmForm from '../layout/VmForm';

export const AppNavigator = StackNavigator({
  VmList: { screen: VmList },
  VmDetail: { screen: VmDetail },
  VmForm: { screen: VmForm }
});

const AppWithNavigationState = ({dispatch, nav}) => {
  return (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
  );
}

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState)
