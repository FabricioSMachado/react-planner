import styles from './botaoPlanner.module.css'


function BotaoPlanner() {

    function eventClickPlannerAdd() {
        window.alert("Adicionar dia no planner")
    }

    return (

       /* oi fbaarioc <div onClick={null} className={styles["planner-dia-add"]}>
          <div className={styles["planner-dia-add-botao"]}>Salvar</div> 
        </div> */

        <div onClick={eventClickPlannerAdd} className={styles["planner-dia-add"]}>
          <div className={styles["planner-dia-add-botao"]}>+</div> 
        </div>
    )
}

export default BotaoPlanner