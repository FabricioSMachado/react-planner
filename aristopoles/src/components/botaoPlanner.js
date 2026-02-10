import EventoAddTarefa from './Events.js'

function BotaoPlanner() {

    return (
        <div onClick={EventoAddTarefa} className="planner-dia-add">
          <div className="planner-dia-add-botao">+</div> 
        </div>
    )
}

export default BotaoPlanner