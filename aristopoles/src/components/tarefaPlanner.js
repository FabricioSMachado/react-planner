import styles from './tarefaPlanner.module.css'


function TarefaPlanner() {
    return (

       /* oi fabricio <div className={styles["planner-dia-tarefas"]}>
            <form>
                <input
                type="text"
                placeholder="Nome da tarefa"
                className={styles.inputTexto}
            />

                <input
                type="time"
                className={styles.inputHora}
                />
            </form>
        </div> */

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