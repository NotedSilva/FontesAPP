import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';

const App = () => {
  const frases = [
    {
      text: "É divertido fazer o impossível, pois lá a concorrência é menor.",
      autor: "Walt Disney",
      fontFamily: "Anton-Regular"
    },
    {
      text: "A melhor maneira de prever o futuro é inventá-lo.",
      autor: "Alan Kay",
      fontFamily: "BebasNeue-Regular"
    },
    {
      text: "Coisas incríveis nunca são feitas por uma única pessoa. São feitas por um time.",
      autor: "Steve Jobs",
      fontFamily: "BlackOpsOne-Regular"
    },
    {
      text: "A vida é o que acontece com você enquanto você está ocupado fazendo planos",
      autor: "John Lennon",
      fontFamily: "Bungee-Regular"
    },
    {
      text: "A mente é tudo. Você se torna aquilo que você pensa",
      autor: "Buda",
      fontFamily: "Caveat-VariableFont_wght"
    },
    {
      text: "Só por que alguma coisa não faz o que você planejou que ela fizesse não quer dizer que ela seja inútil",
      autor: "Thomas Edison",
      fontFamily: "Creepster-Regular"
    },
    {
      text: "Há apenas uma maneira de evitar críticas: não faça nada, não diga nada, e não seja nada",
      autor: "Aristóteles",
      fontFamily: "Merriweather-Black"
    },
    {
      text: "O código é poesia executável.",
      autor: "Derek Dilworth",
      fontFamily: "Phudu-VariableFont_wght"
    },
    {
      text: "A tecnologia é melhor quando une as pessoas.",
      autor: "Matt Mullenweg",
      fontFamily: "QwitcherGrypen-Boldt"
    },
    {
      text: "A tecnologia move o mundo",
      autor: "Steve Jobs",
      fontFamily: "RubikIso-Regular"
    },
  ];

   const [fontsLoaded] = useFonts({
    'Anton-Regular': require('./assets/fonts.js/Anton-Regular.ttf'),
    'BebasNeue-Regular': require('./assets/fonts.js/BebasNeue-Regular.ttf'),
    'BlackOpsOne-Regular': require('./assets/fonts.js/BlackOpsOne-Regular.ttf'),
    'Bungee-Regular': require('./assets/fonts.js/Bungee-Regular.ttf'),
    'Caveat-VariableFont_wght': require('./assets/fonts.js/Caveat-VariableFont_wght.ttf'),
    'Creepster-Regular': require('./assets/fonts.js/Creepster-Regular.ttf'),
    'Merriweather-Black': require('./assets/fonts.js/Merriweather-Black.ttf'),
    'Phudu-VariableFont_wght': require('./assets/fonts.js/Phudu-VariableFont_wght.ttf'),
    'QwitcherGrypen-Boldt': require('./assets/fonts.js/QwitcherGrypen-Bold.ttf'),
    'RubikIso-Regular': require('./assets/fonts.js/RubikIso-Regular.ttf'),
    'SedgwickAveDisplay-Regular': require('./assets/fonts.js/SedgwickAveDisplay-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null; //
  }


  return (
    <ScrollView>
    <View style={styles.container}>
    <Text style={styles.headerText}>Frases e Fontes</Text>
      {frases.map((frases, index) => (
        <View key={index} style={styles.frasesContainer}>
          <Text style={[styles.frasesText, {fontFamily: frases.fontFamily}]}>{frases.text}</Text>
          <Text style={styles.autorText}>- {frases.autor}</Text>
        </View>
      ))}
    </View>
     </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#76877d',
  },
  frasesContainer: {
    backgroundColor: '#96958a',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    width: '80%',
  },
  frasesText: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#d1c5a5",
  },
  autorText: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'right',
    color: "#793a57",
  },
   headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4d3b36',
    marginBottom: 40,
    marginTop: 60,
    fontFamily: "SedgwickAveDisplay-Regular",
  },
});

export default App;
