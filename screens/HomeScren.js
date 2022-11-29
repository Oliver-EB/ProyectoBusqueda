import { StatusBar } from "react-native";
import React from "react";
import { View, Text , StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";

function HomeScreen({ navigation }) {
    return(
      
      <View style={styles.mainContainer}>
      <View style={styles.container}>
         
        <Image uri style={styles.Image} 
        source={require('../assets/logo.png')} />
        
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
  
           <Text style={styles.Subtituloo}>---------------------------------o-----------------------------------</Text>
         
           <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          style={styles.button}>
          <Text style={styles.btnText}>Crear cuenta</Text>
           </TouchableOpacity>
        
        </View>
        </View>
    );
  }
  export default HomeScreen;


  const styles = StyleSheet.create({
    mainContainer: {
    
      backgroundColor: 'F3F3FF',
  flex: 1
    },
    container: {
      position: 'relative',
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
})