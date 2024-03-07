import React from "react";
import { StyleSheet, View,Text } from "react-native";
import Estilo from "./estilo"


export default props =>{
    
    
   
 return(
    <View>
        
        <Text style = {style.txtTexto}>Aleatório</Text>
    </View>
 )


}
const style = StyleSheet.create(
{
    txtTexto :{
        fontSize:50,
        margin: 30,
        color:'#FFFDCB'

        
    }
}

)
