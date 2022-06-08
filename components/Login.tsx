import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, Button } from 'react-native';

const Login = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/splash.png')}
        style={styles.logo}
      />
      <Pressable onPress={() => navigation.navigate('Login')} style={styles.button}>
        <Text style={styles.text}>Se connecter</Text>
        
      </Pressable>

      <Text>Pas encore inscrit? </Text>
      <Button
        title="Créer un compte"
        onPress={() => navigation.navigate('Inscription')}
      />
    </View>
  );
}
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {

  },
  text: {
    fontSize: 16,
    color: 'black',
  },

  button: {
    backgroundColor: 'blue',
    borderColor: 'black',
    width: 100,
    height: 100,
  }
});

