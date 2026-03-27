import { View, Text, ActivityIndicator } from "react-native";

const GenerationWaitingScreen = () => {
    return ( 
        <View style={{justifyContent:'center', flex:1}}>
            <Text style={{textAlign:'center', fontSize:30, color:'#fff', marginBottom:50}}>Generating Your Story</Text>
            <ActivityIndicator color="#fff" size={52}/>
        </View>
    );
}
 
export default GenerationWaitingScreen;