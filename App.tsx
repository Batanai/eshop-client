/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './src/app/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <View>Start page</View>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
