import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/icon.png')}
        style={styles.logo}
      />
      <Pressable onPress={() => navigation.navigate('Login')} style={styles.button1}>
        <Text style={styles.text}>Se connecter</Text>

      </Pressable>

      <Pressable onPress={() => navigation.navigate('Inscryption')} style={styles.button2}>
        <Text style={styles.text}>S'inscrire'</Text>

      </Pressable>
    </View>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    top: -100,
    width: 100,
    height: 100,
    borderRadius: 100,
    padding: 60,
  },
  button1: {
    backgroundColor: 'blue',
    borderColor: 'black',
    width: 100,
    height: 100,
  },

  button2: {
    backgroundColor: 'white',
    width: '100',
    height: '100',
    borderColor: 'black',
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
});