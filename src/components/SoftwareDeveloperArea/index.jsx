import styles from '../SoftwareDeveloperArea/SoftwareDeveloperArea.module.css'
import SoftwareVacancies from '../SoftwareVacancies';

const software = [
    {
        title: 'Developer iOS',
        typeJob: 'Full Time',
        salary: 'R$ 8000.00'
    },
    {
        title: 'Developer Frontend',
        typeJob: 'Full Time',
        salary: 'R$ 7000.00'
    },
    {
        title: 'Developer Backend',
        typeJob: 'Full Time',
        salary: 'R$ 8000.00'
    }
]

function SoftwareDeveloperArea(){
    return (
        <div className={styles.container__vacancies__software}>
            <h2 className={styles.title}>Software Developer</h2>
            {software.map((item, index) => (
                <SoftwareVacancies key={index} {...item}/>
        
            )
        )}
        </div>
    )
}

export default SoftwareDeveloperArea;

