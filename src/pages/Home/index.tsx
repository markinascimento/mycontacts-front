// -> Import do ReactJS
import { useState } from 'react';

// -> Import da lib externa de Icons
import { ArrowUp, PencilLine, Trash } from '@phosphor-icons/react';

// -> Import do CSS
import {
  InputFilter,
  Header,
  OrderName,
  BodyContent,
  ListContacts
} from './styles';
import { Contact } from '../../components/Contact';

export function Home() {
  const [filter, setFilter] = useState<string>('');

  const [array, setArray] = useState([1, 2, 3, 4,5,6,7,8,76,745,45]);

  return (
    <>
      <InputFilter
        placeholder='Pesquisar contato...'
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />

      <Header>
        <strong> 3 Contactos </strong>
        <a href="/" className='new-contact'>
          Novo contato
        </a>
      </Header>

      <BodyContent>
        <OrderName>
          <button type='button' onClick={() => console.log('\'') }>
            <strong> Nome </strong>
            <ArrowUp size={16} color='#5061FC' weight='bold' />
          </button>
        </OrderName>

        <ListContacts>
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
        </ListContacts>
      </BodyContent>
    </>
  );
}
