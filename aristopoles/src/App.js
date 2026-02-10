import Seta from './components/seta'

function App() {

    const name = 'Aristópolis';
  return (
    <main>
      <div className="planner-botao">
        <Seta/>
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
      <div className="planner-botao">
        <Seta direction="right" />
      </div>
  </main>

  )
}

export default App;
