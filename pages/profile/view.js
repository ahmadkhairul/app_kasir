import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

function Profile(props) {
  const { data } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.items}>Nama : {data.employee_name}</Text>
      <Text style={styles.items}>Umur : {data.employee_age}</Text>
      <Text style={styles.items}>Gaji : {data.employee_salary}</Text>
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
  items: {
    marginBottom: 10,
  }
});


export default Profile;