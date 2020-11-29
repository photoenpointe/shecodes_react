import './App.css';
import Search from './Weather.js';

function App() {
  return (
    <div className="App">
      <header className="Header">
        <p className="datetime"> January 01, 2020  12:00</p>
      </header>
      <h1>Current weather</h1>
      <Search />
      <br />
      <footer className="footer">Created by <a href="https://github.com/photoenpointe/shecodes">Y.Bear</a></footer>
    </div>
  );
}

export default App;
