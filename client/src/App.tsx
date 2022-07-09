import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './components/ui/User';

function App() {
  return (
    <div className="App">
      <section style={{backgroundColor: 'lightgrey', padding: '20px'}}>
        <h3>Users:</h3>
      </section>
      <User />
    </div>
  );
}

export default App;
