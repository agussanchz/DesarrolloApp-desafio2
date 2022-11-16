//Importaciones
import React from 'react'
//Core components react-native
import { View, Text} from 'react-native';
//Componentes
import Input from '../Input/Input';
import Task from '../Task/Task';
//Estilos
import { styles } from './stylesAppContainer'; 

export default function AppContainer() {
    //Creacion de hooks para guardar el valor de mi input y guardarlos en una lista
    const [task, setTask] = React.useState('')
    const [taskList, setTaskList] = React.useState([])

    //Funcion para almacenar los datos en la lista de tareas
    const onHandleTask = () => {
        setTaskList((prevTaskList) => [...prevTaskList, { id: Math.random().toString(), value: task }])
        setTask('')
    }

    //Funcion para guardar el valor de lo que escribo en el input
    const onHandleChange = (text) => setTask(text);

    //Renderizado y paso de props hacia mis componentes
    return (
        <View>
            <Input task={task} onHandleTask={onHandleTask} onHandleChange={onHandleChange} />
            <Text style={styles.titleApp}>Lista de tareas</Text>
            {taskList.map((text) => <Task key={text.id} task={text} />)}
        </View>
    );
}
