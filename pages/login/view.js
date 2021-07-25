import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Login = (props) => {
  const { authLogin, data, error, loading } = props;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    await authLogin({
      "employee_name": username,
      "employee_password": password
    })
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/icon.png")} />

      {data && data.employee_name &&
        <Text style={styles.successText}>
          Selamat datang {data.employee_name} Silahkan tunggu beberapa saat
        </Text>
      }

      {loading &&
        <Text style={styles.loadingText}>
          'Loading...'
        </Text>
      }

      {error &&
        <Text style={styles.errorText}>
          'Username atau password salah'
        </Text>
      }

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          value={password}
        />
      </View>

      <TouchableOpacity
        onPress={handleSubmit}
        style={styles.loginBtn}
      >
        <Text style={styles.loginText}> Login </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 25,
  },
  inputView: {
    borderColor: "#8b8b8b",
    borderWidth: 1,
    borderRadius: 5,
    width: "70%",
    height: 45,
    marginBottom: 20
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 0,
    marginLeft: 10,
  },
  loginText: {
    color: '#ffffff',
    fontSize: 15,
    height: 30
  },
  loadingText: {
    color: '#708FE5',
    marginBottom: 5,
    height: 30
  },
  errorText: {
    color: '#E74C3C',
    marginBottom: 5,
    height: 30
  },
  successText: {
    color: '#888586',
    marginBottom: 5,
    height: 30
  },
  loginBtn: {
    width: "70%",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#358cd9",
  },
});

export default Login;