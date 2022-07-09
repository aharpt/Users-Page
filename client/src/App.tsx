import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './components/ui/User';

function App() {
  return (
    <div className="App">
      <section style={{padding: '20px', marginRight: '85%'}}>
        <h3>User List:</h3>
      </section>
      <User />
    </div>
  );
}

export default App;
