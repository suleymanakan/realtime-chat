/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
 
} from 'react-native/Libraries/NewAppScreen';
import {Router, Scene,Stack} from 'react-native-router-flux';
import Login from './src/pages/Login';
import ChatList from './src/pages/ChatList';

const App: () => React$Node = () => {
  return (
 
     
      <SafeAreaView>
       <Router>
         <Stack key="root">
           <Scene key="login" component={Login}  initial/>
           <Scene key="logout" component={ChatList} />
         </Stack>
       </Router>
       <Text>asdfsdfasdfas</Text>
       <Login />
      </SafeAreaView>
  
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
