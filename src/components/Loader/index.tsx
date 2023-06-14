// -> Import do ReactJS
import ReactDOM from 'react-dom';

// -> Import da lib externa de Loader
import { CirclesWithBar } from 'react-loader-spinner';

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
      <CirclesWithBar
        height="200"
        width="200"
        color="#5061FC"
        visible={true}
        ariaLabel='circles-with-bar-loading'
      />
    </Overlay>,
    document.getElementById('screen-root') as Element | DocumentFragment
  );
}
