import styles from '../Comments/Comments.module.css';
import avatar from '../../assets/Avatar.svg';

function Comments(){
    return (
         
        <div className={styles.container__comments}>

                <div className={styles.comments__itens}>
                    <div className={styles.comments}>
                        <h2 className={styles.title}>See what our employees say about us</h2>
                        <p className={styles.comments__user}>OptimusTech cares about the health of its employees and always tries to give us all possible assistance.</p>
                    </div>
                    <div className={styles.collaborator}>
                        <img src={avatar} alt="user"/>
                        <h2>Júlia Castro</h2>
                        <p>Web Developer</p>
                    </div>
                </div>
        
        </div>
       
    
    )

}

export default Comments;