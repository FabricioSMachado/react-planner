import styles from './dataPlanner.module.css'


function DataPlanner() {
    return (
        <div className={styles["planner-dia-data"]}>
            <div className={styles.data}>
            01/01
            </div>
            <div className={styles.diaSemana}>
            Segunda-feira
            </div>
        </div>
    )
}

export default DataPlanner