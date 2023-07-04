import styles from '../styles/navbar.module.css'
import { NavLink }  from 'react-router-dom';

const Navbar = () =>{
    return (
        <div className={styles.nav}>
            <div className={styles.leftDiv}>
                <NavLink to="/" end>
                    <img className={styles.logo} src="https://cdn-icons-png.flaticon.com/512/3097/3097071.png" alt="" />
                </NavLink>
            </div>

            <div className={styles.rightNav}>
                <div className={styles.user}>
                    <NavLink to="/">
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" alt="" className={styles.userDp} />
                    </NavLink>
                    <span>Pranav</span>
                </div>
                <div className={styles.navLinks}>
                    <ul>
                        <li>
                            <NavLink to="/login">Log In</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Log Out</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Register</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
export default Navbar;