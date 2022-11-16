//Importaciones
import React from 'react'
import { Button, TextInput, View } from 'react-native'
import { styles } from './stylesInput'

export default function Input({task, onHandleChange, onHandleTask}) {
  return (
    <View style={styles.containerInput}>
      <TextInput
        value={task}
        placeholder='Escriba aqui'
        style={styles.input}
        onChangeText={onHandleChange}
      />
      <Button title='ADD' color='#ccd5ae' onPress={onHandleTask}/>
    </View>
  )
}
