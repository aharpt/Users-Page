import React from 'react';
import User from './components/ui/User';
import Dialog from './components/ui/Dialog';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <div className="App">
      <section style={{padding: '20px', marginRight: '85%'}}>
        <h3>User List:</h3>
      </section>
      <User />
      <Dialog onPrimaryButtonClick={() => {console.log(`User Saved to DB...`)}} buttonText="Add" headingText="Add User" />
    </div>
  );
}

export default App;
