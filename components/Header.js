import styles from '../styles/Header.module.css'
import Logo from '../assets/svg/logo.svg'

function Header() {
  return (
    <div className = {styles.Header}>
      <Logo className = {styles.logo_group} id={styles.logo_image} alt='logo'/>
      <h1 className= {styles.logo_group} id={styles.logo_title}>Bee-Bope</h1>
    </div>
  );
}

export default Header;
