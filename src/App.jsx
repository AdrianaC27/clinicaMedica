import React from "react"
import{ StyleSheet, Text,View } from "react-native";
import Estilo from "./components/estilo";
import Aleatorio from "./components/Aleatorio";
import Texto from "./components/Texto";
// import MinMax from "./components/MinMax";

export default () => {
    return (
        <View style={Estilo.fundo}> 
        {/* <MinMax maior={90} menor={10}/> */}
         <Texto/> 
         <Aleatorio min={1} max={60}/>
         <Aleatorio min={1} max={60}/>
         <Aleatorio min={1} max={60}/>
         <Aleatorio min={1} max={60}/>
         <Aleatorio min={1} max={60}/>
         <Aleatorio min={1} max={60}/>
        </View>
    )
}

const style = StyleSheet.create(
{
    txtG:{
        fontSize: 30,
        textAlign: 'center',
    }
}

)