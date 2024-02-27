import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";

import { styles } from './styles';

import { Participant } from "../../components/Participant";

export default function Home() {
  const participants = ['Pedro', 'Andre', 'Tiago Menor','Tiago Maior' ,  'João', 'Mateus', 'Filipe', 'Judas Iscariotes', 'Bartolomeu', 'Simão', 'Tomé', 'Judas Tadeu'];

  function handleParticipantAdd(){
    if(participants.includes ("Pedro")) {
      return Alert.alert("Participante Existe", "Já existe um participante na lista com esse nome");
     }
    console.log("Voce clicou no botao de Adicionar!");
  }

  function handleParticipantRemove(name: string){
    Alert.alert ("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim', 
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);

    console.log(`Você clicou em remover o participante ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
        </Text>
        <Text style={styles.eventDate}>
        Segunda Feira 5 de Fevereiro de 2024
        </Text>
       <View style={styles.form}>
        <TextInput
         style={styles.input}
         placeholder="Nome do participante"
         placeholderTextColor="#6B6B6B"
         
         />
    <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
     <Text style={styles.buttonText}>
      +
       </Text>
      </TouchableOpacity>
    </View>

    <FlatList
      data={participants}
      keyExtractor={item => item}
      renderItem={({ item }) => (
        <Participant
        key ={item}
        name ={item}
        onRemove={() => handleParticipantRemove(item)} 
          />
        )}  
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.ListEmptyText}>
            Ninguém chegou no evento ainda?? Adicione participantes a sua lista de presença;
          </Text>
        )}
    />
    </View>    
  );
}