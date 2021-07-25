import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { _clearStorage } from '../../store/api';

const Logout = (props) => {
  const { authUser } = props;

  const logoff = async () => {
    await _clearStorage()
    authUser()
  }

  return (
    <View style={styles.container}>
      <Text>Apakah anda yakin ingin keluar ?</Text>
      <TouchableOpacity
        onPress={() => logoff()}
        style={styles.loginBtn}
      >
        <Text style={styles.loginText}> Yakin </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    color: '#ffffff',
    fontSize: 15,
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

export default Logout;
