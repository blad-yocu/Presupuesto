import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import globalStyle from '../styles';
import { formatCantidad } from '../helpers';
import CircularProgress from 'react-native-circular-progress-indicator';

const ControlPresupuesto = ({presupuesto, gastos}) => {

  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] =useState(0);

  useEffect(() => {
      const totalGastado = gastos.reduce((total, gasto) => Number(gasto.cantidad) + total , 0)
      setGastado(totalGastado);
      const totalDisponible = presupuesto - totalGastado;
      setDisponible(totalDisponible);
        
      const nuevoPorcentaje = ((presupuesto - totalDisponible) / presupuesto) * 100;
      setPorcentaje(nuevoPorcentaje);

  }, [gastos]);


  return (
    <View style={styles.contenedor}>
        <View style={styles.centrarGrafica}>
          <CircularProgress 
          value={porcentaje}
          duration={1000}
          radius={150}
          valuePrefix={'%'}
          title='Gastado'
          inActiveStrokeColor='#F5F5F5'
          inActiveStrokeWidth={20}
          activeStrokeColor='#3b82f6'
          activeStrokeWidth={20}
          titleStyle={{ fontWeight: 'bold', fontSize: 20}}
          />
        </View> 
        <View style={styles.contenedorTexto}>
           <Text style={styles.valor}>
            <Text style={styles.label}>Presupuesto: </Text>
            {formatCantidad(presupuesto)}
           </Text>
           <Text style={styles.valor}>
            <Text style={styles.label}>Disponible: </Text>
            {formatCantidad(disponible)}
           </Text>
           <Text style={styles.valor}>
            <Text style={styles.label}>Gastado: </Text>
            {formatCantidad(gastado)}
           </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    ...globalStyle.contenedor
  },
  centrarGrafica : {
     alignItems: 'center'
  },
  image:{
    width:250,
    height: 250
  },
  contenedorTexto: {
   marginTop: 50,
  },
  valor: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
  label: {
  fontWeight: '700',
  color: '#3B82F6'
  }
});

export default ControlPresupuesto