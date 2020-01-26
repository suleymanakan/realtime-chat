import React from 'react';
import { SafeAreaView ,Text ,StyleSheet, TouchableOpacity} from 'react-native';

import { Actions } from 'react-native-router-flux';


export default class Login extends React.Component{

    render(){
        return(
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={styles.loginBtn} onPress={()=>Actions.chatlist()}>
                    <Text style={styles.loginTxt}>Login</Text>
                </TouchableOpacity>
               
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        margin:16,
        justifyContent:"center",
        
    },
    loginBtn : {
        backgroundColor:"#45cdfd",
        justifyContent: "center",
        alignItems:"center",
        height:48

    },
    loginTxt : {
        color:"cyan",
        fontSize:16

    }
})