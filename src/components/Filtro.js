import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import globalStyle from '../styles'
import { Picker } from '@react-native-picker/picker'

const Filtro = ({filtro, setFiltro, gastos, setGastosFiltro}) => {

    useEffect(() =>{
       if(filtro === ''){
            setGastosFiltro([])
       }else{
        const gastosFiltrados = gastos.filter( gasto => gasto.categoria === filtro);

        setGastosFiltro(gastosFiltrados)
       }
    }, [filtro]);

  return (
    <View style={styles.contenedor}>
        <Text style={styles.label}>Filtrar Gastos</Text>
        <Picker
               selectedValue={filtro}
               onValueChange={(valor) => setFiltro(valor)}
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
  )
}

const styles = StyleSheet.create({
  contenedor:{
    ...globalStyle.contenedor,
    transform: [{translateY: 0}],
    marginTop: 80
  },
  label: {
    fontSize: 22,
    fontWeight: '900',
    color: '#64748B'
  }
});

export default Filtro