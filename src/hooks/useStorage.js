import AsyncStorage from "@react-native-async-storage/async-storage"

const useStorage = () => {

  //buscar os items salvos
  const getItem = async (key) => {
    try {
      const passwords = await AsyncStorage.getItem(key);
      return JSON.parse(passwords) || [];

    } catch(error) {
      console.log("Erro ao buscar", error)
    }
  }



  //Salvar um item no storage
  const saveItem = async (key, value) => {
    try {
      let passwords = await getItem(key, value);
      passwords.push(value)

      await AsyncStorage.setItem(key, JSON.stringify(passwords))

    } catch(error) {
      console.log("Erro ao salvar", error)
    }
  }


  //Remover um item no storage
  const deleteItem = async (key, item) => {
    try {
      let passwords = await getItem(key);

      let myPassWords = passwords.filter((pass) => {
        return (pass !== item)
      })

      await AsyncStorage.setItem(key, JSON.stringify(myPassWords))
      return myPassWords;

    } catch(error) {
      console.log("Erro ao deletar", error)
    }
  }

  return {
    getItem,
    saveItem,
    deleteItem,
  }
}

export default useStorage;