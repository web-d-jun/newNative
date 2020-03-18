import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

const loginHandler = () => {
  Actions.login({data: 'Custom data', title: 'Custom title'});
};

const registerHandler = () => {
  Actions.register();
};

const Launch = props => {
  return (
    <View style={styles.container} {...props}>
      <Text>Welcome</Text>
      <Button title="Go to Login" onPress={loginHandler} />
      {/* <Button title="Go to Register page" onPress={registerHandler} /> */}
    </View>
  );
};

export default Launch;
