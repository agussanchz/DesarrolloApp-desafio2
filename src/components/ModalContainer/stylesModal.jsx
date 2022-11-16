import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#f1faee'
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDetailContainer: {
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalDetailText: {
    fontSize: 14,
    color: '#212121',
  },
  selectedTask: {
    fontSize: 14,
    color: '#212121',
    fontWeight: 'bold',
    paddingVertical: 20,
  },
  modalButtonContainer: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
  }
})