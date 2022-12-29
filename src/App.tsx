import React from 'react';
import { CardsList } from './components/CardsList';
import { Content } from './components/Content';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { CommentContextProvider } from './context/commentContext';
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
          <CommentContextProvider>
            <Content>
              <PostsContextProvider>
                <CardsList />
              </PostsContextProvider>
            </Content>
          </CommentContextProvider>
        </Layout>
      </UserContextProvider>
    </tokenContext.Provider>
  );
}

export default App;
