import styles from '../Vacancies/Vacancies.module.css';
import team from '../../assets/team.png';

//titulo da categoria de vagas
//Card vagas com titulo, tipo de vaga e faixa salaria]



function Vacancies(){
    return (
        <div className={styles.container__vacancies}>
            <h2 className={styles.announcement}>Open Vacancies!</h2>
            <h1 className={styles.title}>We are looking for talent</h1>
            <p className={styles.subtitle}>We are a 100% remote team with people from all over Brazil.</p>
            <img src={team} alt="" />
        </div>
    )
}


export default Vacancies;