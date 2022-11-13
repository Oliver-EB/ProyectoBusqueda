import { StatusBar } from "expo-status-bar";
import * as React from 'react';
import {StyleSheet, Text,View, TextInput, Image, Button, TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return(
    <View style={styles.mainContainer}>
    <View style={styles.container}>
      <Image uri style={styles.Image} 
      source={require('./assets/logo.png')} />
      <Text style={styles.titulo}>Hello</Text>
      <Text style={styles.Subtitulo}>Sign in to your account </Text>
      <TextInput
      style={styles.inputs}
      placeholder="olive7jimene2@gmail.com"
      />
      <TextInput
      style={styles.inputs}
      placeholder="Password"/>

      <StatusBar style="auto"/>
     
      <Button 
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
         style={{borderRadius: '5px'}}
      />
      </View>
      </View>
  );
}

function DetailsScreen({navigation}){
return(
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F5FCFF',
flex: 1
  },
  container: {
    
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  titulo: {
    fontSize: 80,
    color: '#181818',
    fontWeight: 'bold'
  },
  Subtitulo: {
    fontSize: 20,
    color: 'blue'
  },
  inputs: {
      borderWidth: 1,
      borderColor: 'black', 
      padding: 10,
      paddingStart:20,
      width: '80%',
      marginTop: 20,
      borderRadius: 15,
      backgroundColor: 'white'
  },
  Image: {
    marginTop: 10,
    width: '60%',
    height: '40%',
    borderRadius: 30,
  },
  button:  {
   color: 'black',

  },
  btnText: {
    marginTop:2,
 fontSize: 30,
 color: "white",
  }, 
   Subtituloo: {
    marginTop:15,
    fontSize: 20,
    color: 'blue'
  }, 
  registro:{
    marginTop:6,
    alignItems: "center",
    fontSize:20,
color: "black",

  },
  btnRegister : {
    marginTop: 25,
    backgroundColor: "#5EB4F6",
    width: "15%",
    height: "7%",
    borderRadius: 30,
    alignItems: "center",
  },


});
