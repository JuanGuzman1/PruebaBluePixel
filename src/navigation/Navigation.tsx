import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import About from '../screens/About/About';
import SignIn from '../screens/Login/SignIn/SignIn';
import {useAuthContext} from '../contexts/AuthContext';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {authUser} = useAuthContext();
  return (
    <Stack.Navigator>
      {!authUser && (
        <Stack.Screen
          name="Login"
          component={SignIn}
          options={{headerShown: false}}
        />
      )}
      <Stack.Screen
        name="Home"
        component={DrawerNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BlankHome"
        component={HomeScreen}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

//drawer navigation
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="HomeDrawer"
        component={TopTabNavigation}
        options={{title: 'Home', headerTitle: 'Welcome'}}
      />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props: any) {
  const {setAuthUser} = useAuthContext();

  return (
    <>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Sign Out"
        onPress={() => {
          setAuthUser(null);
          props.navigation.navigate('Login');
        }}
        labelStyle={{color: 'red'}}
      />
    </>
  );
}

//tabs navigation

const Tab = createMaterialTopTabNavigator();

function TopTabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Services" component={HomeScreen} />
      <Tab.Screen name="Clients" component={HomeScreen} />
      <Tab.Screen name="Blog" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default Navigation;
