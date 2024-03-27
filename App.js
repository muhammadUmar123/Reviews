import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MakeAccount from './screens/MakeAccount';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';
import UserDetail from './screens/UserDetail';

import ForgotPassword from './screens/ForgotPassword';


const Stack = createStackNavigator();

export default function App() {
  console.ignoredYellowBox = true
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false}}>
          <Stack.Screen name="MakeAccount" component={MakeAccount} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="UserDetail" component={UserDetail} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />         
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   

  },
  overall: {
    fontSize: 15,
    color: '#A9A9A9',
    fontWeight: '600'
  },
  RatingText: {
    fontSize: 40,
    color: '#000',
    fontWeight: '600',
    width: 100
  },
  UserReview: {
    fontSize: 12,
    color: '#A9A9A9',
    fontWeight: '600',
    marginLeft: 10,
    marginTop: 5
  },
  RatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },

});
