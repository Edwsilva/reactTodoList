import { NavLink, Outlet } from "react-router";
import Text from "../components/text";
import Header from "../core-components/header";
import MainContent from "../core-components/main-content";
import Footer from "../core-components/footer";

export default function LayoutMain() {
  return (
    <>
      <Header />
      <MainContent>
        {/* CONTEÚDO PRINCIPAL */}
        {/* O <Outlet /> é um componente do React Router (v6+) que atua como um 
        de inserção para os componentes de rotas filhas. */}
        <Outlet />
      </MainContent>
      <Footer />
    </>
  );
}
