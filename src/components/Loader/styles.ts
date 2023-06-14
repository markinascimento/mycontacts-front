import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  position: absolute;
  background: rgba(246, 245, 252, 0.7);
  backdrop-filter: blur(3px);
  inset: 0;
  overflow: hidden;
`;
