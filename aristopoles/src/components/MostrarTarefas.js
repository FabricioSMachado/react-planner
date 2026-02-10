

function MostrarTarefas({idTarefa, nomeTarefa, descricaoTarefa}) {

    return (
        <div>
            <p>{idTarefa}</p>
            <p>{nomeTarefa}</p>
            <p>{descricaoTarefa}</p>
        </div>
    )

}

export default MostrarTarefas;