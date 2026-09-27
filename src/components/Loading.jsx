import "../style/Loading.css";

function Loading() {
    return (
        <div className="loading-container">
            <div className="loading-spinner"></div>
            <p className="loading-text">Loading anime...</p>
        </div>
    );
}

export default Loading;