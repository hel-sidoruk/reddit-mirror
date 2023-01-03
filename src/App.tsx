import React from 'react';
import { CardsList } from './components/CardsList';
import { Content } from './components/Content';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PostModal } from './components/PostModal';
import { Auth } from './components/Auth';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Header />
          <Content>
            <CardsList />
            <Routes>
              <Route path="/posts/:id" element={<PostModal />} />
              <Route path="/auth" element={<Auth />} />
            </Routes>
          </Content>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
