import styled from 'styled-components';

interface ButtonContainerProps {
  isDanger: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  height: 52px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: ${({ isDanger, theme }) => isDanger ? theme.danger.main : theme.primary.main};
  transition: all .2s ease-in-out;
  padding: 0 2rem;

  span {
    font-weight: 600;
    color: ${({ theme }) => theme.white};
  }

  &:not(:disabled):hover {
    background: ${({ isDanger, theme }) => isDanger ? theme.danger.light : theme.primary.light};
  }

  &:active {
    background: ${({ isDanger, theme }) => isDanger ? theme.danger.main : theme.primary.main};
  }

  &:disabled {
    background: ${({ theme }) => theme.gray[200]};
    cursor: not-allowed;
  }
`;
