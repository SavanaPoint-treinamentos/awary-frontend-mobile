import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  Keyboard,
  ScrollView
} from "react-native";
import styles from "./style";
 import { useFonts } from "expo-font";


export default function FORMREGISTER({ navigation }) {
  const [fontsLoaded] = useFonts({
    Lobster: require("../../assets/fonts/Lobster/Lobster/Lobster-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.texto}>Criar conta</Text>

      <Pressable onPress={Keyboard.dismiss}>
         <Text style={styles.label}>Escolha um nome de usuario</Text> 
        <TextInput
          style={styles.Input}
        />

         <Text style={styles.label}>Email</Text> 
        <TextInput
          style={styles.Input}
         
        />

      <Text style={styles.label}>Senha</Text> 
        <TextInput
          style={styles.Input}
          
        />

       <View />

       <Text style={styles.label}>Data Nascimento</Text>
        <TextInput
          style={styles.Input2}
         
   />

      <Text style={styles.label}>Cidade</Text>
        <TextInput
          style={styles.Input2}
          placeholder="Cidade"
        />



        <TouchableOpacity style={styles.Button}>
          <Text style={styles.ButtonText}>Criar</Text>
        </TouchableOpacity>

            {/* <View style={styles.EsqueceuContainer}>
               <Text style={styles.textEs}   
               onPress={() => navigation.navigate("FormLogin")}
               
               >Login? Click here</Text>
            
            </View> */}
       
      </Pressable>
    </ScrollView>
  );
}
