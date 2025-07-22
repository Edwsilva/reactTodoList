import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const iconVariants = cva("", {
  variants: {
    animate: {
      true: "animate-spin",
      false: "",
    },
  },
  defaultVariants: {
    animate: false,
  },
});

interface IconProps
  extends React.ComponentProps<"svg">,
    VariantProps<typeof iconVariants> {
  // svg será um componente funcional que retornará um svg
  svg: React.FC<React.ComponentProps<"svg">>;
}

// Recebendo um svg e renomeando para SvgComponent e outros atributos
export default function Icon({
  svg: SvgComponent,
  animate,
  className,
  ...props
}: IconProps) {
  // Depois, ele renderiza o componente SVG passado como prop e repassa todos os atributos SVG para ele.
  return (
    <SvgComponent className={iconVariants({ animate, className })} {...props} />
  );
}
