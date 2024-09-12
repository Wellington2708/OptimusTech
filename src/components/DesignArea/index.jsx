import styles from '../DesignArea/DesignArea.module.css';
import DesignVacancies from '../DesignVacancies';

const design = [
    {
        title: 'Product Designer',
        typeJob: 'Full Time',
        salary: 'R$ 7000.00'
    },
    {
        title: 'UX Designer',
        typeJob: 'Full Time',
        salary: 'R$ 6000.00'
    }
]

function DesignArea(){
    return (
        <div className={styles.container__vacancies__design}>
            <h2 className={styles.title}>Design</h2>
            {design.map((item, index) => (
                <DesignVacancies key={index} {...item}/>
        
            )
        )}
        </div>
    )
}

export default DesignArea;
