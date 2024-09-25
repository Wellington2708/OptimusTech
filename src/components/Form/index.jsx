import styles from '../Form/Form.module.css';


function Form(){
    return (
        <div className={styles.container__form}>
            <div className={styles.title__description_container}>
                <h2 className={styles.title}>Follow our opportunities</h2>
                <p className={styles.description}>Be the first to know when new vacancies open!</p>
            </div>
            <form className={styles.form}>
                <input type="email" placeholder="Your e-mail"/>
                <button type="submit">Register</button>
            </form>
            <p className={styles.copyright}>© 2022 OptimusTech. Todos os direitos reservados.</p>
        </div>
    )
}

export default Form;