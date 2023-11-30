import { View, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import * as ClipBoard from 'expo-clipboard'

export function ModalPassword({password, handleClose}) {

  async function handleCopyPassword(){
    await ClipBoard.setStringAsync(password)
    alert('Senha salva com sucesso!')

    handleClose()
  }
  return (
    <View style={styles.container}>

      <View style={styles.content}>
        <Text style={styles.textModal}> Senha gerada </Text>

        <Pressable style={styles.inerPassword} onLongPress={handleCopyPassword}>
          <Text style={styles.textPassword} >{password}</Text>
        </Pressable>

        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button} onPress={handleClose} >
            <Text style={styles.text}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.buttonSaveArea]}>
            <Text style={styles.buttonSaveText}>Salvar senha</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(24,24,24,0.6)",
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: "85%",
    paddingTop: 24,
    paddingBottom: 24,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  textModal: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 24
  },
  inerPassword: {
    width: '90%',
    backgroundColor: "#0e0e0e",
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  textPassword: {
    color: "#fff",
    alignItems: 'center',
  },
  buttonArea: {
    width: "90%",
    flexDirection: "row",
    marginTop: 8,
    alignItems: 'center',
    justifyContent: "space-between",
  },
  button:{
  flex: 1,
  alignItems: 'center',
  marginTop: 14,
  marginBottom: 14,
  padding: 8,
  }, 
  buttonSaveArea:{
    backgroundColor: '#392de9',    
    borderRadius: 8,
  },
  buttonSaveText:{
    color: '#fff',
    fontWeight:"bold"
  },
  text:{
    color: "#000",     
  }
})