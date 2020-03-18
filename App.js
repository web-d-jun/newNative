/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
  Router,
  Stack,
  Scene,
  ActionConst,
} from 'react-native-router-flux';
import EchoView from './components/EchoView';
import Launch from './components/Launch';

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
