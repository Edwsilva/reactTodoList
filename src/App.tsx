import Text from "./components/text";

export default function App() {
  return (
    <div className="flex flex-col gap-2">
      <Text
        as="button"
        onClick={() => alert("Cliquei!")}
        // Extra (debug visual)
        // Se quiser depurar visualmente qualquer elemento, use a classe do Tailwind outline ou border:
        // className="border border-red-500"
      >
        Clique aqui
      </Text>
      <Text as="button" variant="button" onClick={() => alert("Cliquei!")}>
        Clique aqui
      </Text>
      <Text variant="body-sm-bold" className="text-pink-base">
        Olá mundo!
      </Text>
      <Text className="text-green-base">Olá mundo!</Text>
      <Text variant="body-md-bold">Olá mundo!</Text>
      <Text>Levar o dog pra passear</Text>
    </div>
  );
}
