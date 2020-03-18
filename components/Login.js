import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const Login = props => {
  const title = props.title || 'No Title';
  const data = props.data || 'No Data';
  console.log('Login RENDER');
  return (
    <View style={[styles.container, props.style]}>
      <Text>Login page 1</Text>
    </View>
  );
};

export default Login;
