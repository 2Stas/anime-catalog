import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <h1>Anime Catalog</h1>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/anime">Anime</Link>
                <Link to="/search">Search</Link>
                <Link to="/favorites">Favorites</Link>
            </nav>
        </header>
    )
}

export default Header