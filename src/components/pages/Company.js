import styles from './Company.module.css'
import LinkImg from '../layout/LinkImg'

import amanda from '../../img/amanda.png'
import ana from '../../img/ana.png'
import eduardo from '../../img/eduardo.png'
import evelin from '../../img/evelin.png'
import isa from '../../img/isa.png'
import paula from '../../img/paula.png'
import rafael from '../../img/rafael.png'

function Company(){
    return(
        <section className={styles.home_container}>
            <h1>
                <span>integrantes</span>
            </h1>
            <div className={styles.link}>
                <p></p>
                <LinkImg text="Amanda Fantine Hernandes Diniz " img={amanda} to='https://instagram.com/amanda_fantine_diniz?igshid=OGQ5ZDc2ODk2ZA=='/>
                <LinkImg text="Ana Luiza de Camargo Gregório da Silva" img={ana} to='https://www.instagram.com/_ana_luiza_camargo_/'/>
                <LinkImg text="Eduardo Gabriel Castro Diniz" img={eduardo} to='https://www.instagram.com/edu.diniz2/'/>
                <LinkImg text="Evelin Visoto Carneiro Fernandes" img={evelin} to='https://www.instagram.com/evelinvisoto/'/>
                <LinkImg text="Isabelly Pacheco Marinho" img={isa} to='https://www.instagram.com/belly_.marinhxv/'/>
                <LinkImg text="Paula Emy Tamay" img={paula} to='https://www.instagram.com/paulatamay_/'/>
                <LinkImg text="Rafael Alves Freitas da Silva" img={rafael} to='https://www.instagram.com/rafael_info_dc/'/>
            </div>
        </section>
    ) 
}

export default Company