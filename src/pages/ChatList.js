import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class ChatList extends React.Component{

    render(){
        return(
            <SafeAreaView>
             <TouchableOpacity onPress={()=>Actions.login()}><Text>Geri</Text></TouchableOpacity>
            </SafeAreaView>
        )
    }
}