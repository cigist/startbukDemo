/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ButtoSave from "./src/components/_ButtonSave";
import LoginContainer from './src/containers/Login/LoginContainer'
import Styles from './src/styles/Styles';

export default class App extends Component{
  render() {
    return (
      <View>
        <LoginContainer />
        {/* <ButtoSave /> */}
      </View>
    );
  }
}

