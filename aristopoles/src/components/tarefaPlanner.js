import styles from './tarefaPlanner.module.css'


function TarefaPlanner() {
    return (
        <div className={styles["planner-dia-tarefas"]}>
         <div className={styles.checkTarefa}>
            <input type="checkbox" />
         </div>

        <div className={styles.conteudoTarefa}>
            <span className={styles.tituloTarefa}>Tarefa Exemplo</span>
            <span className={styles.horaTarefa}>10:00</span>
        </div>
        <div className={styles.acaoTarefa}>
        ⋮
        </div>
        </div>
    )
}

export default TarefaPlanner