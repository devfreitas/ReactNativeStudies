import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Switch, Text, TextInput, View } from 'react-native';


interface Contato { 
  nome : string;
  telefone : string;
  email : string;
  info : string;
  foto : string;
  ativo : boolean;
  tipo : string;
}

export default function App() {
  return (
    <View style={estilos.container}>
      <View style={{backgroundColor: "cornflowerblue", 
          marginVertical: 30, padding: 30}}>
        <Text style={{fontSize: 38, textAlign: "center",
          color: "white"}}>Gestão de Contatos</Text>
      </View>
      <View style={{backgroundColor: "lightblue"}}>
          <TextInput placeholder="Nome Completo" 
              style={estilos.input}/>
          <TextInput placeholder="Telefone" style={estilos.input}
          keyboardType="number-pad"/>
          <TextInput placeholder="Email" style={estilos.input}
          keyboardType="email-address"/>
          <TextInput placeholder="Informações" 
              style={estilos.input} numberOfLines={3} multiline={true}/>
          <Image source={{
            uri: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }} width={200} height={200} style={{alignSelf: "center"}}/>
          <View style={{flexDirection: "row", 
            alignItems: "center", justifyContent: "space-evenly"}}>
            <Text style={{color: "blue", fontSize: 22, fontWeight: "bold"}}>Ativo: </Text>
            <Switch thumbColor="blue" trackColor = {{
              true: "lightgray",
              false: "gray"
            }} value={false}/>
          </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  input: {marginVertical: 20, marginHorizontal: 5, 
              padding: 10, 
              backgroundColor: "lemonchiffon", borderColor: "blue",
              borderWidth: 2, borderRadius: 20 }
});
