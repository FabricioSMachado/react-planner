import Seta from './seta.js'
import styles from './navegacao.module.css'

function Navegacao({ direction = 'left', event }) { 

    function handleClick() {
        event(direction);
    }

    return (
        <div onClick={handleClick} className={styles["planner-botao"]}>
        <Seta direction={direction}/>
        </div>     

    )
}

export default Navegacao