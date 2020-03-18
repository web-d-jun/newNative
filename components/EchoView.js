import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderWidth: 2,
    borderColor: 'red',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 10,
  },
});

const EchoView = props => {
  return (
    <View style={[styles.container, props.sceneStyle]}>
      <Text style={styles.instructions}>routerName: {props.name}</Text>
      <Button title="pop" onPress={Actions.pop} />
    </View>
  );
};

export default EchoView;
