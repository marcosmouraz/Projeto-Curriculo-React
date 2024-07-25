import Menu from "../../menu/Menu";
import Conhecimentos from "../conhecimentos/Conhecimentos";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Servicos from "../servicos/Servicos";
import Sobre from "../sobre/Sobre";



export default function Home(){
  return (
    <>
      <Menu/>
      <Header/>
      <Sobre/>
      <Conhecimentos/>
      <Servicos/>
      <Footer/>
    </>
  );
}