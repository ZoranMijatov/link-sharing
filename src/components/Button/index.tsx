import React from 'react';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant: ButtonVariant;
  body: string;
}

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

export const Button: React.FC<ButtonProps> = ({
  variant,
  body,
  onClick,
  type,
  disabled,
}) => {
  return (
    <button
      className={Variants[variant]}
      onClick={onClick}
      type={type ?? 'button'}
      disabled={disabled}
    >
      {body}
    </button>
  );
};

const Variants: Record<ButtonVariant, string> = {
  primary: 'bg-clr-primary',
  secondary: 'bg-clr-secondary',
  tertiary: 'bg-clr-tertiary',
};
