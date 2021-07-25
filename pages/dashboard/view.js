import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

function HomeScreen(props) {
  const { loadData, data, error, loading } = props;

  useEffect(() => {
    loadData()
  }, [])

  if (loading) return <View style={styles.loadingText}><Text >Application is Loading ...</Text></View>
  if (error) return <View style={styles.errorText}><Text >Application is Error</Text></View>

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Daftar Kuli Bangunan</Text>
      {data.map((i) => (
        <View key={i.id}>
          <Text>Nama : {i.employee_name}</Text>
          <Text>Umur : {i.employee_age}</Text>
          <Text>Gaji : {i.employee_salary}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  loadingText: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: '#708FE5',
    height: 30
  },
  errorText: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: '#708FE5',
    height: 30
  }
});

export default HomeScreen