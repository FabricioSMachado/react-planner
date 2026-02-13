import styles from "./menuTarefa.module.css";

function menuTarefa() {

    return (
        <div className={styles.menuTarefa}>
            <div className={styles.menuTarefaItem}>
                Excluir tarefa
            </div>
            <div className={styles.menuTarefaItem}>
                Editar tarefa
            </div>
        </div>
    );
}

export default menuTarefa