import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './src/HOME'
import FORMLOGIN from './src/FORMLOGIN'
import FORMREGISTER from './src/FORMREGISTER'
import FORGOTPASSWORD from './src/FORGOTPASSWORD'
import SPLASHSCREEN from './src/SPLASHSCREEN'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerShow="false">
        <Stack.Screen name="SPLASHSCREEN" component={SPLASHSCREEN}
         options={{
          headerTitle:''
         }}
        
        />
        <Stack.Screen name="Home" component={Home}
        
        options={{
          headerTitle:''
         }}
        
        /> 
        <Stack.Screen name="FORMLOGIN" component={FORMLOGIN}
         options={{
          headerTitle:''
         }}
        
        /> 
        <Stack.Screen name="FORMREGISTER" component={FORMREGISTER}
         options={{
          headerTitle:''
         }}
        
        /> 
        <Stack.Screen name="FORGOTPASSWORD" component={FORGOTPASSWORD} 
         options={{
          headerTitle:''
         }}
        
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
