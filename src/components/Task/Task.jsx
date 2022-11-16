//Importaciones
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './stylesTask'

export default function Task({ task, onHandleSelected}) {
  return(
      <TouchableOpacity style={styles.containerTask} onPress={() => onHandleSelected(task)}>
          <Text style={styles.task}>{task.value}</Text>
      </TouchableOpacity>  
  )

}
