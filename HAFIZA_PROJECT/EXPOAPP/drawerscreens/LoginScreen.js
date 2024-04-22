import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Placeholder authentication logic
    if (username === 'admin' && password === 'password') {
      navigation.navigate('Home');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
      <View style={styles.container}>
        <Image
          source={('./food.jpg')}
          style={styles.logo}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <Button title="Login" onPress={handleLogin} />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupLink}>Don't have an account? Sign up here!</Text>
        </TouchableOpacity>
      </View>
    
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    opacity: 0.2,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '20%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
  signupLink: {
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline',
    fontFamily: 'Times New Roman'
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
});

export default LoginScreen;