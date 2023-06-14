// -> Import do ReactJS
import ReactDOM from 'react-dom';

// -> Import dos Components
import { Button } from '../Button';

// -> Import do CSS
import { Overlay, Container, Body, Footer } from './styles';

// -> Tipando as props do Component
interface ModalProps {
  visible: boolean;
  isDanger?: boolean;
}

export function Modal({ visible, isDanger = false }: ModalProps) {

  if(!visible) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Container>
        <Body isDanger={isDanger}>
          <h1> Tem certeza que deseja remover o contato ”Mateus Silva”? </h1>
          <p> Esta ação não poderá ser desfeita! </p>
        </Body>
        <Footer>
          <button type='button' className='cancel'>
            Cancelar
          </button>

          <Button isDanger={isDanger}>
            Deletar
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('screen-root') as Element | DocumentFragment
  );
}
