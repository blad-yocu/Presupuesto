import React, { useState } from 'react'
import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native';
import globalStyle from '../styles';

const NuevoPresupuesto = ({handleNuevoPresupuesto, presupuesto, setPresupuesto}) => {
    


  return (
    <View style={styles.contenedor}>
        <Text style={styles.label}>Definir preupuesto</Text>
        <TextInput
          keyboardType='numeric'
          placeholder='Agregar presupuesto'
          style= {styles.input}
          value={presupuesto.toString()}
          onChangeText = {setPresupuesto}
        />

        <Pressable style={styles.boton}
          onPress={() => handleNuevoPresupuesto(presupuesto)}

        >
            <Text style={styles.botonTexto}>Agregar Presupuesto</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    contenedor: {
        ...globalStyle.contenedor
    },
    label :{
       textAlign: 'center',
       fontSize: 24,
       color: '#3B82F6',
       marginBottom: 10
    },
    input:{
     backgroundColor: '#F5F5F5',
     padding: 10,
     borderRadius: 10,
     textAlign: 'center',
     marginTop:30
    },
    boton :{
      marginTop: 30,
      backgroundColor: '#1048A4',
      padding: 10,
      borderRadius: 10
    },
    botonTexto : {
       color: '#FFF',
       textAlign: 'center',
       textTransform: 'uppercase',
       fontWeight: 'bold'
    }
});

export default NuevoPresupuesto