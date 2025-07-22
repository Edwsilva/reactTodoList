import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

// Seguindo as variações do projeto figma
export const textVariants = cva("font-sans text-gray-400", {
  variants: {
    variant: {
      "body-sm-bold": "text-sm leading-5 font-semibold",
      "body-md": "text-base leading-6 font-normal",
      "body-md-bold": "text-base leading-6 font-semibold",
    },
  },
  defaultVariants: {
    variant: "body-md",
  },
});

//https://cva.style/docs - define variações de acordo com uma chave
// pnpm i class-variance-authority
// transformando em uma propriedade do react
interface TextProps extends VariantProps<typeof textVariants> {
  // keyof pega qualquer chave do objeto intrinsicElements HTML
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

// as não pode ser vazio, coloco span por padrão.
export default function ({
  as = "span",
  variant,
  className,
  children,
  ...props
}: TextProps) {
  // as não pode ser vazio
  return React.createElement(
    as,
    {
      className: textVariants({ variant, className }),
      ...props,
    },

    children
  );
}
