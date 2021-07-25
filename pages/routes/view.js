import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import Dashboard from '../dashboard';
import Profile from '../profile';
import Login from '../login';
import Logout from '../logout';

import MenuIcon from '../../components/elements/MenuIcon';
import MenuContent from '../../components/elements/MenuContent';

const MainRoutes = (props) => {
  const { authUser, data, loading } = props;

  useEffect(() => {
    authUser()
  }, [])

  const Drawer = createDrawerNavigator();

  if (loading) return <View style={styles.loadingText}><Text >Application is Loading ...</Text></View>

  if (data && data.employee_name) {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <MenuContent {...props} />}
          initialRouteName="Home"
          screenOptions={{ headerShown: true, headerLeft: () => <MenuIcon /> }}
        >
          <Drawer.Screen name="Home" component={Dashboard} />
          <Drawer.Screen name="Profile" component={Profile} />
          <Drawer.Screen name="Log Out" component={Logout} />
        </Drawer.Navigator>
      </NavigationContainer >
    );
  } else {
    return <Login />;
  }
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

export default MainRoutes;
