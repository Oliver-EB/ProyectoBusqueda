import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//Screens
import HomeScreen from "./screens/HomeScren";
import RegisterScreen from "./screens/RegisterScren";
import DetailsScreen from "./screens/DetailsScreen";



const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator 
        initialRouteName="VoiceSearch"
        screenOptions={{
            tabBarActiveTintColor: 'red',
        }}
       >
       
            <Tab.Screen name="Inicio de sesion" component={HomeScreen}/>
            <Tab.Screen name="Registro" component={RegisterScreen}/>
            <Tab.Screen name="VoiceSearch" component={DetailsScreen}
                 options={{
                    headerShown: false,
                    
                        }}
            />
         </Tab.Navigator>
    );
}
export default function Navigation (){
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
}