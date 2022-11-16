//Importaciones
import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './stylesTask'

export default function Task({ task }) {
  return(
      <View style={styles.containerTask}>
          <Text style={styles.task}>{task.value}</Text>
      </View>  
  )

}
