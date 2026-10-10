function StatisticsCard({ title, value }) {
    return (
        <div className="statistics-card">
            <p className="statistics-card-title">{title}</p>
            <h2 className="statistics-card-value">{value}</h2>
        </div>
    );
}

export default StatisticsCard;