import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class VmList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up VmList.js!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default VmList
