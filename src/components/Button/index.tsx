// -> Import do ReactJS
import { ButtonHTMLAttributes } from 'react';

// -> Import da lib externa de Loader
import { InfinitySpin } from 'react-loader-spinner';

// -> Import do CSS
import { ButtonContainer } from './styles';

// -> Tipando as props do Component
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  disabled?: boolean
  isLoading?: boolean
  isDanger?: boolean
}

export function Button({
  children,
  disabled = false,
  isDanger = false,
  isLoading = false,
}: ButtonProps) {
  return (
    <ButtonContainer isDanger={isDanger} disabled={disabled}>
      {isLoading
        ? <InfinitySpin color='#FFFFFF' width='128' />
        : <span> {children} </span>
      }
    </ButtonContainer>
  );
}
