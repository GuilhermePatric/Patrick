import style from '../css/ConteudoOne.module.css'

export default (props) => {

    return (
        <div >
            <div class={style.containerTitle}>
                <h1>{props.title}</h1>
            </div>
            <div class={style.containerprincipal}>

                <div className={style.containerConteudo}>
                    <img width="260px" src={props.img1} alt="imagem conteudo props1" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div className={style.containerConteudo}>
                    <img width="260px" src={props.img2} alt="imagem conteudo props2" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div className={style.containerConteudo}>
                    <img width="260px" src={props.img3} alt="imagem conteudo props3" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div className={style.containerConteudo}>
                    <img width="260px" src={props.img4} alt="imagem conteudo props4" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>  
                </div>
            </div>
        </div>
    )
}