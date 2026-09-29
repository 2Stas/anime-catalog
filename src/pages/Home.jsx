import { Link } from "react-router-dom";
import "../style/Home.css";

const Home = () => {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <h1 className="hero-title">Ласкаво просимо до Каталогу Аніме</h1>
                <p className="hero-description">
                    Відкривайте для себе тисячі дивовижних історій, досліджуйте популярні тайтли, 
                    зберігайте улюблене та знаходьте нові шедеври разом із нашою платформою.
                </p>
                <div className="hero-actions">
                    <Link to="/anime" className="btn btn-primary">
                        Перейти до каталогу
                    </Link>
                </div>
            </section>

            {/* Quick Navigation / CTA Section */}
            <section className="quick-nav-section">
                <div className="nav-card">
                    <h3>Шукаєте щось конкретне?</h3>
                    <p>Скористайтеся швидким пошуком за назвою.</p>
                    <Link to="/search" className="btn btn-secondary">
                        Знайти аніме
                    </Link>
                </div>
                <div className="nav-card">
                    <h3>Ваші улюблені</h3>
                    <p>Переглядайте збережені тайтли в одному місці.</p>
                    <Link to="/favorites" className="btn btn-secondary">
                        Мої улюблені
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;