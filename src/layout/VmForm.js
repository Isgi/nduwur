import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TextInput, ScrollView, Button } from 'react-native';

import { createVm } from '../actions'

class VmForm extends React.Component {
  constructor() {
    super();
    this.state = {
      vmName: '',
      os: '',
      ipAddress: '',
      port: '',
      user: '',
      password: '',
      appName: '',
      responsible: '',
      vlan: ''
    };
  }
  handleSave = () => {
    this.props.createVm(this.state)
  }
  disabledSave = () => {
    const { vmName, os, ipAddress, port, user, password, appName, responsible, vlan } = this.state;
    if (vmName == '' || os == '' || ipAddress == ''|| port == '' || user == '' || password == '' || appName == ''|| responsible == ''|| vlan == '') {
      return true
    }
    return false
  }
  render() {
    console.log(this.props);
    const { vmName, os, ipAddress, port, user, password, appName, responsible, vlan } = this.state
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.containerForm}>
            <Text style={{fontWeight:'bold'}}>Vm name</Text>
            <TextInput
              style={{height: 30, borderColor: 'gray', borderWidth: 1, padding: 5, borderRadius:3  }}
              onChangeText={(text) => this.setState({vmName:text})}
              autoFocus={true}
              value={vmName}
              returnKeyType='next'
            />
          </View>
          <View style={styles.containerForm}>
            <Text style={{fontWeight:'bold'}}>OS</Text>
            <TextInput
              style={{height: 30, borderColor: 'gray', borderWidth: 1, padding: 5, borderRadius:3  }}
              onChangeText={(text) => this.setState({os:text})}
              value={this.state.os}
              returnKeyType='next'
            />
          </View>
          <View style={styles.containerForm}>
            <Text style={{fontWeight:'bold'}}>Ip Address</Text>
            <TextInput
              style={{height: 30, borderColor: 'gray', borderWidth: 1, padding: 5, borderRadius:3  }}
              onChangeText={(text) => this.setState({ipAddress:text})}
              value={this.state.ipAddress}
              returnKeyType='next'
            />
          </View>
          <View style={styles.containerForm}>
            <Text style={{fontWeight:'bold'}}>Port</Text>
            <TextInput
              style={{height: 30, borderColor: 'gray', borderWidth: 1, padding: 5, borderRadius:3  }}
              onChangeText={(text) => this.setState({port:text})}
              value={this.state.port}
              returnKeyType='next'
            />
          </View>
          <View style={styles.containerForm}>
            <Text style={{fontWeight:'bold'}}>User</Text>
            <TextInput
              style={{height: 30, borderColor: 'gray', borderWidth: 1, padding: 5, borderRadius:3  }}
              onChangeText={(text) => this.setState({user:text})}
              value={this.state.user}
              returnKeyType='next'
            />
          </View>
          <View style={styles.containerForm}>
            <Text style={{fontWeight:'bold'}}>Password</Text>
            <TextInput
              style={{height: 30, borderColor: 'gray', borderWidth: 1, padding: 5, borderRadius:3  }}
              onChangeText={(text) => this.setState({password:text})}
              value={this.state.password}
              returnKeyType='next'
            />
          </View>
          <View style={styles.containerForm}>
            <Text style={{fontWeight:'bold'}}>App Name</Text>
            <TextInput
              style={{height: 30, borderColor: 'gray', borderWidth: 1, padding: 5, borderRadius:3  }}
              onChangeText={(text) => this.setState({appName:text})}
              value={this.state.appName}
              returnKeyType='next'
            />
          </View>
          <View style={styles.containerForm}>
            <Text style={{fontWeight:'bold'}}>Responsible</Text>
            <TextInput
              style={{height: 30, borderColor: 'gray', borderWidth: 1, padding: 5, borderRadius:3  }}
              onChangeText={(text) => this.setState({responsible:text})}
              value={this.state.responsible}
              returnKeyType='next'
            />
          </View>
          <View style={styles.containerForm}>
            <Text style={{fontWeight:'bold'}}>Vlan</Text>
            <TextInput
              style={{height: 30, borderColor: 'gray', borderWidth: 1, padding: 5, borderRadius:3  }}
              onChangeText={(text) => this.setState({vlan:text})}
              value={this.state.vlan}
              returnKeyType='done'
            />
          </View>
          <View style={styles.containerForm}>
            <Button title="Save" disabled={this.disabledSave()} onPress={this.handleSave}/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

VmForm.navigationOptions = {
  title : "New VM"
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  containerForm: {
    backgroundColor:'#eee',
    padding:10,
    marginBottom:10,
    marginLeft:10,
    marginRight:10,
    borderRadius:5
  }
});

export default connect(null,{createVm})(VmForm)
