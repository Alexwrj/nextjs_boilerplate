import { Button } from './styled';
import { Arrow } from '@components/svg';
import React from 'react';

export const ButtonComponent: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => (
  <Button {...props}>
    <Arrow /> Back
  </Button>
);
