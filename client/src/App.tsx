import React from 'react';
import './App.css';

function App() {
  const [data, setData] = React.useState<null | string>(null);
  
  React.useEffect(() => {
    fetch("/api").then(res => res.json()).then(data => setData(data[0].firstName + " " + data[0].lastName))
  }, [])

  return (
    <div className="App">
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}

export default App;
