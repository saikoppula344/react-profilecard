
import './App.css';

function App() {
  return (
    <div className="congrats-card-container">
    <h1 className="heading">Congratulations</h1>
    <div className="card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profile-image" alt ="nama"
      />
      <h1 className="card-title">Kiran V</h1>
      <p className="card-description">
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="watch-image" alt = "alll"
      />
    </div>
  </div>
  );
}

export default App;
