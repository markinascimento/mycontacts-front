// -> Import do ReactJS
import { ReactNode } from 'react';

// -> Import do CSS
import { FormGroupContainer } from './styles';

// -> Tipando as props do Component
interface FormGroupProps {
  children: ReactNode,
  error?: string;
}

export function FormGroup({ children, error }: FormGroupProps) {
  return (
    <FormGroupContainer>
      {children}
      {error && <small> {error} </small>}
    </FormGroupContainer>
  );
}
