import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const _sendData = async (storageName, value) => {
  try {
    await AsyncStorage.setItem(storageName, value);
  } catch (e) {
  }
};

export const _retrieveData = async (storageName) => {
  try {
    const value = await AsyncStorage.getItem(storageName);
    if (value !== null) {
      return value;
    }
  } catch (e) {
  }
};

export const _clearStorage = async () => {
  try {
    await AsyncStorage.clear()
    return true
  } catch (e) {
  }
}

const instance = axios.create({
  baseURL: 'http://192.168.1.6/api-kasir/v1', // Your PC IP
});


export default instance;

