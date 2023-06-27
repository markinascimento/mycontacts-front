// -> Import do ReactJS
import ReactDOM from 'react-dom';

// -> Import dos Components
import { Spinner } from '../Spinner';

// -> Import do CSS
import { Overlay } from './styles';

// -> Tipando as props do component
interface LoaderProps {
  visible: boolean;
}

export function Loader({ visible }: LoaderProps) {

  if(!visible) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Spinner visible={visible} />
    </Overlay>,
    document.getElementById('screen-root') as Element | DocumentFragment
  );
}
