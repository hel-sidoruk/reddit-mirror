import React from 'react';
import { CardsList } from './components/CardsList';
import { Content } from './components/Content';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { PostsContextProvider } from './context/postsContext';
import { tokenContext } from './context/tokenContext';
import { UserContextProvider } from './context/userContext';
import { useToken } from './hooks/useToken';

function App() {
  const [token] = useToken();
  return (
    <tokenContext.Provider value={token}>
      <UserContextProvider>
        <Layout>
          <Header />
          <Content>
            <PostsContextProvider>
              <CardsList />
            </PostsContextProvider>
          </Content>
        </Layout>
      </UserContextProvider>
    </tokenContext.Provider>
  );
}

export default App;
