import { StatusBar } from "react-native";
import React from "react";
import { View, Text , StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";

function RegisterScreen({navigation}){
    return(
    <View style={styles.ScreenRegister}>
       
       <Image uri style={styles.ImageRegister} 
        source={require('../assets/IconoRegister.png')} />
  
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
    export default RegisterScreen;

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
        ScreenRegister: {
          alignItems: "center",
          backgroundColor: "F3F3FF",
          flex:1,
          
       
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
      },
      containerSearch: {
       alignItems: "center",
          backgroundColor: "black",
          flex:1,
      },
    });
  