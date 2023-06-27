// -> Import do ReactJS
import { ReactNode } from 'react';

// -> Import dos Components
import { Spinner } from '../Spinner'

// -> Import do CSS
import { FormGroupContainer } from './styles';

// -> Tipando as props do Component
interface FormGroupProps {
  children: ReactNode,
  error?: string;
  isLoading?: boolean;
}

export function FormGroup({
    children,
    error,
    isLoading = false,
  }: FormGroupProps) {
  return (
    <FormGroupContainer>
      <div className="form-item">
        {children}

        {isLoading &&
          <div className="loader">
            <Spinner size={32} />
          </div>
        }
      </div>
      {error && <small> {error} </small>}
    </FormGroupContainer>
  );
}
