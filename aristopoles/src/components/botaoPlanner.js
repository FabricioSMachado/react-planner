import styles from './botaoPlanner.module.css'


function BotaoPlanner({ modoPlanner, event }) {

    function handleClick() {
        event();
    }

    if (modoPlanner === 0) {
        return (
            <div onClick={handleClick} className={styles["planner-dia-add"]}>
            <div className={styles["planner-dia-add-botao"]}>+</div> 
            </div>
        )

} else if (modoPlanner === 1) {
    return (
        <div onClick={handleClick} className={styles["planner-dia-add"]}>
          <div className={styles["planner-dia-add-botao"]}>Salvar</div> 
        </div>
    )
}

}

export default BotaoPlanner