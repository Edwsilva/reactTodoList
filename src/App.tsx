import Text from "./components/text";
// Preciso pegar esse .svg e colocar como conteúdo em um retorno de um componente REACT
// Pois o .svg é estático
// Instalar o vite-plugin-svgr
// npm i vite-plugin-svgr -D
// /// <reference types="vite-plugin-svgr/client" /> colocar no vite.env.d.ts
import TrashIcon from "./assets/icons/trash.svg?react";
import CheckIcon from "./assets/icons/check.svg?react";
import XIcon from "./assets/icons/x.svg?react";
import PencilIcon from "./assets/icons/pencil.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import Icon from "./components/icon";
import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";
import InputText from "./components/input-text";
import InputCheckbox from "./components/input-checkbox";
import Card from "./components/card";
import Container from "./components/container";

export default function App() {
  return (
    <Container className="bg-gray-200">
      <div className="grid gap-8">
        <div className="flex flex-col gap-2">
          <Text variant="body-sm-bold" className="text-pink-base">
            Olá mundo!
          </Text>
          <Text className="text-green-base">Olá mundo!</Text>
          <Text variant="body-md-bold">Olá mundo!</Text>
          <Text>Levar o dog pra passear</Text>
        </div>
        <div className="flex gap-1">
          {/* criar um componente para padronizar os ícones */}
          <Icon svg={TrashIcon} className="fill-green-base" />
          <Icon svg={CheckIcon} />
          <Icon svg={PlusIcon} />
          <Icon svg={SpinnerIcon} animate className="fill-pink-dark" />
          <Icon svg={PencilIcon} className="fill-gray-300" />
          <Icon svg={XIcon} className="fill-pink-dark" />
        </div>

        <div>
          <Badge variant="secondary">5</Badge>
          <Badge variant="primary" className="secondary">
            2 de 5
          </Badge>
        </div>
        <div>
          <Button icon={PlusIcon}>Nova tarefa</Button>
          <Button icon={PlusIcon} variant="secondary">
            Nova tarefa
          </Button>
          <Button icon={PlusIcon} variant="secondary" size="lg">
            Nova tarefa
          </Button>
        </div>
        <div className="flex gap-1">
          <ButtonIcon icon={TrashIcon} disabled />
          <ButtonIcon icon={TrashIcon} variant="secondary" />
          <ButtonIcon icon={TrashIcon} variant="tertiary" />
        </div>

        <div>
          <InputText />
        </div>
        <div>
          <InputCheckbox />
        </div>
        <div>
          <Card size="md">Olá mundo!</Card>
        </div>
        <div>
          <Card size="lg">Olá mundo!</Card>
        </div>
      </div>
    </Container>
  );
}
