import { useState } from 'react';
import DataPlanner from './components/dataPlanner';
import TarefaPlanner from './components/tarefaPlanner';
import BotaoPlanner from './components/botaoPlanner';
import Navegacao from './components/navegacao';

function App() {

  const [diaAtual, setDiaAtual] = useState(new Date());

  const [modoPlanner, setModoPlanner] = useState(0);

  const [idTarefa, setIdTarefa] = useState(null);

  const [diaTarefa, setDiaTarefa] = useState(new Date());

  const [descricaoTarefa, setDescricaoTarefa] = useState("");

  const [horaTarefa, setHoraTarefa] = useState("");

  const [concluidaTarefa, setConcluidaTarefa] = useState(false);


  function salvarTarefa() {
    const novoId = Date.now();
    const novoDia = diaAtual;
    const novoConcluida = false;

    setIdTarefa(novoId);
    setDiaTarefa(novoDia);
    setConcluidaTarefa(novoConcluida);
    console.log("Tarefa salva. id:", novoId, "dia:", novoDia, "descrição:", descricaoTarefa, "hora:", horaTarefa, "concluída:", novoConcluida);
  }

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
            <TarefaPlanner modoPlanner={modoPlanner} descricaoTarefa={descricaoTarefa} horaTarefa={horaTarefa} setDescricaoTarefa={setDescricaoTarefa} setHoraTarefa={setHoraTarefa} />
            <BotaoPlanner modoPlanner={modoPlanner} eventModoPlanner={alternaModoPlanner} eventSalvarTarefa={salvarTarefa}   />
        </div>
        <Navegacao direction="right" event={atualizaDiaAtual} />
    </main>
    )

  }


export default App;
