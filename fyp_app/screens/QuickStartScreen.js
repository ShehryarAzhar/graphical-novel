import React,{ useState, useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import fetchStory from "../helpers/generateStory";
import AppContext from "../helpers/context";
import GenerationWaitingScreen from "./GenerationWaitingScreen";

const QuickStartScreen = ({navigation}) => {
    
    const {story, setStory} = useContext(AppContext);
    const [isWaiting, setIsWaiting] = useState(false);

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Horror', value: 'horror'},
        {label: 'Comedy', value: 'comedy'},
        {label: 'Adventure', value: 'adventure'},
        {label: 'Fantasy', value: 'fantasy'},
        {label: 'Mystrey', value: 'mystrey'}
    ]);

    const generateStory = () => {
        console.log('here');
        let text; 
        if(value == "comedy")
            text = "Write a Comedy Story"
        else if(value == "horror")
            text = "Write a Horror Story"
        else if(value == "adventure")
            text = "Write a Adventure Story"
        else if(value == "fantasy")
            text = "Write a Fantasy Story"
        else if(value == "mystrey")
            text = "Write a Mystrey Story"

        fetchStory(text, setStory, navigation, setIsWaiting);
    }

    return ( 
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    QUICK START WITH GENRE
                </Text>
            </View>
            {
                isWaiting ?
                <GenerationWaitingScreen />
                : <View style={{flex:1, padding:20}}>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        labelStyle={styles.dropdownLabel}
                        containerStyle={styles.dropdownContainer}
                        style={styles.dropdown}
                        dropDownStyle={styles.dropdownList}
                        placeholder="Select Genre"
                    />
                    <TouchableOpacity  onPress={generateStory}>
                        <Text style={styles.submitBtn}>
                            SUBMIT
                        </Text>
                    </TouchableOpacity>
                </View> 
            }
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
    },

    dropdownLabel: {
        color: '#000',
        fontSize:16,
        textAlign:'center'
    },

    dropdownContainer:{
        marginVertical:15,
        zIndex:2,
        height:50,
    },

    dropdown:{
        height:50
    }

})
 
export default QuickStartScreen;