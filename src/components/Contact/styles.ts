import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  width: 98%;
  min-height: 100px;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.white};
  backdrop-filter: 0 0.5rem 1rem rgba(0, 0, 0, 0.4);

  & + & {
    margin-top: 2rem;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  .social {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    small {
      color: ${({ theme }) => theme.gray[800]};
      padding: 2px 8px;
      border-radius: 2px;
      background: ${({ theme }) => theme.primary.main};
      text-transform: uppercase;
    }
  }

  span {
    color: ${({ theme }) => theme.gray[200]};
    font-size: 0.875rem;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  .delete {
    background: transparent;
  }
`;
