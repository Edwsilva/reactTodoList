import { BrowserRouter, Route, Routes } from "react-router";
import PageComponents from "./pages/page-components";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PageComponents />} />
        <Route path="componentes" element={<PageComponents />} />
      </Routes>
    </BrowserRouter>
  );
}
