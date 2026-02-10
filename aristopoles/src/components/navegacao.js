import Seta from './seta.js'
import EventoNav from './Events.js'

function Navegacao({ direction = 'left' }) {

    return (

        <div onClick={EventoNav(direction)} className="planner-botao">
        <Seta direction={direction}/>
        </div>     

    )
}

export default Navegacao