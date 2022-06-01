import styles from '../../styles/Nav.module.css'
import NavItem from './NavItem';


const NavBar = () => {
  return (
    <div className={styles.navbar}> 
      <NavItem />
    </div>
  );
};

export default NavBar;
