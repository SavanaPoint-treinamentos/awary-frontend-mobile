import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';



const SPLASHSCREEN = ({ navigation }) => {
  useEffect(() => {
    // Simula algum carregamento assíncrono
    setTimeout(() => {
    //   SplashScreen.hide();
      navigation.replace('Home');
    }, 2000); // Tempo de exibição da SplashScreen em milissegundos (2 segundos neste exemplo)
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Logopng.png')} // Substitua pelo caminho da sua imagem de SplashScreen
         style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: '80%',
    height: '80%',
  },
});

export default SPLASHSCREEN;
