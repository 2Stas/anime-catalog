import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { FavoritesProvider } from './context/FavoritesContext'
import { AnimeStatusProvider } from "./context/AnimeStatusContext";

import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <FavoritesProvider>
        <AnimeStatusProvider>
        <App />
        </AnimeStatusProvider>
      </FavoritesProvider>
    </BrowserRouter>
  </StrictMode>
)
