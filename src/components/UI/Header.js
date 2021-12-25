import styles from './Header.module.css';
import Timer from './Timer'

const Header = (props) => {
    return (
        <header className={styles.header}>
            <h1>JEE MAINS 2022</h1>
            <div>
            <p>Username : {props.username}</p>
            <Timer timeOver={props.timeOver} onTimeOver={props.onTimeOver}/>
            </div>
        </header>
    )

}

export default Header;