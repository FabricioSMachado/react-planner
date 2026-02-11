
import { useState } from 'react';
import DataPlanner from './components/dataPlanner';
import TarefaPlanner from './components/tarefaPlanner';
import BotaoPlanner from './components/botaoPlanner';
import Navegacao from './components/navegacao';

function App() {

  const [diaAtual, setDiaAtual] = useState(new Date().getDate())

  function atualizaDia(direction) {

    const novaData = new Date(diaAtual)

    if (direction === 'left') {
      novaData.setDate(novaData.getDate() - 1)
    } else if (direction === 'right') {
      novaData.setDate(novaData.getDate() + 1)
    }
    setDiaAtual(novaData.getDate())
  }


  return (
    <main>
        <Navegacao direction="left" atualizaDia={atualizaDia} />
      <div className="planner-dia">     
          <DataPlanner diaAtual={diaAtual}/>
          <TarefaPlanner/>
          <BotaoPlanner/>
          <div>{diaAtual}</div>
      </div>
      <Navegacao direction="right" atualizaDia={atualizaDia} />
  </main>

  )
}

export default App;
