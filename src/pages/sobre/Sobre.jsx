import './sobre.css'
import Homem from '../../assets/Imagens/OC3JB21.png'
import Instagram from '../../assets/Imagens/instagram.svg'
import Facebook from '../../assets/Imagens/facebook.svg'
import Whatsapp from '../../assets/Imagens/whatsapp.svg'
import Linkedin from '../../assets/Imagens/linkedin.svg'

export default function Sobre() {
  return(
    <section className="sobre">
            <div className="flex">
                <div className="imagem">
                    <img src={Homem} alt="homem"/>
                </div>
                <div className="direito">
                    <div className="text">
                        <h2>Sobre mim</h2>
                        <h1>Marcos Moura</h1>
                        <h2>Desenvolvedor Front-End</h2>
                        <p>Meu nome é Marcos Moura e sou estudante de Análise e desenvolvimento de sistemas na FAM, e também estou participando do curso de front end na Rede Cidadã, através do projeto Start 2024.2. Estou me dedicando a aprender e aprimorar minhas habilidades em desenvolvimento web, com foco na criação de interfaces atraentes e funcionais para melhorar a experiência do usuário.</p>
                     </div>
                
                    <div className="icones">
                        <a href="">
                            <img src={Instagram} alt="instagram"/>
                        </a>
                        <a href=""><img src={Facebook} alt="facebook"/>
                        </a>
                        <a href="">
                            <img src={Whatsapp} alt="whatsapp"/>
                        </a>
                        <a href="">
                            <img src= {Linkedin} alt="linkedin"/>
                        </a>
                        </div>
                    </div>
            </div>        
        </section>
  )
}