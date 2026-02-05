

function App() {

    const name = 'Aristópolis';
  return (
    <div class="planner">
  <header class="planner-header-datas">

  </header>

  <main className="planner-semana">
    <div className="dia-semana">
      <header className="dia-semana-header">
        {name}
      </header>

      <ul className="lista-tarefas">
        <li className="tarefa">
          Tarefa 1
        </li>
        <li className="tarefa">
          Tarefa 2
        </li>
      </ul>

      <button className="add-tarefa">+</button>
    </div>
    
  </main>
</div>

  )
}

export default App;
