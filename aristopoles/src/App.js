import { useState } from 'react';
import DataPlanner from './components/dataPlanner';
import TarefaPlanner from './components/tarefaPlanner';
import BotaoPlanner from './components/botaoPlanner';
import Navegacao from './components/navegacao';

function App() {

  const [diaAtual, setDiaAtual] = useState(new Date());

  function atualizaDiaAtual(direction) {
    const novoDia = new Date(diaAtual);
    if (direction === "left") {
      novoDia.setDate(novoDia.getDate() - 1);
    } else if (direction === "right") {
      novoDia.setDate(novoDia.getDate() + 1);
    }
    setDiaAtual(novoDia);
  }

  return (
    <main>
        <Navegacao direction="left" onNavigate={atualizaDiaAtual} />
      <div className="planner-dia">     
          <DataPlanner diaAtual={diaAtual}/>
          <TarefaPlanner/>
          <BotaoPlanner/>
      </div>
      <Navegacao direction="right" onNavigate={atualizaDiaAtual} />
  </main>

  )
}

export default App;
