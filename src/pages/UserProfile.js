
import { useLocation} from 'react-router-dom';

import styles from '../styles/settings.module.css';



const UserProfile = () => {
  const location = useLocation()
  console.log(location)
  

  const user = {}
  

  return (
    <div className={styles.settings}>
      <div className={styles.imgContainer}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
          alt=""
        />
      </div>

      <div className={styles.field}>
        <div className={styles.fieldLabel}>Email</div>
        <div className={styles.fieldValue}>{user?.email}</div>
      </div>

      <div className={styles.field}>
      <div className={styles.fieldLabel}>Name</div>
       <div className={styles.fieldValue}>{user?.name}</div>
        
        
      </div>

     

      <div className={styles.btnGrp}>
      <button
            className={`button ${styles.saveBtn}`}>
            Add Friend
      </button>
        
      <button
            className={`button ${styles.saveBtn}`}>
            Remove Friend
      </button>
        
      </div>
    </div>
  );
};

export default UserProfile;
