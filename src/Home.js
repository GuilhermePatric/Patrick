/* Componentes --- > */

import Conteudotype1 from './Components/Conteudo.type1';
import Conteudotype2 from '../src/Components/Conteudo.type2'
import Conteudotype3 from '../src/Components/Conteudo.type3'

/* main conteudo ---> */
import Main from './Components/MainPrincipal';

/* conteudo 1 --- > */
import reactImg from '../src/img/react.png'
import dominioImg from '../src/img/dominioSeguro.png'
import error404 from '../src/img/error404.png'
import velocidade from '../src/img/velocidade.png'

/* conteudo 2 --- > */
import foguete from '../src/img/foguete.png'

/* conteudo 3 --- > */
import card1 from './img/cards/card-atendimento.png'
import card2 from './img/cards/card-servidor.png'
import card3 from './img/cards/card-ssl.png'


function Home() {
  return (
    <div >
      <Main />
      <Conteudotype1 img1={reactImg} img2={dominioImg} img3={error404} img4={velocidade} title="o novo Mundo da Tecnologia" />

      <Conteudotype2 img={foguete} />
      <Conteudotype3 title="Ofertamos sempre o melhor "
        icon1={card1} icon2={card2} icon3={card3} frase1="Atendimento de Qualidade" frase2="Banco de Dados solido" frase3="Segurança" />
    </div>
  );
}

export default Home;
