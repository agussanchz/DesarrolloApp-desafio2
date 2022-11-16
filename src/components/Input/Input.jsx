//Importaciones
import { Button, TextInput, View } from 'react-native'
import { styles } from './stylesInput'

export default function Input() {
  return (
    <View style={styles.containerInput}>
        <TextInput 
        placeholder='Escriba aqui' style={styles.input}
        />
        <Button title='ADD' color='#ccd5ae'/>
    </View>
  )
}
