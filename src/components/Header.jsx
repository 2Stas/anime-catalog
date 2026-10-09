import { Link } from 'react-router-dom'
import "../style/Header.css";


function Header() {
    return (
        <header>
            <h1>Anime Catalog</h1>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/anime">Anime</Link>
                <Link to="/genres">Genres</Link>
                <Link to="/search">Search</Link>
                <Link to="/favorites">Favorites</Link>
                <Link to="/watchlist" className="nav-link">Watchlist</Link>
            </nav>
        </header>
    )
}

export default Header