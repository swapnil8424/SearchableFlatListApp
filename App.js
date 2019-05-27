/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import _ from "lodash";
import { Platform, StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { SearchBar, Avatar, ListItem } from 'react-native-elements'
import FlatListSearch from './src/FlatListSearch';

export default class App extends Component {
  render(){
    return <FlatListSearch/>
  }
}


