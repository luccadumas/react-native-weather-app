import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import colors from './constants/colors';
import FlashMessage from "react-native-flash-message";
import Routes from './routes';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store';

export function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

function App() {
  return (
    <>
      <StatusBar backgroundColor={colors.primary} />

      <View style={{flex: 1}}>
        <Routes />
      </View>

      <FlashMessage position="top" />
    </>
  );
}
