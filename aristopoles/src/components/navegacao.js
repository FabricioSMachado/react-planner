import Seta from './seta.js'
import styles from './navegacao.module.css'


function Navegacao({ direction = 'left' }) {
    return (
        <div className={styles["planner-botao"]}>
        <Seta direction={direction}/>
        </div>
    )
}

export default Navegacao