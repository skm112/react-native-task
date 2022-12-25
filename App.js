import 'react-native-gesture-handler';
import React from 'react';
import { store, persistor } from './src/redux/store'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react'
import { Loading } from './src/components';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading isLoading={true} />} persistor={persistor}>
        <SafeAreaProvider >
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};



export default App;
