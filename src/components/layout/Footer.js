import {FaFacebook,FaInstagram, FaLinkedin}  from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
function Footer(){
    
    
    return (<footer className={styles.footer}>
        <ul className={styles.social_list}>
            <li>
                <Link to={"/company"}>
                    <FaFacebook />
                </Link>
            </li>
            <li>
                <Link to={"/company"}>
                    <FaInstagram/>
                </Link>
            </li>
            <li>
                <Link to={"/company"}>
                    <FaLinkedin/>
                </Link>
            </li>
        </ul>
        <p className={styles.copy_right}>
            <span>valluate</span> &copy; 2023
        </p>
    </footer>
    
    )
}

export default Footer