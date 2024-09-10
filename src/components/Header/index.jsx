import styles from '../Header/Header.module.css';
import logo from '../../assets/logo.svg';

function Header(){
    return (
        <header className={styles.header}>
            <div>
                <img src={logo} alt="OptimusTech's Logo" />
            </div>
            <nav className={styles.nav__header}>
                <ul className={styles.list__header}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Recourses</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
            <div className={styles.container__button}>
                <button className={styles.btn__login}>Login</button>
                <button className={styles.btn__signUp}>Sign Up</button>
            </div>
        </header>
    )
}


export default Header;