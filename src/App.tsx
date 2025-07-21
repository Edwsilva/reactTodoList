import Text from "./components/text";
// Preciso pegar esse .svg e colocar como conteúdo em um retorno de um componente REACT
// Pois o .svg é estático
// Instalar o vite-plugin-svgr
// npm i vite-plugin-svgr -D
import trashIcon from "./assets/icons/trash.svg";

export default function App() {
  return (
    <div className="grid gap-3">
      <div className="flex flex-col gap-2">
        <Text variant="body-sm-bold" className="text-pink-base">
          Olá mundo!
        </Text>
        <Text className="text-green-base">Olá mundo!</Text>
        <Text variant="body-md-bold">Olá mundo!</Text>
        <Text>Levar o dog pra passear</Text>
      </div>
      <div className="flex gap-1">
        <img src={trashIcon} />
      </div>
    </div>
  );
}
