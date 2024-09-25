import React from 'react';
import AppBody from './src/presenter/AppBody';
import { QueryClient, QueryClientProvider } from 'react-query';

function App(): React.JSX.Element {
  const clientQuery = new QueryClient()
  return (
    <QueryClientProvider client={clientQuery} >
      <AppBody />
    </QueryClientProvider>)
}

export default App;
