import { StatusBar } from "expo-status-bar";
import React from "react";
import {StyleSheet, Text,View, TextInput, Image, Button, TouchableOpacity} from 'react-native'


export default function app(){
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
     
      <TouchableOpacity
        onPress={() => alert('Haz accedido a tu cuenta')}
        style={styles.button}>
        <Text style={styles.btnText}>Iniciar sesion</Text>
      </TouchableOpacity>

      <Text style={styles.Subtituloo}>---------------------------------------o----------------------------------------</Text>
      <Text style={styles.registro}>Aun no te haz registrado? </Text>

      <TouchableOpacity
        onPress={() => alert('Haz accedido a tu cuenta de google')}
        style={styles.btnRegister}>
          </TouchableOpacity>

      </View>
      </View>
  )
};

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
    marginTop: 30,
    width: '60%',
    height: '30%',
    borderRadius: 30,
  },
  button:  {
    marginTop: 25,
    backgroundColor: "#5EB4F6",
    width: "60%",
    height: "7%",
    borderRadius: 30,
    alignItems: "center",
    
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
