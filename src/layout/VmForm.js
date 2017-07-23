import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class VmForm extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up VmForm.js!</Text>
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

export default VmForm
