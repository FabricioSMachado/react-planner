import styles from './tarefaPlanner.module.css'


function TarefaPlanner({ modoPlanner }) {


    if (modoPlanner === 0) {
    return (

    <>
          {tarefas.map((tarefas) => (
            <div key={tarefas.id} className={styles["planner-dia-tarefas"]}>
            <div className={styles.checkTarefa}>
                <input type="checkbox" />
            </div>
            <div className={styles.conteudoTarefa}>
                <span className={styles.tituloTarefa}>
                {tarefas.titulo}
                </span>
                <span className={styles.horaTarefa}>
                {tarefas.hora}
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