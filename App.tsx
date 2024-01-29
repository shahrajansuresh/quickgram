import React from 'react';

import MainStack from './app/routes/MainStack';
import {Provider} from 'react-redux';
import {persistor, store} from './app/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainStack />
      </PersistGate>
    </Provider>
  );
}

export default App;
