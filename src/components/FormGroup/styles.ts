import styled from 'styled-components';

export const FormGroupContainer = styled.div`
  display: flex;
  flex-direction: column;

  small {
    display: block;
    margin-top: 0.5rem;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.danger.main};
  }
`;
