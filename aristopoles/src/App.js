import MostrarTarefas from "./components/MostrarTarefas";

function App() {

  const idTarefa = 1;
  const nomeTarefa = "Comprar pão";
  const descricaoTarefa = "Ir até a padaria e comprar um pão francês";

  return (

    <main>
      <div className="planner-botao">
      </div>
      <div className="planner-dia">
        <div className="planner-dia-data">
          01/01<br/>Segunda-feira
        </div>
        <div className="planner-dia-tarefas">
          <MostrarTarefas idTarefa={idTarefa} nomeTarefa={nomeTarefa} descricaoTarefa={descricaoTarefa}/>
        </div>
        <div className="planner-dia-add">
          <div className="planner-dia-add-botao">+</div> 
        </div>
      </div>
      <div className="planner-botao">
      </div>
  </main>

  )
}

export default App;
