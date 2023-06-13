// -> Import da lib externa de Navegação
import { Link } from 'react-router-dom';

// -> Import da lib externa de Icons
import { PencilLine, Trash } from '@phosphor-icons/react';

// -> Import do CSS
import { ContactContainer, Details, Actions } from './styles';

// -> Tipando as props do component
interface ContactProps {
  name: string;
}

export function Contact() {
  return (
    <ContactContainer>
      <Details>
        <div className='social'>
          <strong> Marcos Vinicius </strong>
          <small> Instagram </small>
        </div>
        <span> marcos@gmail.com </span>
        <span> 83998689147 </span>
      </Details>

      <Actions>
        <Link to="/edit/123">
          <PencilLine size={20} color='#5061FC' weight='bold'/>
        </Link>

        <button type='button' className='delete'>
          <Trash size={20} color='#FC5050' weight='bold'/>
        </button>
      </Actions>
    </ContactContainer>
  );
}
