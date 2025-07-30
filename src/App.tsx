import { BrowserRouter, Route, Routes } from "react-router";
import PageComponents from "./pages/page-components";
import LayoutMain from "./pages/layout-main";
import PageHome from "./pages/page-home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          {/* <Route path="/" element={<PageHome />} /> */}
          {/* Na página principal usa-se o termo "index" */}
          <Route index element={<PageHome />} />
          {/* Definindo o caminho para a página de componentes */}
          <Route path="/componentes" element={<PageComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
