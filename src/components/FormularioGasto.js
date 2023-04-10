import React, { useEffect, useState } from 'react'
import { Text, View, SafeAreaView, TextInput, StyleSheet, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import globalStyle from '../styles';

const FormularioGasto = ({setModal, handleGasto, gasto,setGasto, eliminarGasto}) => {
 
  const [name, setName] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [categoria, setCategoria] = useState('');
  const [id, setId] = useState('');
  const [fecha, setFecha] = useState('');

  useEffect(() => {
    if(gasto?.name){
        setName(gasto.name);
        setCantidad(gasto.cantidad);
        setCategoria(gasto.categoria);
        setId(gasto.id);
        setFecha(gasto.fecha);
    }
  }, [gasto]);

  return (
    <SafeAreaView style={styles.contenedor}>
           <View style={styles.contenedorBotones}>
            <Pressable onLongPress={() => {
              setModal(false)
              setGasto({})
              }} style={[styles.btn, styles.btnCancetal]}>
                <Text style={styles.btnTexto}>Cancelar</Text>
            </Pressable>

            {!!id && (
            <Pressable 
              onLongPress={ () => eliminarGasto(id)}
             style={[styles.btn, styles.btnEliminar]}>
                <Text style={styles.btnTexto}>Eliminar</Text>
            </Pressable>
            )}
           </View>

           <View style={styles.formulario}>
             <Text style={styles.titulo}>{gasto?.name ? "Editar Gasto" : "Nuevo Gasto"}</Text>

             <View style={styles.campo}>
                <Text style={styles.label}>Nombre Gasto</Text>
                <TextInput
                style={styles.input}          
                placeholder='Nombre del gasto'
                value={name}
                onChangeText={setName}
                />
             </View>

             <View style={styles.campo}>
                <Text style={styles.label}>Cantidad Gasto</Text>
                <TextInput
                style={styles.input}
                placeholder='Cantidad del gasto'
                keyboardType='numeric'
                onChangeText={setCantidad}
                value={cantidad}
                />
             </View>

             <View style={styles.campo}>
                <Text style={styles.label}>Categoría Gasto</Text>
                <Picker
                style={styles.input}
                selectedValue={categoria}
                onValueChange={(value) => {setCategoria(value)}}
                >
                    <Picker.Item label='-- Seleccione --' value='' />
                    <Picker.Item label='Ahorro' value='ahorro' />
                    <Picker.Item label='Comida' value='comida' />
                    <Picker.Item label='Casa' value='casa' />
                    <Picker.Item label='Gastos Varios' value='gastos' />
                    <Picker.Item label='Ocio' value='ocio' />
                    <Picker.Item label='Salud' value='salud' />
                    <Picker.Item label='Suscripciones' value='suscripciones' />

                </Picker>
             </View>

             <Pressable style={styles.submitBtn}
               onPress={() => handleGasto({name,cantidad,categoria,id, fecha})}
             >
                <Text style={styles.submitBtnTexto}>
                {gasto?.name ? "Guardar Cambios" : "Agregar Gasto"}
                </Text>
             </Pressable>

           </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    contenedor : {
        backgroundColor: '#1E40AF',
        flex: 1
    },
    contenedorBotones: {
          flexDirection: 'row',
          justifyContent: 'space-between'
    },
    btn : {
      padding: 10,
      marginTop:30,
      marginHorizontal: 10,
      flex: 1
    },
    btnEliminar: {
      backgroundColor: 'red'
    },

    btnCancetal: {
      backgroundColor: '#DB2777',
     
    },
    btnTexto: {
       textAlign: 'center',
       textTransform: 'uppercase',
       fontWeight: 'bold',
       color: '#FFF'
    },
    formulario: {
      ...globalStyle.contenedor
    },
    titulo: {
      textAlign: 'center',
      fontSize:28,
      marginBottom: 30,
      color: '#64748B'
    },
    campo : {
      marginVertical: 10
    },
    label: {
        color: '#64748B',
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: 'bold'
    },
    input: {
          backgroundColor: '#F5F5F5',
          padding: 10,
          borderRadius: 10,
          marginTop: 5,
    },
    submitBtn : {
       backgroundColor: '#3B82F6',
       padding: 10,
       marginTop: 20
    }, 
    submitBtnTexto: {
      textAlign: 'center',
      color: '#FFF',
      fontWeight: 'bold',
      textTransform: 'uppercase'
    }
});

export default FormularioGasto