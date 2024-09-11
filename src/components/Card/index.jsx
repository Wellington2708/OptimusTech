import styles from '../Card/Card.module.css';

function Card({number, subtitle, description}){

    return (
        <div className={styles.container__card}>
            <h1 className={styles.metric}>{number}</h1>
            <h3 className={styles.subtitle}>{subtitle}</h3>
            <p className={styles.description}>{description}</p>
        </div>
  
    )
}

export default Card;