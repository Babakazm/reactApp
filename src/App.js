import logo from './logo.svg';
import './App.css';
import BmiCalculator from './BmiCalculator';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <BmiCalculator />
      </header>
    </div>
  );
}

export default App;
