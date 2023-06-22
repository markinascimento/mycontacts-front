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

interface HeaderProps{
  hasError: boolean;
}

export const Header = styled.div<HeaderProps>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: ${({ hasError }) => hasError ? 'flex-end' : 'center'};
  margin-top: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(188, 188, 188, 0.4);
  gap: 1rem;

  strong {
    width: 100%;
    font-size: 1.125rem;
  }

  .new-contact {
    display: flex;
    min-width: 10rem;
    min-height: 3rem;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    letter-spacing: 0.2px;
    color: ${({ theme }) => theme.primary.main};
    border: 2px solid ${({ theme }) => theme.primary.main};
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

interface OrderNameProps {
  orderBy: string;
}

export const OrderName = styled.div<OrderNameProps>`
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

    svg {
      transition: transform .3s ease-in-out;
      transform: ${({ orderBy }) => orderBy === 'asc' ? 'rotate(0)' : 'rotate(180deg)'}
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

export const NotFoundContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;

  > span {
    color: ${({ theme }) => theme.gray[200]};
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 2rem;

  .details {
    > span {
      display: block;
      font-size: 1.25rem;
      font-weight: bold;
      color: ${({ theme }) => theme.danger.main};
    }

    > button {
      margin-top: 0.5rem;
      padding: 0.5rem !important;
    }
  }
`;

export const EmptyContacts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;

  > span {
    font-size: 1.125rem;
    font-weight: 500;
    color: ${({ theme }) => theme.gray[200]};

    strong {
      color: ${({ theme }) => theme.primary.main};
    }
  }
`;
