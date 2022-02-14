import styles from '../css/Contatos.module.css'

export default () => {
    return (
        <div className={styles.formsContainer}>
            <h1>Deseja nos Contatar?</h1>
            <div className={styles.formsContact}>
                <form>
                    <label value="Nome">Nome</label>
                    <input type="input" placeholder="Digite seu Nome" />
                    <label value="Nome">Email</label>
                    <input type="email" placeholder="email@mail.com" />
                    <textarea  placeholder="Message...."/>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}