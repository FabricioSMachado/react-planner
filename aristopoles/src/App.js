import { useState } from 'react';
import DataPlanner from './components/dataPlanner';
import TarefaPlanner from './components/tarefaPlanner';
import BotaoPlanner from './components/botaoPlanner';
import Navegacao from './components/navegacao';

function App() {

  const [diaAtual, setDiaAtual] = useState(new Date());

  const [modoPlanner, setModoPlanner] = useState(0);


  function atualizaDiaAtual(direction) {
    const novoDia = new Date(diaAtual);
    if (direction === "left") {
      novoDia.setDate(novoDia.getDate() - 1);
    } else if (direction === "right") {
      novoDia.setDate(novoDia.getDate() + 1);
    }
    setDiaAtual(novoDia);
  }


  function alternaModoPlanner() {
    if (modoPlanner === 0) {
      setModoPlanner(1);
    } else if (modoPlanner === 1) {
      setModoPlanner(0);
    }
  }
    

    return (
      <main>
          <Navegacao direction="left" event={atualizaDiaAtual} />
        <div className="planner-dia">     
            <DataPlanner diaAtual={diaAtual}/>
            <TarefaPlanner modoPlanner={modoPlanner}/>
            <BotaoPlanner modoPlanner={modoPlanner} event={alternaModoPlanner} />
        </div>
        <Navegacao direction="right" event={atualizaDiaAtual} />
    </main>
    )

  }


export default App;
