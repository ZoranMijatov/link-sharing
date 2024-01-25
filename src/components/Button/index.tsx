import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  body: string;
}

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'outlined';

export const Button: React.FC<ButtonProps> = ({
  variant,
  body,
  onClick,
  type,
  disabled,
}) => {
  return (
    <button
      className={`${Variants[variant]} ${mutualStyle}`}
      onClick={onClick}
      type={type ?? 'button'}
      disabled={disabled}
    >
      {body}
    </button>
  );
};

const mutualStyle =
  'font-semibold w-full text-base rounded-lg py-3 cursor-pointer disabled:opacity-25 disabled:pointer-events-none';

const Variants: Record<ButtonVariant, string> = {
  primary: 'bg-clr-primary text-white',
  secondary: 'bg-clr-secondary',
  tertiary: 'bg-clr-tertiary',
  outlined: 'bg-transparent border border-clr-primary text-clr-primary',
};
