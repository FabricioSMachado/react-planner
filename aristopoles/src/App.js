import Seta from './components/seta';
import DataPlanner from './components/dataPlanner';
import TarefaPlanner from './components/tarefaPlanner';
import BotaoPlanner from './components/botaoPlanner';
import Navegacao from './components/navegacao';

function App() {

    const name = 'Aristópolis';
  return (

    <main>
      <div className="planner-botao">
      </div>
      <div className="planner-dia">
        <div className="planner-dia-data">
          01/01<br/>Segunda-feira
        </div>
        <div className="planner-dia-tarefas">
          Tarefa Exemplo
        </div>
        <div className="planner-dia-add">
          <div className="planner-dia-add-botao">+</div> 
        </div>
      </div>
      <Navegacao direction="right" />
  </main>

  )
}

export default App;
