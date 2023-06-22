// -> Import da lib externa de Navegação
import { Link } from 'react-router-dom';

// -> Import da lib externa de Icons
import { PencilLine, Trash } from '@phosphor-icons/react';

// -> Import de funções úteis
import { formatPhone } from '../../utils/formatPhone';

// -> Import das tipagens
import { ContactDTO } from '../../types/ContactDTO';

// -> Import do CSS
import { ContactContainer, Details, Actions } from './styles';

// -> Tipando as props do component
interface ContactProps {
  contact: ContactDTO;
}

export function Contact({ contact }: ContactProps) {
  return (
    <ContactContainer>
      <Details>
        <div className='social'>
          <strong> {contact.name} </strong>
          <small> {contact.category_name} </small>
        </div>
        <span> {contact.email} </span>
        <span> {formatPhone(contact.phone)} </span>
      </Details>

      <Actions>
        <Link to={`/edit/${contact.id}`}>
          <PencilLine size={20} color='#5061FC' weight='bold'/>
        </Link>

        <button type='button' className='delete'>
          <Trash size={20} color='#FC5050' weight='bold'/>
        </button>
      </Actions>
    </ContactContainer>
  );
}
