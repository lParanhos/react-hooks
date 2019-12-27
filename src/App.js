import React, { useState, useEffect, useMemo } from 'react';

function App() {

  function addTech() {
    setTech([...techs, newTech]);
    setNewTech('');
  }

  /** Fazemos uma desestruturação do useState
   * pois o mesmo nos retorna no primeiro parametro o nosso estado,
   *  e no segundo a função responsável por alterar o nosso estado
   */
  const [techs, setTech] = useState([]);

  const [newTech, setNewTech] = useState('')

  /** O useEffect veio para substituir os ciclos de vida de um componente baseado em classe, 
   * por exemplo: componentDidMount, componentDidUpdate e componentWillUnMount.
   * O primeiro parametro é a função que vai ser executada e o segundo é o "quando" ela vai ser eexecutada
   * no caso, abaixo, sempre que meu estado de techs forem alterados, será dispara a função. 
   * Os effects sempre são executados em primeira instancia
   * */

  /**Component didMount 
     * Como não passamos nenhum "estado" para ser monitorado, o nosso effect é executado apenas uma vez
    */
  useEffect(() => {
    const storageTechs = localStorage.getItem('tech');
    console.log(storageTechs)
    if (storageTechs) {
      setTech(JSON.parse(storageTechs))
    }

    /** Para conseguir ter o mesmo efeito do componentWillUnmount, basta retornar uma função 
     * Assim, antes de o componente ser desmontado, consiguimos fazer algo
     */
    //return () => {};
  }, [])


  /** Faz a mesma coisa coisa que o component didUpdate */
  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(techs))
  }, [techs]);

  /** Usamos o useMemo, basicamente, quando precisamos fazer alguns calculos baseados em x variaves/estados do 
   * nosso componente. Pois assim evitamos que o nossa função seja executada sempre que o render é chamado
   */

  /**Nossa função de techs.length, só será executada, no caso, quando nosso estado techs, for alterado */
  const techSize = useMemo(() => techs.length, [techs])

  return (
    <>
      <ul>
        {techs.map(tech => <li>{tech}</li>)}
      </ul>
      <strong>Você tem {techSize} tecnologias</strong>
      <br />
      <input type="text" value={newTech} onChange={(e) => setNewTech(e.target.value)} />
      <button type="button" onClick={addTech}>ADICIONAR</button>
    </>
  );
}

export default App;
