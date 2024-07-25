import './conhecimentos.css'
import Html1 from '../../assets/Imagens/filetype-html.svg'
import Js1 from "../../assets/Imagens/filetype-js.svg";
import Bot from "../../assets/Imagens/bootstrap.svg"
import Html2 from "../../assets/Imagens/filetype-html.svg";
import Css1 from "../../assets/Imagens/filetype-css.svg";
import Css2 from "../../assets/Imagens/filetype-css.svg";
import Bot2 from "../../assets/Imagens/bootstrap.svg";
import Bot3 from "../../assets/Imagens/bootstrap.svg";


export default function Conhecimentos() {
  return(
    <section className="conhecimentos">
            <div className="flex">
                <div className="text">
                    <h1>Conhecimentos</h1>
                    <p>Saiba mais sobre as tecnologias do meu dominio.</p>
                </div>

                <div className="icones">
                    <div className="tecnologias">
                        <img src={Html1} alt="html1"/>
                    </div>
                    <div className="tecnologias">
                        <img src={Js1} alt="js1"/>
                    </div>
                    <div className="tecnologias">
                        <img src={Bot} alt="bot"/>
                    </div>
                    <div className="tecnologias">
                        <img src={Html2} alt="html2"/>
                    </div>
                    <div className="tecnologias">
                        <img src={Css1} alt="css1"/>
                    </div>
                    <div className="tecnologias">
                        <img src={Css2} alt="css2"/>
                    </div>
                    <div className="tecnologias">
                        <img src={Bot2} alt="bot2"/>
                    </div>
                     <div className="tecnologias">
                        <img src={Bot3} alt="bot3"/>
                    </div>

                </div>

            </div>

        </section>
  )
}