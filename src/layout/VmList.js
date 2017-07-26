import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

class VmList extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <View style={styles.container}>
        <Text>Open up VmList.js!</Text>
      </View>
    );
  }
}

VmList.navigationOptions = ({navigation}) => {
  // console.log(navigation);
  return {
    title: 'VM LIST',
    headerRight: (
      <Button
        title="New VM"
        onPress={() => navigation.dispatch({type:'VmForm'})}
      />
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default VmList
