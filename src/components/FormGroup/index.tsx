// -> Import do ReactJS
import { ReactNode } from 'react';

// -> Import do CSS
import { FormGroupContainer } from './styles';

// -> Tipando as props do Component
interface FormGroupProps {
  children: ReactNode
}

export function FormGroup({ children }: FormGroupProps) {
  return (
    <FormGroupContainer>
      {children}
    </FormGroupContainer>
  );
}
