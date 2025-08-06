import { BrowserRouter, Route, Routes } from "react-router";
import PageComponents from "./pages/page-components";
<<<<<<< HEAD
=======
import LayoutMain from "./pages/layout-main";
import PageHome from "./pages/page-home";
>>>>>>> ed6543501968d2fdaa4e1845515d3d01c1e027e1

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="componentes" element={<PageComponents />} />
=======
        <Route element={<LayoutMain />}>
          {/* <Route path="/" element={<PageHome />} /> */}
          {/* Na página principal usa-se o termo "index" */}
          <Route index element={<PageHome />} />
          {/* Definindo o caminho para a página de componentes */}
          <Route path="/componentes" element={<PageComponents />} />
        </Route>
>>>>>>> ed6543501968d2fdaa4e1845515d3d01c1e027e1
      </Routes>
    </BrowserRouter>
  );
}
