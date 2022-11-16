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
      secureTextEntry={true}
      style={styles.inputs}
      placeholder="Password"/>

      <StatusBar style="auto"/>
     
      <TouchableOpacity
        onPress={() => navigation.navigate('Details')}
        style={styles.button}>
        <Text style={styles.btnText}>Iniciar sesion</Text>
         </TouchableOpacity>

         <Text style={styles.Subtituloo}>---------------------------------------o----------------------------------------</Text>
       
         <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
        style={styles.button}>
        <Text style={styles.btnText}>Crear cuenta</Text>
         </TouchableOpacity>
      
      </View>
      </View>
  );
}

function RegisterScreen({navigation}){
  return(
  <View style={styles.ScreenRegister}>
     
     <Image uri style={styles.ImageRegister} 
      source={require('./assets/IconoRegister.png')} />

<Text style={styles.RegisterTxt}>Create account,</Text>
<Text style={styles.subTxt}>sign up to get started!</Text>

<TextInput
      style={styles.inputs}
      placeholder="UserName"
      />

<TextInput
      style={styles.inputs}
      placeholder="Email"
      />

<TextInput
secureTextEntry={true}
      style={styles.inputs}
      placeholder="Password"
      />

<TextInput
secureTextEntry={true}
      style={styles.inputs}
      placeholder="Confirm Password"
      />

        <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.button}>
        <Text style={styles.btnText}>Login</Text>
         </TouchableOpacity>

         
         <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.buttonRedSocial}>
        <Text style={styles.btnTextToRegister}>Connect with Facebook</Text>
         </TouchableOpacity>

         <Text style={styles.subTxtSignUp}>I'm already a member. Sign Up</Text>
         
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
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'F3F3FF',
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
    width: '40%',
    height: '25%',
    borderRadius: 30,
  },
  button:  {
    marginTop: 15,
    backgroundColor: "#ADAAAB",
    width: "80%",
    height: "8%",
    borderRadius: 15,
    alignItems: "center",

  },
  btnText: {
    marginTop:10,
    fontFamily: "Roboto",
 fontSize: 25,
 color: "Black",
  }, 
   Subtituloo: {
    marginTop:15,
    fontSize: 20,
    color: 'blue'
  }, 
  registro:{
    marginTop:3,
    alignItems: "center",
    fontSize:20,
color: "black",

  },


  ScreenRegister: {
    alignItems: "center",
    backgroundColor: "F3F3FF",
    flex:1,
    
 
  },
 RegisterTxt: {
 paddingRight:80,
  marginTop:30,
  fontSize: 40,
  color: '#181818',
  fontWeight: 'bold'
 },
 subTxt: {
  paddingRight:140,
  fontSize: 20,
  color: '#181818',
  fontWeight:'normal',
 },
 ImageRegister: {
  marginTop: 30,
  width: '30%',
  height: '16%',
  borderRadius: 60,
 },
  buttonRedSocial: {
   marginTop:20,
   display: 'flex',
   flexDirection: 'column',
   backgroundColor: "white",
   width: "80%"  ,
   height: "8%",
   borderRadius: 30,
  
  },
btnTextToRegister: {
textAlign: 'center', 
paddingTop: 20,
fontSize: 20,
},
subTxtSignUp: {
  paddingTop: 20,
  fontSize: 20,
  color: '#181818',
  fontWeight:'normal',
}
});
