import { View, Text} from 'react-native';
import { Input, Task } from './src/components';
import { styles } from './Styles'; 

export default function App() {
  return (
    <View style={styles.app}>
      <Input/>
      <Text style={styles.titleApp}>Lista de tareas</Text>
      <Task/>
      <Task/>
      <Task/>
    </View>
  );
}
