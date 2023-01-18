/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import React, {useEffect} from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Navigation from './src/navigation/Navigation';
import SignIn from './src/screens/Login/SignIn/SignIn';
import AuthContextProvider from './src/contexts/AuthContext';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <NavigationContainer>
        <AuthContextProvider>
          <Navigation />
        </AuthContextProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
