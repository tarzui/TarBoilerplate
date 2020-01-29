import React from 'react';
import {HelloWorld} from '_atoms';
import {View} from 'react-native';

const App = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <HelloWorld name="Chakri" />
  </View>
);

export default App;
