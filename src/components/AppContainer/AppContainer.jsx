//Importaciones
import React from 'react'
//Core components react-native
import { View, Text, FlatList } from 'react-native';
//Componentes
import Input from '../Input/Input';
import ModalContainer from '../ModalContainer/ModalContainer';
import Task from '../Task/Task';
//Estilos
import { styles } from './stylesAppContainer';

export default function AppContainer() {
    //Creacion de hooks para guardar el valor de mi input y guardarlos en una lista
    const [task, setTask] = React.useState('')
    const [taskList, setTaskList] = React.useState([])

    //Hook para mostrar mi modal
    const [modalVisible, setModalVisible] = React.useState(false)

    //Hook para seleccionar una tarea
    const [selectedTask, setSelectedTask] = React.useState(null)

    //Funcion para almacenar los datos en la lista de tareas
    const onHandleTask = () => {
        setTaskList((prevTaskList) => [...prevTaskList, { id: Math.random().toString(), value: task }])
        setTask('')
    }
  
    //Funcion para el boton de las tareas
    const onHandleSelected = (item) => {
        setSelectedTask(item);
        setModalVisible(!modalVisible);
    }

    //Funcion para renderizar item en FlatList
    const renderItem = ({ item }) => (
        <Task task={item} onHandleSelected={onHandleSelected} />
    )

    //Funcion para el boton cancelar del modal
    const onHandleCancel = () => {
        setModalVisible(!modalVisible);
    }

    //Funcion para el boton eliminar del modal
    const onHandleDeleteItem = () => {
        setTaskList((prevTaskList) => prevTaskList.filter((item) => item.id !== selectedTask.id))
        setModalVisible(!modalVisible);
      }

    //Funcion para guardar el valor de lo que escribo en el input
    const onHandleChange = (text) => setTask(text);

    //Renderizado y paso de props hacia mis componentes
    return (
        <View>
            <Input task={task} onHandleTask={onHandleTask} onHandleChange={onHandleChange} />
            <Text style={styles.titleApp}>Lista de tareas</Text>
            <FlatList
                data={taskList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <ModalContainer modalVisible={modalVisible} selectedTask={selectedTask} onHandleCancel={onHandleCancel} onHandleDeleteItem={onHandleDeleteItem} />
        </View>
    );
}
