import { useState } from 'react';
import { StyleSheet, Text, View, Alert, Pressable, Image, Modal, ScrollView } from 'react-native';
import ControlPresupuesto from './src/components/ControlPresupuesto';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import FormularioGasto from './src/components/FormularioGasto';
import { generarId } from './src/helpers';
import ListadoGastos from './src/components/ListadoGastos';
import Filtro from './src/components/Filtro';

export default function App() {

  const [isValidPres, setIsvalidPres] = useState(false);
  const [presupuesto, setPresupuesto] = useState(0);
  const [gastos, setGastos] = useState([]);
  const [modal, setModal] = useState(false);
  const [gasto, setGasto] = useState({});
  const [filtro, setFiltro] = useState({});
  const [gastosFiltro, setGastosFiltro] = useState([]);



  const handleNuevoPresupuesto = (presupuesto) =>{
    if(Number(presupuesto) > 0){
       setIsvalidPres(true);
    }else{
     Alert.alert('Error', 'El presupuesto no puede ser 0 o menor');
    }
  }

  const handleGasto = (gasto) => {
        if([gasto.name, gasto.categoria, gasto.cantidad].includes('')){
             Alert.alert('Error', 'Todos los campos son obligatorios');
             return
        }

        if(gasto.id){
            const gastosUpdate = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)

            setGastos(gastosUpdate);
            setModal(!modal);
            return
        }

        //add gasto
       gasto.id = generarId();
       gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
      setModal(!modal);
  }

  const eliminarGasto = id => {
      Alert.alert('Deseas eliminar este gasto?', 'Un gasto eliminado no se puede recuperar',
      [
        {text: 'No',style: 'Cancelar'},
        {text: 'Si, Eliminar', onPress: () => {
          const gastosUpdate = gastos.filter(gastoState => gastoState.id !== id);

          setGastos(gastosUpdate);
          setModal(!modal);
          setGasto({});
        } }
      ]);
  }


  return (
    <View style={styles.contenedor}>
      <ScrollView>
    
          <View style={styles.header}>
          <Header />
          {isValidPres ?  <ControlPresupuesto presupuesto={presupuesto} gastos={gastos} /> : 
          <NuevoPresupuesto setPresupuesto={setPresupuesto} presupuesto={presupuesto}  handleNuevoPresupuesto={handleNuevoPresupuesto}/>
          }
          </View>

          {isValidPres && (
            <>
            <Filtro filtro={filtro} setFiltro={setFiltro} gastos={gastos} setGastosFiltro={setGastosFiltro} />
            <ListadoGastos gastos={gastos} setModal={setModal} setGasto={setGasto} filtro={filtro} gastosFiltro={gastosFiltro} />
            </>
          )}
      </ScrollView>

      {modal && (
        <Modal
          animationType='slide'
          visible={modal}
          onRequestClose={() => {
            setModal(!modal)
          }}
        >
          <FormularioGasto setModal={setModal} handleGasto={handleGasto} gasto={gasto} setGasto={setGasto} eliminarGasto={eliminarGasto} />
          </Modal>
      )}
       
       {isValidPres && (
        <Pressable
        style={styles.pressable}
         onPress={ () => setModal(!modal)}
        >
          <Image style={styles.imagen} source={require('./src/img/nuevo-gasto.png')} />
        </Pressable>
       )}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
      backgroundColor: '#F5F5F5',
      flex: 1
  },
  header: {
    backgroundColor : '#3B82F6',
    minHeight: 500
},
pressable: {
  width: 60,
  height: 60,
  position: 'absolute',
  bottom: 30,
  right: 20
},
imagen: {
     width: 60,
     height: 60,
}
});
