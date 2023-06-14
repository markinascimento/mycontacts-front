// -> Import do ReactJS
import { useState, useCallback } from 'react';

// -> Import da lib extrena de Navegação
import { Link } from 'react-router-dom';

// -> Import da lib externa de Icons
import { ArrowUp } from '@phosphor-icons/react';

// -> Import dos Component
import { Contact } from '../../components/Contact';

// -> Import do CSS
import {
  InputFilter,
  Header,
  OrderName,
  BodyContent,
  ListContacts
} from './styles';

export function Home() {
  const [filter, setFilter] = useState<string>('');
  const [orderBy, setOrderBy] = useState<string>('ASC');
  const [contacts, setContacts] = useState<any[]>([]);

  const fetchDataContacts = useCallback(async () => {
    const orderBY = orderBy === 'ASC' ? 'DESC' : 'ASC';
    setOrderBy(orderBY);
  }, [orderBy]);

  return (
    <>
      <InputFilter
        placeholder='Pesquisar contato...'
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />

      <Header>
        <strong>
          {contacts.length}
          {contacts.length > 1 ? ' Contatos' : ' Contato'}
        </strong>
        <Link to="/create" className='new-contact'>
          Novo contato
        </Link>
      </Header>

      <BodyContent>
        <OrderName orderBy={orderBy}>
          <button type='button' onClick={fetchDataContacts}>
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
