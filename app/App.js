import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstPage from "../components/FirstPage";
import LoginPage from '../components/LoginPage';
import SignUpPage from "../components/SignUpPage";
import HomePage from "../components/HomePage";
import AddPetPage from "../components/AddPetPage";
import PetDetailsPage from "../components/PetDetailsPage";
import ChatPage from "../components/ChatPage";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="SignUp" component={SignUpPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="AddPet" component={AddPetPage} />
        <Stack.Screen name="PetDetails" component={PetDetailsPage} />
        <Stack.Screen name="Chat" component={ChatPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
