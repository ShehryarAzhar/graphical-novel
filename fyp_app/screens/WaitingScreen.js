import React from "react";
import {View, StyleSheet, Image, ActivityIndicator} from "react-native";

const WaitingScreen = () => {
    return ( 
        <View style={styles.container}>
                <View style={{width:'100%', flex:1}}>
                    <View style={styles.inner}>
                        <Image source={require('../assets/logo.png')} style={{alignSelf:'center', width:150, height:150, marginBottom:15, marginTop:-100}}/>
                        <ActivityIndicator color="#fff" size={52}/>
                    </View>
                </View>

        </View>
    );
}
 
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#101010",
        justifyContent:"space-between"
    },
    inner:{
        flex:1,
        justifyContent:'center',
        marginTop:-50
    },
    heading:{
        textAlign:'center',
        fontSize:28,
        color:'#fff',
    },
    continueButton:{
        backgroundColor:'#fff',
        alignSelf:'center',
        width:60,
        height:60,
        marginTop:20,
        alignItems:'center',
        borderRadius:50
    }
})
 
export default WaitingScreen;