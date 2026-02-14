import styles from "./menuTarefa.module.css";
import { useEffect, useRef } from "react";

function MenuTarefa({ toggleMenuTarefa }) {

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



    return (
        <div ref={menuRef} className={styles.menuTarefa}>
            <div className={styles.menuTarefaItem}>
                Excluir tarefa
            </div>
            <div className={styles.menuTarefaItem}>
                Editar tarefa
            </div>
        </div>
    );
}

export default MenuTarefa