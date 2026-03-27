import React,{ useContext, useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import axios from 'axios';
import AppContext from "../helpers/context";
import GenerationWaitingScreen from "./GenerationWaitingScreen";
import fetchStory from "../helpers/generateStory";

const CreateStoryScreen = ({ navigation }) => {

    const {story, setStory} = useContext(AppContext);
    const [isWaiting, setIsWaiting] = useState(false);

    const [text, setText] = useState('');

    const handleTextChange = (newText) => {
        setText(newText);
    };

    const generateStory = () => {
        console.log('here');
        fetchStory(`write horror story about ${text}`, setStory, navigation, setIsWaiting, true);
    }


    return ( 
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    CREATE YOUR OWN STORY
                </Text>
            </View>
            <View style={{flex:1, padding:20}}>
                {
                    isWaiting ?
                    <GenerationWaitingScreen />
                    : 
                    <>
                        <TextInput
                            style={styles.textArea}
                            multiline={true}
                            numberOfLines={4}
                            placeholder="Enter Your Story, Be Expressive......."
                            value={text}
                            onChangeText={handleTextChange}
                        />
                        <TouchableOpacity onPress={generateStory}>
                            <Text style={styles.submitBtn}>
                                SUBMIT
                            </Text>
                        </TouchableOpacity>
                    </>
                }
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#101010'
    },
    header:{
        backgroundColor:'#d9d9d9',
    },
    headerText:{
        textAlign:'center',
        color:'#000',
        fontSize:22,
        paddingVertical:20
    },
    textArea: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius:5,
        padding: 8,
        fontSize: 16,
        minHeight: 250,
        marginVertical: 30,
        backgroundColor:'#fff',
        textAlignVertical:'top'
    },
    submitBtn:{
        paddingVertical:18,
        paddingHorizontal:35,
        backgroundColor:'#fff',
        marginBottom:10,
        marginTop:10,
        textAlign:'center',
        fontSize:16
    }
})
 
export default CreateStoryScreen;