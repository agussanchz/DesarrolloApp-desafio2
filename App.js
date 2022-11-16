//Importaciones
import React from 'react';
//Importacion core components
import { View } from 'react-native';
//Importacion componente
import AppContainer from './src/components/AppContainer/AppContainer';
//Importacion estilos
import { styles } from './Styles';

export default function App() {
  //Renderizado de mi app
  return (
    <View style={styles.app}>
        <AppContainer />
    </View>
  );
}
