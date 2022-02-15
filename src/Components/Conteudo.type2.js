import styles from '../css/ConteudoType2.module.css';

export default (props) => {

    return ( 
        <div className={styles.containerConteudoTwo}>
            <div>
                <h1>Technology</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis dui augue, quis porta erat scelerisque et. Sed magna dolor, rutrum at tellus sed, commodo porttitor metus. Suspendisse lacinia vel tellus non tempus. Mauris nisi sem, vulputate id sem vel, auctor tempor sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis dui augue, quis porta erat scelerisque et. Sed magna dolor, rutrum at tellus sed, commodo porttitor metus. Suspendisse lacinia vel tellus non tempus. Mauris nisi sem, vulputate id sem vel, auctor tempor sapien</p>
            </div>
            <img src={props.img} width="450px" alt="props img conteudo 2" />
        </div>
    )
}