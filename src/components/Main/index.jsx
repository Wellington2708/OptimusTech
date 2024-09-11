import styles from '../Main/Main.module.css';

function Main() {
    return (
            <main className={styles.main}>
                <h3 className={styles.subtitle}>About us</h3>
                <h1 className={styles.title}>Why are we different?</h1>
                <p className={styles.description__aboutUs}>We focus on the details in everything we do. All to help businesses around the world focus on what really matters to them.</p>
            </main>
    )
}


export default Main;