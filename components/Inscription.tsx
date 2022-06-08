import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const Inscription = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      
      <Pressable onPress={() => navigation.navigate('Inscription2')} style={styles.button}>
        <Text style={styles.text}>Suivant</Text>
        
      </Pressable>
    </View>
  );
}
export default Inscription;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button:{

  },
  text:{
    fontSize: 50,
  }
});

