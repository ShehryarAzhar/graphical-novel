import React,{ useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import StoryPageComponent from "./StoryPageComponent";
import data from "../helpers/data";

const StoryScreenStatic = () => {

    const [currentPage, setCurrentPage] = useState(data[0].pageNum);

    const currentPageContent = data.filter(d => d.pageNum == currentPage);

    return ( 
        <StoryPageComponent page={currentPageContent[0]} length={data.length} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
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
        fontSize:17,
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
 
export default StoryScreenStatic;