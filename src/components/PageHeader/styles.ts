import styled from 'styled-components';

export const PageHeaderCntainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1.5rem;
  gap: 0.5rem;

  .back {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      font-weight: 600;
      color: ${({ theme }) => theme.primary.main};
    }
  }

  h1 {
    font-size: 1.5rem;
  }
`;
