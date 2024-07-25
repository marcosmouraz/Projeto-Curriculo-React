import Imagem from '../../assets/Imagens/m028t0257_c_text_bubble_22feb23.png'
import './header.css'

export default function Header() {
  return(
    <header className="header">

        <div className="flex">
            <div className="texto">
                <h1>Tornando sua empresa digital com <span> ideias inovadoras.</span> </h1>
                <p>Uma mistura de Design, Desenvolvimento Frontend e habilidade profissional que vão destacar seu produto no mercado.</p>
                <div className="button">
                    <button>Instagram</button>
                </div>
            </div>
            <div className="img">
                <img src={Imagem} alt=""/>
            </div>
        </div>
    </header>
  )
}