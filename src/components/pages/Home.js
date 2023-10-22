import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home(){
    return(
        <section className={styles.home_container}>
            <h1>
                Bem-vindo ao <span>Valluate</span>
            </h1>
            <p>começe a gerenciar seus orçamentos agora mesmo</p>
            <LinkButton to="/newproject" text="criar projetos"/>
            <img src={savings} alt="valluate"></img>
        </section>
    ) 
}

export default Home