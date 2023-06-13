// -> Import do ReactJS
import { ButtonHTMLAttributes } from 'react';

// -> Import da lib externa de Loader
import { InfinitySpin } from 'react-loader-spinner';

// -> Import do CSS
import { ButtonContainer } from './styles';

// -> Tipando as props do Component
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  isLoading?: boolean
  disabled?: boolean
}

export function Button({
  children,
  isLoading = false,
  disabled = false
}: ButtonProps) {
  return (
    <ButtonContainer disabled={disabled}>
      {isLoading
        ? <InfinitySpin color='#FFFFFF' width='128' />
        : <span> {children} </span>
      }
    </ButtonContainer>
  );
}
