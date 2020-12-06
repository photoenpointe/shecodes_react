import './App.css';
import Weather from './Weather.js';

function App() {
  return (
    <div className="App">
      <header className="Header">
        Weather App
      </header>
      <h1>Current weather in....</h1>
      <Weather />
      <br />
      <footer className="footer">Created by <a href="https://github.com/photoenpointe/shecodes">Y.Bear</a></footer>
    </div>
  );
}

export default App;
