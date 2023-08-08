import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './src/HOME'
import FORMLOGIN from './src/FORMLOGIN'
import FORMREGISTER from './src/FORMREGISTER'
import FORGOTPASSWORD from './src/FORGOTPASSWORD'
import SPLASHSCREEN from './src/SPLASHSCREEN'

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    {/* Adicione as telas desejadas no seu StackNavigator */}
    { <Stack.Screen name="Home" component={Home} /> }
    { <Stack.Screen name="FORMLOGIN" component={FORMLOGIN} /> }
    { <Stack.Screen name="FORMREGISTER" component={FORMREGISTER} /> }
    { <Stack.Screen name="FORGOTPASSWORD" component={FORGOTPASSWORD} /> }
    
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="SPLASHSCREEN" component={SPLASHSCREEN} />
        <Stack.Screen name="Home" component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
