import styles from '../styles/navbar.module.css';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { searchUsers } from '../api';

const Navbar = () => {
  const [results, setResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  const auth = useAuth();
  useEffect(()=>{
    const fetchUsers = async () =>{

        const response = await searchUsers(searchText)

        if(response.success){
            setResults(response.data.users)
        }

    }
    if(searchText.length>2){
    fetchUsers()

    }else{
        setResults([])
    }


  },[searchText])
  return (
    <div className={styles.nav}>
      <div className={styles.leftDiv}>
        <NavLink to="/" end>
          <img
            className={styles.logo}
            src="https://cdn-icons-png.flaticon.com/512/3097/3097071.png"
            alt=""
          />
        </NavLink>
      </div>
      <div className={styles.searchContainer}>
        <img
          className={styles.searchIcon}
          src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
          alt=""
        />
        <input
          placeholder="Search Users"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        {results.length > 0 &&<div className={styles.searchResults}>
            <ul>
                {results.map(user=> <li className={styles.searchResultsRow} key={`user-${user._id}`}>
                <Link to={`user/${user._id}`}>
                    <img src='https://cdn-icons-png.flaticon.com/512/3135/3135768.png'
                    alt=''
                    />
                    <span>{user.name}</span>

                </Link>
                </li>)}
            </ul>

            
            </div>}
      </div>

      <div className={styles.rightNav}>
        {auth.user && (
          <div className={styles.user}>
            <NavLink to="/settings">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
                alt=""
                className={styles.userDp}
              />
            </NavLink>
            <span>{auth.user.name}</span>
          </div>
        )}
        <div className={styles.navLinks}>
          <ul>
            {auth.user ? (
              <>
                <li onClick={auth.logout}>Logout</li>
              </>
            ) : (
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
  );
};
export default Navbar;
