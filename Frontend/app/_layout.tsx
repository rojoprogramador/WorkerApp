//! GENERAL Layout
//? Libraries.
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Screens/StackNavigation/login';
import ServReq_PhaseOne from './Screens/StackNavigation/serviceRequest_phase1';
import TabLayout from './Screens/TabNavigation/_layout';

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="Index" component={TabLayout} options={{headerShown: false}}/>
          <Stack.Screen name="ServRequest_P1" component={ServReq_PhaseOne} options={{
            headerShown: true, 
            title: "¿Cómo podemos ayudarte?",
            headerStyle:{
              backgroundColor: "#f2c70f"
            }
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
