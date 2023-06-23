//import liraries
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import store, {persistor} from './src/todoStore/store';
import RootApp from './src/navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PersistGate} from 'redux-persist/integration/react';

// create a component
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GestureHandlerRootView style={{flex: 1}}>
            <RootApp />
          </GestureHandlerRootView>
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};

//make this component available to the app
export default App;
