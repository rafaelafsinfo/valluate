import styles from './LinkImg.module.css'



function LinkImg({to = '',text,img}){
    return(
        <div> 
            <a href={to} target="blank">
                <img src={img} className={styles.img} alt={to}/>
            </a>
            <h3>{text}</h3>
        </div>
    )
}

export default LinkImg