import styles from './header.module.css';
import DesktopLogo from '../../assets/desktoplogo.png';
import{ useState } from 'react';
import { RiMenu3Fill } from "react-icons/ri";
import { BiSolidCaretRightCircle } from "react-icons/bi";
import { Link } from 'react-scroll';


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const renderDropdownMenu = () => {
    return (
      <div className={styles["dropdown-container"]}>
        {/* Hamburger Icon */
}
        <button className={styles["icon-button"]} onClick={toggleMenu}>
          {isOpen ? (
            <RiMenu3Fill color="#24165A" size={48} weight="bold" />
          ) : (
            <RiMenu3Fill color="#24165A" size={48} weight="bold" />
          )}
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className={styles["dropdown-menu"]}>
            <Link to="home" spy={true} offset={-90} smooth={true} duration={600} className={styles["menu-item"]}>About us</Link>
            <Link to="about" spy={true} offset={-90} smooth={true} duration={600} className={styles["menu-item"]}>Services</Link>
            <Link to="projects" spy={true} offset={-90} smooth={true} duration={600} className={styles["menu-item"]}>Projects</Link>
            <Link to="projects" spy={true} offset={-90} smooth={true} duration={600} className={styles["menu-item"]}>Careers</Link>
            <Link to="contact" spy={true} offset={-90} smooth={true} duration={600} className={styles["menu-item"]}>Contact</Link>
          </div>
        )}
      </div>
    )
  }

  return (
    <nav className={styles["navbar"]}>
      <div className={styles["navbar-container"]}>
        <Link to="home" spy={true} offset={-90} smooth={true} duration={600}>
          <img className={styles["nav-logo"]} src={DesktopLogo} alt="Desktop Logo" />
        </Link>
        <ul className={styles["nav-links-container"]}>
          <li><Link to="home" spy={true} offset={-90} smooth={true} duration={600} className={styles["nav-list-items"]}><BiSolidCaretRightCircle color="#0021F5" />About us</Link></li>
          <li><Link to="about" spy={true} offset={-90} smooth={true} duration={600} className={styles["nav-list-items"]}><BiSolidCaretRightCircle color="#0021F5" />Services</Link></li>
          <li><Link to="projects" spy={true} offset={-90} smooth={true} duration={600} className={styles["nav-list-items"]}><BiSolidCaretRightCircle color="#0021F5" />Projects</Link></li>
          <li><Link to="careers" spy={true} offset={-90} smooth={true} duration={600} className={styles["nav-list-items"]}><BiSolidCaretRightCircle color="#0021F5" />Careers</Link></li>
          <li><Link to="contact" spy={true} offset={-90} smooth={true} duration={600} className={styles["contact-button"]}>Contact Us</Link></li>
        </ul>
        {renderDropdownMenu()}
      </div>
    </nav>
  )
}
export default Header;

  