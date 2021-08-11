import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and yeet to reload.
        </p>
<table>
  <tr>
    <th>Berlin</th>
    <th>Hamburg</th>
    <th>München</th>
  </tr>
  <tr>
    <td>Miljöh</td>
    <td>Kiez</td>
    <td>Bierdampf</td>
   </tr>
   <tr>
     <td>Buletten</td>
     <td>Frikadellen</td>
     <td>Fleischpflanzerl</td>
   </tr>
</table>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
