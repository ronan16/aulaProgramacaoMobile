import {View, Text, StyleSheet} from 'react-native'

export default function App(){
  return(
    <View style={styles.container}>
      <Text style={styles.texto}>Exemplo de Texto</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#274135',
    textAlign: 'center',
    justifyContent: 'center'
  },
  texto: {
    color: '#d5d6d1',
    textAlign: 'center'
  }
})