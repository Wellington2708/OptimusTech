import styles from './SoftwareVacancies.module.css'
function SoftwareVacancies({title, typeJob, salary}){
    return (
        <div className={styles.container__vacancies}>
            <h2 className={styles.title}>{title}</h2>
        <div className={styles.container__details}>
            <p className={styles.info__typeJob}>{typeJob}</p>
            <p className={styles.info__salary}>{salary}</p>
        </div>
        </div>

    )
}

export default SoftwareVacancies;
