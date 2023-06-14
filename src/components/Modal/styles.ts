import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(3px);
  inset: 0;
  overflow: hidden;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 450px;
  background: ${({ theme }) => theme.white};
  padding: 1rem;
  border-radius: 8px;
`;

interface BodyProps {
  isDanger: boolean;
}

export const Body = styled.div<BodyProps>`
  display: flex;
  flex-direction: column;
  width: 100%;

  > h1 {
    font-size: 1.5rem;
    color: ${({ isDanger, theme }) => isDanger ? theme.danger.main : theme.gray[800]};
  }

  > p {
    margin-top: 0.5rem;
    opacity: 0.8;
  }
`;

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  margin-top: 3rem;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;

  .cancel {
    background: transparent;
    color: ${({ theme }) => theme.gray[200]};
  }
`;
