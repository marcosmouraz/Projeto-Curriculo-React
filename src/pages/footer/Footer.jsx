import "./footerStyles.css"
import Logo from "../../assets/Imagens/Logo.png"

export default function Footer(){
  return(
    <footer className="footer">
        <div className="flex">
            <div className="img">
                <img src={Logo} alt="logoFooter"/>
            </div>
            <div className="text">
                <h1>Copyright &copy; <span>marcosmoura.com.br</span> Todos os direitos reservados.</h1>
            </div>
        </div>
    </footer>
  )
}