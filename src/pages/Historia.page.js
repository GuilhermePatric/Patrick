import Perfil from '../img/gui.jpeg'
import styles from '../css/Historia.module.css'
export default () => {
    return (
        <div className={styles.containerPerfil}>
            <h1>Criador: </h1>
            <img src={Perfil} width="500px" alt="" />
            <p>Desenvolvendo o Futuro</p>
            <div className={styles.textApresentation}>

                <p>Bem-vindo à Patric &A, sua fonte número um para todas os momentos [produto]. Estamos dedicados a oferecer a você o melhor , com foco em versatilidade, segurança e tecnologia.</p>


                <p>Fundada em 2022 por Guilherme Patric, a Patric &A percorreu um longo caminho desde o seu início no Brasil. Quando Guilherme começou, a desenvolver uma  paixão por programação e desenvolvimento web, o que  levou a construir e se desenvolver nos atuais cenarios expostos. A Patric &A pode lhe oferecer serviços de alta qualidade . Agora atendemos clientes em todo lugar e estamos entusiasmados por poder transformar nossa paixão em nosso próprio site.</p>


                <p>Nós esperamos que você goste dos nossos produtos tanto quanto nós gostamos de oferecê-los a você. Se você tiver alguma dúvida ou comentário, não hesite em entrar em contato com nossos agentes.</p>


                <h2>Sinceramente,<br></br>

                Guilherme Patric</h2>
            </div>
        </div>
    )
}