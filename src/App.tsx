import React from 'react';
import { Layout } from './components/Layout';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { Header } from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Header />
          <AppRouter />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
