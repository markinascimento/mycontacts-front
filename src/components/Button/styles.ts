import styled from 'styled-components';

export const ButtonContainer = styled.button`
  display: flex;
  width: 100%;
  height: 52px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: ${({ theme }) => theme.primary.main};
  transition: all .2s ease-in-out;

  span {
    font-weight: 600;
    color: ${({ theme }) => theme.white};
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.primary.dark};
  }

  &:disabled {
    background: ${({ theme }) => theme.gray[200]};
    cursor: not-allowed;
  }
`;
