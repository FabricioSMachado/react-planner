import styles from './botaoPlanner.module.css'


function BotaoPlanner({ modoPlanner, eventModoPlanner, eventSalvarTarefa }) {

    function handleClick() {
        if (modoPlanner === 1) {
            eventSalvarTarefa();
            eventModoPlanner();
        } else {
            eventModoPlanner();
        }
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