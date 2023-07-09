import styles from '../styles/navbar.module.css'
import { NavLink }  from 'react-router-dom';
import { useAuth } from '../hooks';


const Navbar = () =>{
    const auth = useAuth()
    return (
        <div className={styles.nav}>
            <div className={styles.leftDiv}>
                <NavLink to="/" end>
                    <img className={styles.logo} src="https://cdn-icons-png.flaticon.com/512/3097/3097071.png" alt="" />
                </NavLink>
            </div>

            <div className={styles.rightNav}>
                {auth.user && (<div className={styles.user}>
                    <NavLink to="/settings">
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" alt="" className={styles.userDp} />
                    </NavLink>
                    <span>{auth.user.name}</span>
                </div>
                )}
                <div className={styles.navLinks}>
                    <ul>
                        {auth.user? (
                            <>
                            <li onClick={auth.logout}>Logout</li>
                            </>
                        ):(
                            <>
                        <li>
                            <NavLink to="/login">Log In</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register">Register</NavLink>
                        </li>
                        </>
                        )}
                    </ul>
                </div>
            </div>
        </div>

    )
}
export default Navbar;