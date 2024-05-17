import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { configureStore } from '@reduxjs/toolkit'
import seriesSlice from './slices/series-slice.ts'
import { Provider } from 'react-redux'
import { RouterProvider, createRouter } from "@tanstack/react-router"
import { routeTree } from './routeTree.gen.ts'

const queryClient = new QueryClient();
const store = configureStore({
  reducer: {
    series: seriesSlice
  }
});

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
