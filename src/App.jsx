import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import { AnimeListPage } from './pages/AnimeListPage';
import AnimeDetailsPage from './pages/AnimeDetails'
import SearchPage from './pages/SearchPage'
import FavoritesPage from './pages/FavoritesPage'
import NotFound from './pages/NotFound'
import "./style/App.css"

function App() {
    return (
        <>
            <Header />

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/anime" element={<AnimeListPage />} />
                    <Route path="/anime/:id" element={<AnimeDetailsPage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/favorites" element={<FavoritesPage />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>

            <Footer />
        </>
    )
}

export default App