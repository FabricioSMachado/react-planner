import Seta from './seta.js'

function Navegacao({ direction = 'left' }) {
    return (
        <div className="planner-botao">
        <Seta direction={direction}/>
        </div>
    )
}

export default Navegacao