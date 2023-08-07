import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './style';
import { useFonts } from "expo-font";

export default function Home({navigation}){

    const [fontsLoaded] = useFonts({
      Lobster: require("../../assets/fonts/Lobster/Lobster/Lobster-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
    
   return(
   <View style = {styles.container}>
        <Text style = {styles.texto}> Awary </Text>
        <Text style = {styles.Welcome}> Welcome </Text>

        <TouchableOpacity style = {styles.Button} 
          onPress={() => navigation.navigate("FormLogin")}>
           <Text style = {styles.ButtonText}>GET STARTED</Text>
        </TouchableOpacity>
    </View>
   )
}