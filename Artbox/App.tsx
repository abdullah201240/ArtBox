import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/home';
import Signin from './src/components/signin';
import Signup from './src/components/signup';
import Main from './src/components/main';
import Middle from './src/components/middle';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Opening" component={Main} options={{ headerShown: false }}  />
        <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }}  />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}  />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}  />
        <Stack.Screen name="Middle" component={Middle} options={{ headerShown: false }}  />

      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


