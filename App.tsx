import React, { useEffect } from 'react';
import AppBody from './src/presenter/AppBody';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useRunBGTest } from './src/core/BackgroundService';

function App(): React.JSX.Element {
  const clientQuery = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,// disable refetch data when app is background
        staleTime: 10000 * 6,
      },
    },
  })

  useRunBGTest()
  return (
    <QueryClientProvider client={clientQuery} >
      <AppBody />
    </QueryClientProvider>)
}

export default App;
