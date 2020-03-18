/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  Image,
} from 'react-native';
import {
  Router,
  Stack,
  Scene,
  Overlay,
  Modal,
  Lightbox,
  ActionConst,
  Reducer,
} from 'react-native-router-flux';
import EchoView from './components/EchoView';
import Launch from './components/Launch';
import Login from './components/Login';

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log('reducer: ACTION:', action);
    return defaultReducer(state, action);
  };
};

const stateHandler = (prevState, newState, action) => {
  console.log('onStateChange: ACTION:', action);
};

const App = () => {
  return (
    <Router sceneStyle={styles.scene}>
      <Overlay key="overlay">
        <Modal key="modal" hideNavBar>
          <Lightbox key="lightbox">
            <Stack key="root" titleStyle={{alignSelf: 'center'}} hideNavBar>
              <Scene key="echo" component={EchoView} back clone />
              <Scene
                key="launch"
                component={Launch}
                title="Launch"
                initial
                type={ActionConst.REPLACE}
              />
            </Stack>
          </Lightbox>
          <Stack key="login" path="login/:data">
            <Scene
              key="loginModal"
              component={Login}
              onExit={() => console.log('Login: onExit')}
            />
          </Stack>
        </Modal>
      </Overlay>
    </Router>
  );
};

export default App;

const styles = StyleSheet.create({
  scene: {
    backgroundColor: '#F5FCFF',
    shadowOpacity: 1,
    shadowRadius: 3,
  },
});
