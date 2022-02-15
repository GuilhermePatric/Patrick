import styles from '../css/ConteudoType3.module.css'
 
export default (props) => {
    return ( 
        <div className={styles.containerType3}>
            <h1 className={styles.titleType3}>{props.title}</h1>
            <div className={styles.conteudoType3}>
                <div className={styles.cards}>
                        <img src={props.icon1 } alt="" />
                        <h4>{props.frase1}</h4>
                </div>
                <div className={styles.cards}>
                        <img src={props.icon2 } alt="" />
                        <h4>{props.frase2}</h4>
                </div>
                <div className={styles.cards}>
                        <img src={props.icon3 } alt="" />
                        <h4>{props.frase3}</h4>
                </div>
            </div>
        </div>
    )

}