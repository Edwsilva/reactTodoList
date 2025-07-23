import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const cardVariants = cva(
  `
    rounded-lg border border-solid border-gray-200
    bg-white shadow-sm
  `,
  {
    variants: {
      size: {
        none: "",
        md: "p-5",
        lg: "p-10",
      },
    },
    defaultVariants: {
      size: "none",
    },
  }
);

interface CardProps
  extends VariantProps<typeof cardVariants>,
    React.ComponentProps<"div"> {
  // O card pode receber qualquer elemento do html
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Card({
  as = "div",
  size,
  children,
  className,
  ...props
}: CardProps) {
  return React.createElement(
    as,
    {
      className: cardVariants({ size, className }),
      ...props,
    },
    children
  );
}
