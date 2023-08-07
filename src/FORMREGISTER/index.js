import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  Keyboard,
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
    <View style={styles.container}>
      <Text style={styles.texto}>Create an Account</Text>

      <Pressable onPress={Keyboard.dismiss}>
        {/* <Text style={styles.label}>Email</Text> */}
        <TextInput
          style={styles.Input}
          placeholder="Username"
        />

        {/* <Text style={styles.label}>Password</Text> */}
        <TextInput
          style={styles.Input}
          placeholder="Email"
        />

        <TextInput
          style={styles.Input}
          placeholder="Senha"
        />

       <View />


        <TextInput
          style={styles.Input2}
          placeholder="Data Nascimento"
        />

        <TextInput
          style={styles.Input}
          placeholder="Cidade"
        />



        <TouchableOpacity style={styles.Button}>
          <Text style={styles.ButtonText}>Create</Text>
        </TouchableOpacity>

            {/* <View style={styles.EsqueceuContainer}>
               <Text style={styles.textEs}   
               onPress={() => navigation.navigate("FormLogin")}
               
               >Login? Click here</Text>
            
            </View> */}
       
      </Pressable>
    </View>
  );
}
