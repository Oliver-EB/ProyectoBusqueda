import React, {useState, useEffect} from 'react';
 
// importar todos los componentes que vamos a utilizar
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
 
// import Voice
import Voice from 'react-native-voice';
 
const DetailsScreen = () => {
  const [pitch, setPitch] = useState('');
  const [error, setError] = useState('');
  const [end, setEnd] = useState('');
  const [started, setStarted] = useState('');
  const [results, setResults] = useState([]);
  const [partialResults, setPartialResults] = useState([]);
 
  useEffect(() => {
    //Configuración de devoluciones de llamada para el estado del proceso
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechPartialResults = onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;
 
    return () => {
      //destruir el proceso después de cambiar la pantalla
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);
 
  const onSpeechStart = (e) => {
    //Se invoca cuando se llama a .start() sin error
    console.log('onSpeechStart: ', e);
    setStarted('√');
  };
 
  const onSpeechEnd = (e) => {
    //Se invoca cuando SpeechRecognizer detiene el reconocimiento
    console.log('onSpeechEnd: ', e);
    setEnd('√');
  };
 
  const onSpeechError = (e) => {
    //Se invoca cuando se produce un error.
    console.log('onSpeechError: ', e);
    setError(JSON.stringify(e.error));
  };
 
  const onSpeechResults = (e) => {
    //Se invoca cuando SpeechRecognizer termina de reconocer
    console.log('onSpeechResults: ', e);
    setResults(e.value);
  };
 
  const onSpeechPartialResults = (e) => {
    //Se invoca cuando se calcula cualquier resultado.
    console.log('onSpeechPartialResults: ', e);
    setPartialResults(e.value);
  };
 
  const onSpeechVolumeChanged = (e) => {
    //Se invoca cuando cambia el tono que se reconoce
    console.log('onSpeechVolumeChanged: ', e);
    setPitch(e.value);
  };
 
  const startRecognizing = async () => {
    //Comienza a escuchar el habla de un lugar específico
    try {
      await Voice.start('en-US');
      setPitch('');
      setError('');
      setStarted('');
      setResults([]);
      setPartialResults([]);
      setEnd('');
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };
 
  const stopRecognizing = async () => {
    //Deja de escuchar el habla
    try {
      await Voice.stop();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };
 
  const cancelRecognizing = async () => {
    //Cancela el reconocimiento de voz
    try {
      await Voice.cancel();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };
 
  const destroyRecognizer = async () => {
    //Destruye la instancia actual de SpeechRecognizer
    try {
      await Voice.destroy();
      setPitch('');
      setError('');
      setStarted('');
      setResults([]);
      setPartialResults([]);
      setEnd('');
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Search Voice Legislative
        </Text>
        <Text style={styles.textStyle}>
        Presione el microfono para hacer la busqueda
        </Text>
        <View style={styles.headerContainer}>
          <Text style={styles.textWithSpaceStyle}>
            {`Started: ${started}`}
          </Text>
          <Text style={styles.textWithSpaceStyle}>
            {`End: ${end}`}
          </Text>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.textWithSpaceStyle}>
            {`Pitch: \n ${pitch}`}
          </Text>
          <Text style={styles.textWithSpaceStyle}>
            {`Error: \n ${error}`}
          </Text>
        </View>
        <TouchableHighlight onPress={startRecognizing}>
          <Image
            style={styles.imageButton}
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/microphone.png',
            }}
          />
        </TouchableHighlight>
        <Text style={styles.textStyle}>
          Partial Results
        </Text>
        <ScrollView>
          {partialResults.map((result, index) => {
            return (
              <Text
                key={`partial-result-${index}`}
                style={styles.textStyle}>
                {result}
              </Text>
            );
          })}
        </ScrollView>
        <Text style={styles.textStyle}>
          Results
        </Text>
        <ScrollView style={{marginBottom: 42}}>
          {results.map((result, index) => {
            return (
              <Text
                key={`result-${index}`}
                style={styles.textStyle}>
                {result}
              </Text>
            );
          })}
        </ScrollView>
        <View style={styles.horizontalView}>
          <TouchableHighlight
            onPress={stopRecognizing}
            style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>
              Stop
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={cancelRecognizing}
            style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>
              Cancel
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={destroyRecognizer}
            style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>
              Destroy
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
};
 
export default DetailsScreen;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#8ad24e',
    marginRight: 2,
    marginLeft: 2,
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  horizontalView: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
  },
  textStyle: {
    textAlign: 'center',
    padding: 12,
  },
  imageButton: {
    width: 50,
    height: 50,
  },
  textWithSpaceStyle: {
    flex: 1,
    textAlign: 'center',
    color: '#B0171F',
  },
});