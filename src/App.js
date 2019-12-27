import React, { useState } from 'react';

function App() {

  function addTech() {
    setTech([...techs, newTech]);
    setNewTech('');
  }

  const [techs, setTech] = useState([
    'ReactJS',
    'React Native'
  ]);

  const [newTech, setNewTech] = useState('')

  return (
    <>
      <ul>
        {techs.map(tech => <li>{tech}</li>)}
      </ul>
      <input type="text" value={newTech} onChange={(e) => setNewTech(e.target.value)} />
      <button type="button" onClick={addTech}>ADICIONAR</button>
    </>
  );
}

export default App;
