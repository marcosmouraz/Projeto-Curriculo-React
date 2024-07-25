import './servicosStyles.css'
import Uidesign from "../../assets/Imagens/bezier2.svg";
import Ded from "../../assets/Imagens/code-slash.svg";
import Motion from "../../assets/Imagens/phone-flip.svg";

export default function Servicos() {
  return(
    <section className="servicos">
            <div className="flex-container">
                <div className="nome">
                    <h1>Serviços</h1>
                    <h2>Como posso te ajudar?</h2>
                </div>
                <div className="box">
                    <div className="box-item">

                        <div className="img">
                            <img src={Uidesign} alt="ui-design"/>
                        </div>

                        <div className="texto">
                        <h1>UI DESIGN</h1>
                        <p>Projeto e desenho sua interface de forma objetiva.</p>
                        </div>
                        
                        <div className="button">
                            <button>Orçamento</button>
                        </div>
                        
                    </div>
                    <div className="box-item">
                        <div className="img">
                            <img src={Ded} alt="code-slash"/>
                        </div>
                        <div className="texto">
                        <h1>DED</h1>
                        <p>Desenvolvo sites profissionais, blogs e portifólios.</p>
                         </div>
                        
                         <div className="button"><button>Orçamento</button>  </div>
                        
                    </div>
                    <div className="box-item">
                        <div className="img">
                            <img src={Motion} alt="phone"/>
                        </div>
                        <div className="text">
                            <h1>MOTION</h1>
                            <p>Crio  interações que transmitem sensação de mordenidade.</p>
                        </div>
                        
                        <div className="buttom">
                             <button>Orçamento</button>      
                        </div>
                        
                       
                    </div>
                </div>
            </div>
        </section>
  )
}