
import DataPlanner from './components/dataPlanner';
import TarefaPlanner from './components/tarefaPlanner';
import BotaoPlanner from './components/botaoPlanner';
import Navegacao from './components/navegacao';

function App() {

  return (
    <main>
        <Navegacao direction="left" />
      <div className="planner-dia">     
          <DataPlanner/>
          <TarefaPlanner/>
          <BotaoPlanner/>
      </div>
      <Navegacao direction="right" />
  </main>

  )
}

export default App;
