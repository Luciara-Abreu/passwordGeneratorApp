import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStorage from "../../hooks/useStorage";
import { useIsFocused } from '@react-navigation/native'
import { PasswordItems } from '../../components/passwordItems'



export function Passwords() {
  const { getItem, deleteItem, } = useStorage()
  const [listPassword, setListPassword] = useState([])
  const focused = useIsFocused()


  useEffect(() => {
    async function loadPassword() {
      const passwords = await getItem("@pass")
      setListPassword(passwords)
    }

    loadPassword()
  }, [focused])


async function handleDeletPassword(item){
const passwords =  await deleteItem("@pass", item)
setListPassword(passwords)
}

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas senhas:  </Text>
      </View>

      <View style={styles.content}>
        <FlatList
          style={{ flex: 1, paddingTop: 14 }}
          data={listPassword}
          keyExtractor={(item) => String(item)}
          renderItem={ ({ item }) => <PasswordItems data={item} removPassord={()=> handleDeletPassword(item)}/>}

        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#392de9',
    paddingTop: 60,
    padding: 14,

  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  passworsList:{

  }
})