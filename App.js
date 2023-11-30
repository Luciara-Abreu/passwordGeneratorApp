import { useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal} from 'react-native';
import Slider from '@react-native-community/slider';
import {ModalPassword} from './src/components/modal'


let charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%&'




export default function App() {
const [size, setSize] = useState(6)
const [passwordValue, setPasswordValue] = useState("")
const [modalVisible, setModalVisible] = useState(false)


function generatePassword(){
  let password = "";

  for(i = 0, n = charset.length; i < size; i++ ){
    password += charset.charAt(Math.floor(Math.random() * n ))
  }
  setPasswordValue(password)
  setModalVisible(true)
}

  return (
    <View style={styles.container}>
      <Image
        source={require('./src/assets/logo.png')}
        style={styles.logo} />
      <StatusBar style="auto" />

      <Text style={styles.title}>{size} Caracteres </Text>

      <View style={styles.area}>
        <Slider
          style={{ width: 300, height: 40 }}
          minimumValue={6}
          maximumValue={20}
          minimumTrackTintColor="#392de9"
          maximumTrackTintColor="gray"
          thumbTintColor='#392de9'
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
          
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)}/>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginBottom: 60
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
  },
  area: {
    alignItems: 'center',
    marginTop: 14,
    marginBottom: 14,
    width: '80%',
    backgroundColor: '#FFF',
    padding: 8,
    borderRadius: 8,
  },
  button:{
    backgroundColor: '#392de9',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 28,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
  }
});
