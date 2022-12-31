import React from 'react';
import { CardsList } from './components/CardsList';
import { Content } from './components/Content';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Header />
        <Content>
          <CardsList />
        </Content>
      </Layout>
    </Provider>
  );
}

export default App;
