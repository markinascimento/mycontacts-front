import styled, { css } from 'styled-components';

interface InputProps {
  error: boolean;
}

export default styled.input<InputProps>`
  width: 100%;
  height: 52px;
  border: 2px solid ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.white};
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  padding: 0 1rem;
  transition: border-color .2s ease-in-out;

  &:focus {
    border-color: ${({ theme }) => theme.primary.main};
  }

  ${({ error }) => error && css`
    color: ${({ theme }) => theme.danger.main};
    border-color: ${({ theme }) => theme.danger.main} !important;
  `}
`;
