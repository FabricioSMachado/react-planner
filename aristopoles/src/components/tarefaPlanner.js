import styles from './tarefaPlanner.module.css'


function TarefaPlanner({ modoPlanner, tarefas, descricaoTarefa, horaTarefa, setDescricaoTarefa, setHoraTarefa, diaAtual, toggleConcluida }) {

    console.log("PROPS COMPLETAS:", arguments[0]);

    console.log("tarefas:", tarefas);
    console.log("diaAtual:", diaAtual);

    const tarefasDoDia = tarefas.filter(tarefa => {
    const d1 = new Date(tarefa.dia);
    const d2 = new Date(diaAtual);

    return (
        d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate()
    );
    });

    const tarefasOrdenadas = [...tarefasDoDia].sort(
    (a, b) => a.concluida - b.concluida
  );

    if (modoPlanner === 0) {
    return (

    <>

        

          {tarefasOrdenadas.map((tarefa) => (
            <div key={tarefa.id} className={styles["planner-dia-tarefas"]}>
            <div className={styles.checkTarefa}>
                <input type="checkbox"
                checked={tarefa.concluida}
                onChange={() => toggleConcluida(tarefa.id)} 
                />
                
            </div>

            <div className={styles.conteudoTarefa}>
            <span className={`${styles.tituloTarefa} ${tarefa.concluida && styles.concluida}`}>
                {tarefa.descricao}
            </span>

                <span className={styles.horaTarefa}>
                {tarefa.hora}
                </span>
            </div>
            <div className={styles.acaoTarefa}>
                :
            </div>
            </div>
  ))}
    </>
    )
}

    else if (modoPlanner === 1) {
        return (

            <div className={styles["planner-dia-tarefas"]}>
            <form>
                <input
                value={descricaoTarefa}
                onChange={(e) => setDescricaoTarefa(e.target.value)}
                type="text"
                placeholder="Nome da tarefa"
                className={styles.inputTexto}
            />

                <input
                value={horaTarefa}
                onChange={(e) => setHoraTarefa(e.target.value)}
                type="time"
                className={styles.inputHora}
                />
            </form>
        </div>

        )

    }

}

export default TarefaPlanner