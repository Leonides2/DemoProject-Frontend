import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import { GlobalConfigProvider } from './context/globalConfigContextProvider.tsx'

const client = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <GlobalConfigProvider>
        <App />
      </GlobalConfigProvider>
    </QueryClientProvider>
  </StrictMode>,
)
