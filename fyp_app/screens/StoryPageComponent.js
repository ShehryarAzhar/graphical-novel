import React,{ useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";

const StoryPageComponent = (props) => {

    const [current, setCurrent] = useState("test");

    const [choiceMade, setChoiceMade] = useState(false);

    return ( 
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Page # {props.page.pageNum}
                </Text>
            </View>
            <View style={styles.innerContainer}>
                <Image source={{uri:props.page.imagePath}} style={{width:350, height:350, marginVertical: 15, resizeMode:'contain',alignSelf:'center', borderWidth:2, borderColor:'lightgrey',  backgroundColor:'lightgrey'}} />
                {
                    props.page.story.map((para, index) => {
                        return(
                            <Text style={styles.storyText} key={index}>
                                {para.text}
                            </Text>
                        )
                    })
                }
                {
                    (props.page.choices) && 
                    <RadioButtonGroup
                        containerStyle={styles.radioButtonGroup}
                        selected={current}
                        onSelected={(value) => setCurrent(value)}
                        radioBackground="#fff"
                        radioStyle={{marginVertical:14, height:20, width:20}}
                    >
                        { 
                            props.page.choices.map((choice, index) => {
                                return (
                                    <RadioButtonItem
                                        key={index}
                                        value={choice.value}
                                        label={
                                            <Text style={styles.choiceLabel}>
                                                {choice.label}
                                            </Text>
                                        }
                                    />
                                )
                            })
                        }
                    </RadioButtonGroup>
                }
                <View style={{flexDirection:'row'}}>
                    {
                        props.currentPage != 1 && 
                        <View style={{flex:1}}>
                            <TouchableOpacity style={styles.choiceBtns} onPress={()=>{setChoiceMade(true);props.setCurrentPage(prev=> prev-1)}}>
                                <Text style={styles.choiceBtnsText}>
                                    Prev Page
                                </Text>
                            </TouchableOpacity>
                        </View>
                    }
                    {
                        props.length != props.currentPage &&
                        <View style={{flex:1}}>
                            <TouchableOpacity style={styles.choiceBtns} onPress={()=>{setChoiceMade(true);props.setCurrentPage(prev=> prev+1)}}>
                                <Text style={styles.choiceBtnsText}>
                                    Next Page
                                </Text>
                            </TouchableOpacity>
                        </View>
                    }
                    
                </View>
            </View>
        </ScrollView>
     );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#101010'
    },
    innerContainer:{
        flex:1,
        paddingHorizontal:10,
        paddingVertical:15,
    },
    storyText:{
        color:'#fff',
        fontSize:19,
        marginBottom:10,
        textAlign:'justify'
    },
    header:{
        backgroundColor:'#d9d9d9',
    },
    headerText:{
        textAlign:'right',
        color:'#000',
        fontSize:18,
        paddingVertical:12,
        paddingHorizontal:10
    },
    radioButtonGroup:{ 
        marginBottom: 10, 
        borderWidth:1, 
        padding:15, 
        borderColor:'grey', 
        borderRadius:10,
        marginTop:15
    },
    choiceLabel:{ 
        color: "#fff", 
        paddingLeft:10, 
        fontSize:17
    },
    choiceBtns:{
        paddingVertical:13,
        paddingHorizontal:35,
        backgroundColor:'#fff',
        marginBottom:10,
        marginTop:10,
    },

    choiceBtnsText:{
        fontSize:17,
        textAlign:'center'
    }
})
 
export default StoryPageComponent;