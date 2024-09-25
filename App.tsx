import React from 'react';
import AppBody from './src/presenter/AppBody';
import { QueryClient, QueryClientProvider } from 'react-query';

function App(): React.JSX.Element {
  const clientQuery = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,// disable refetch data when app is background
        staleTime: 10000 * 6,
      },
    },
  })
  return (
    <QueryClientProvider client={clientQuery} >
      <AppBody />
    </QueryClientProvider>)
}

export default App;
