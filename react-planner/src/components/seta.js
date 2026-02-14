import styles from './seta.module.css'

function Seta({ direction = 'left' }) {
  return (
    <span className={`${styles.seta} ${styles[direction]}`} />
  )
}

export default Seta
