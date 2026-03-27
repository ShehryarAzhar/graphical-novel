import React,{ useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';

const ContinueExistineStoryScreen = ({navigation}) => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Story 1', value: 'story_1'},
        {label: 'Story 2', value: 'story_2'},
        {label: 'Story 3', value: 'story_3'},
        {label: 'Story 4', value: 'story_4'}
    ]);

    return ( 
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    CONTINUE EXISTING STORY
                </Text>
            </View>
            <View style={{flex:1, padding:20}}>
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
                <TouchableOpacity  onPress={() => navigation.navigate('StoryScreenStatic')}>
                    <Text style={styles.submitBtn}>
                        SUBMIT
                    </Text>
                </TouchableOpacity>
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
 
export default ContinueExistineStoryScreen;