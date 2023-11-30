import React from 'react'
import { View, StyleSheet, Text, Pressable  } from 'react-native'


export function PasswordItems({data, removPassord}){
  return (    
<Pressable style={styles.container} onLongPress={removPassord}>
<Text style={styles.text}>{data}</Text>
</Pressable>
  )
}


const styles = StyleSheet.create({
  container:{
    backgroundColor: '#0E0E0E',
    padding: 14,
    width: "100%",
    marginBottom: 14,
    borderRadius:8,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  text:{
    color: '#FFFFFF',
  }

})