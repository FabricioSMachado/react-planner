import { useState } from 'react';
import DataPlanner from './components/dataPlanner';
import TarefaPlanner from './components/tarefaPlanner';
import BotaoPlanner from './components/botaoPlanner';
import Navegacao from './components/navegacao';

function App() {


  const [diaAtual, setDiaAtual] = useState(new Date());

  const [modoPlanner, setModoPlanner] = useState(0);

<<<<<<< HEAD
  const [descricaoTarefa, setDescricaoTarefa] = useState("");

  const [horaTarefa, setHoraTarefa] = useState("");

  const [tarefas, setTarefas] = useState([]);


  const tarefa = {
    id: null,
    dia: new Date(),
    descricao: "",
    hora: "",
    concluida: false
  }


  function salvarTarefa() {
    const novaTarefa = {
      id: Date.now(),
      dia: diaAtual,
      descricao: descricaoTarefa,
      hora: horaTarefa,
      concluida: false
    };

    setTarefas(prevTarefas => [...prevTarefas, novaTarefa]);

    console.log("Tarefas atuais:", tarefas);
    console.log("Nova lista:", [...tarefas, novaTarefa]);
    console.log("Tarefa salva:", novaTarefa);

    setDescricaoTarefa("");
    setHoraTarefa("");
  }
=======
  const tarefas = [
  { id: 1, titulo: "Tarefa Exemplo", hora: "10:00" },
  { id: 2, titulo: "Estudar React", hora: "14:00" },
  { id: 3, titulo: "Academia", hora: "18:30" }
  ];
>>>>>>> derpao

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
<<<<<<< HEAD
            <TarefaPlanner modoPlanner={modoPlanner} descricaoTarefa={descricaoTarefa} horaTarefa={horaTarefa} setDescricaoTarefa={setDescricaoTarefa} setHoraTarefa={setHoraTarefa} />
            <BotaoPlanner modoPlanner={modoPlanner} eventModoPlanner={alternaModoPlanner} eventSalvarTarefa={salvarTarefa}   />
=======
            <TarefaPlanner modoPlanner={modoPlanner} tarefas={tarefas} />
            <BotaoPlanner modoPlanner={modoPlanner} event={alternaModoPlanner} />
>>>>>>> derpao
        </div>
        <Navegacao direction="right" event={atualizaDiaAtual} />
    </main>
    )

  }


export default App;
