import React, { useContext } from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, Pressable, Button} from "react-native";
import AppContext from "../helpers/context";
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger, closeMenu } from "react-native-popup-menu";
import { Entypo } from "@expo/vector-icons";

const MainScreen = ({ navigation }) => {

    const {logoutSuccessful} = useContext(AppContext);

    return ( 
        <View style={styles.container}>
                <View style={{width:'100%', flex:1}}>
                    <View style={{height:140, marginTop:30}}> 
                    <MenuProvider style={{ width:'50%', alignSelf:'flex-end'}}>
                        <Menu>
                        <MenuTrigger
                            
                            customStyles={{
                            triggerWrapper: {
                                // top: -40,
                                backgroundColor:'#fff',
                                color:'blue',
                                fontSize:24,
                                width:40,
                                height: 40,
                                marginRight:20,
                                marginTop:10,
                                borderRadius:50,
                                alignItems:'center',
                                justifyContent:'center',
                                alignSelf:'flex-end'
                            },
                            
                            }}
                        >
                            <Entypo name="dots-three-vertical" size={24} color="black" />
                        </MenuTrigger>
                        <MenuOptions>
                            <MenuOption onSelect={logoutSuccessful} text="Logout" />
                            <MenuOption onSelect={() => {}} text="Setting" />
                        </MenuOptions>
                        </Menu>
                    </MenuProvider>
                    
                    </View>
                    <View style={styles.inner}>
                        <Image source={require('../assets/logo.png')} style={{alignSelf:'center', width:150, height:150, marginBottom:15, marginTop:-100}}/>
                        <Text style={styles.heading}>
                            PROJECT 
                        </Text>
                        <Text style={styles.heading}>
                            BANDERSNATCH 
                        </Text>
                        <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('StorySelection')}>
                            <Text style={{paddingTop:10, fontSize:28}}>
                                <Entypo name="triangle-right" size={40} color="black" />
                            </Text>
                        </TouchableOpacity>
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
 
export default MainScreen;