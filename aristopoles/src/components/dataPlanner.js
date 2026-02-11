import styles from './dataPlanner.module.css'


function DataPlanner({ diaAtual }) {

    const diaSemana = diaAtual.toLocaleDateString('pt-BR', { weekday: 'long' });

    return (
        <div className={styles["planner-dia-data"]}>
            <div className={styles.data}>
            {diaAtual.getDate()}/{diaAtual.getMonth() + 1}
            </div>
            <div className={styles.diaSemana}>
            {diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1)}
            </div>
        </div>
    )
}

export default DataPlanner