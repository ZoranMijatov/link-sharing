import React, { ComponentPropsWithoutRef } from 'react';

type InputProps = ComponentPropsWithoutRef<'input'>;

export const Input: React.FC<InputProps> = ({
  type,
  value,
  onChange,
  placeholder,
  disabled,
}) => {
  return (
    <input
      type={type ?? 'text'}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};
