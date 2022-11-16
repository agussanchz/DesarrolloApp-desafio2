//Importaciones
import React from 'react'
import { Modal, View, Text, Button} from 'react-native'
import { styles } from './stylesModal'

export default function ModalContainer({ modalVisible, selectedTask, onHandleCancel, onHandleDeleteItem }) {
    return (
        <Modal visible={modalVisible} animationType='slide'>
            <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Detalle de su tarea</Text>
                <View style={styles.modalDetailContainer}>
                    <Text style={styles.modalDetailText}>Seguro que quiere eliminar esta tarea?</Text>
                    <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
                </View>
                <View style={styles.modalButtonContainer}>
                    <Button
                        title='Cancelar'
                        color='#ccd5ae'
                        onPress={onHandleCancel}
                    />
                    <Button
                        title='Eliminar'
                        color='#ccd5ae'
                        onPress={onHandleDeleteItem}
                    />
                </View>
            </View>
        </Modal>
    )
}
