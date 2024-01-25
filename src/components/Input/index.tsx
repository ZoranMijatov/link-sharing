import React from 'react';

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {}

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
