import styled from 'styled-components';

export const InputFilter = styled.input`
  display: flex;
  width: 100%;
  min-height: 50px;
  border-radius: 24px;
  padding: 0 1rem;
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.04);
  background: ${({ theme }) => theme.white};

  &::placeholder {
    color: ${({ theme }) => theme.gray[200]};
  }
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(188, 188, 188, 0.4);

  strong {
    font-size: 1.125rem;
  }

  .new-contact {
    font-weight: 700;
    font-size: 0.875rem;
    letter-spacing: 0.2px;
    color: ${({ theme }) => theme.primary.main};
    border: 2px solid ${({ theme }) => theme.primary.main};
    padding: 0.75rem 0.875rem;
    border-radius: 4px;
    transition: all .2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.primary.main};
      color: ${({ theme }) => theme.white};
    }
  }
`;

export const BodyContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 1rem;
  overflow: auto;
`;

export const OrderName = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin: 2rem 0;

  > button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: transparent;

    strong {
      color: ${({ theme }) => theme.primary.main};
    }
  }
`;

export const ListContacts = styled.div`
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.primary.main};
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.gray[200]};
    border-radius: 8px;
  }
`;
