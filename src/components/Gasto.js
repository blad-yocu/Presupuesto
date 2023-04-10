import React from 'react'
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { formatCantidad, formatFecha } from '../helpers';
import globalStyle from '../styles';

const diccionarioIcons = {
    ahorro : require('../img/icono_ahorro.png'),
    comida : require('../img/icono_comida.png'),
    casa : require('../img/icono_casa.png'),
    gastos : require('../img/icono_gastos.png'),
    ocio : require('../img/icono_ocio.png'),
    salud : require('../img/icono_salud.png'),
    suscripciones : require('../img/icono_suscripciones.png'),

}


const Gasto = ({gasto, setModal, setGasto}) => {

    const {name, cantidad, categoria, fecha} = gasto;

    const handleAcciones = () => {
        setModal(true);
        setGasto(gasto);
    }
  return (
    <Pressable onLongPress={handleAcciones} >

        <View style={styles.contenedor}>
            <View style={styles.contenido}>

                <View style={styles.contenedorImage}>
                    <Image style={styles.image} source={diccionarioIcons[categoria]} />
                        <View style={styles.contenedorTexto}>
                            <Text style={styles.categoria}>{categoria}</Text>
                            <Text style={styles.nombre}>{name}</Text>
                            <Text style={styles.fecha}>{formatFecha(fecha)}</Text>

                        </View>
                </View>
                    
                    <Text style={styles.cantidad}>{ formatCantidad(cantidad)}</Text>

            </View>

        </View>

    </Pressable>
  )
}

const styles = StyleSheet.create({
    contenedor: {
        ...globalStyle.contenedor,
        marginBottom: 10
    },
    contenido: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    contenedorImage: {
       flexDirection: 'row',
       alignItems: 'center',
       flex: 1
    },
    image: {
      width: 80,
      height: 80,
      marginRight: 20
    },
    contenedorTexto: {
       flex: 1
    },
    categoria:{
       color: '#94A3B8',
       fontSize: 16,
       fontWeight: '700',
       textTransform: 'uppercase',
       marginBottom: 5
    },
    nombre: {
     fontSize: 22,
     color: '#64748B',
     marginBottom: 5
    },
    fecha: {
     fontWeight: '700',
     color: '#BD8577'
    },
    cantidad: {
      fontSize:20,
      fontWeight: '700'
    }
})

export default Gasto