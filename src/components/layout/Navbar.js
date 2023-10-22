import {Link} from 'react-router-dom' 
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/logo.png'

function Navbar(){
    window.onload = function(){
        const list = document.getElementsByClassName('list').length
        console.log(list)
    }
    return(
        <nav class={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="valluate"/>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/projects">Projetos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/company">Integrantes</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar