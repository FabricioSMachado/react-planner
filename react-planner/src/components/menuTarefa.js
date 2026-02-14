import styles from "./menuTarefa.module.css";
import { useEffect, useRef } from "react";

function MenuTarefa({ toggleMenuTarefa, idTarefa, ExcluirTarefa, EditarTarefa }) {

    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
             toggleMenuTarefa(null);
        }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [toggleMenuTarefa]);


    function handleMenuExcluirTarefa() {
        ExcluirTarefa(idTarefa);
        toggleMenuTarefa(null);
    }


    function handleMenuEditarTarefa() {
        EditarTarefa(idTarefa);
        toggleMenuTarefa(null);
    }



    return (
        <div ref={menuRef} className={styles.menuTarefa}>
            <div onClick={handleMenuExcluirTarefa} className={styles.menuTarefaItem}>
                Excluir tarefa
            </div>
            <div onClick={handleMenuEditarTarefa} className={styles.menuTarefaItem}>
                Editar tarefa
            </div>
        </div>
    );
}

export default MenuTarefa