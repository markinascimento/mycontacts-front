// -> Import do ReactJS
import { useState, useCallback, useEffect, useMemo, FormEvent } from 'react';

// -> Import da lib extrena de Navegação
import { Link } from 'react-router-dom';

// -> Import da lib externa de Icons
import { ArrowUp, SpeakerNone } from '@phosphor-icons/react';

// -> Import da API
import ContactsServices from '../../services/ContactsServices';

// -> Import de funções uteis
import { delay } from '../../utils/delay';

// -> Import das tipagens
import { ContactDTO } from '../../types/ContactDTO';

// -> Import dos Component
import { Button } from '../../components/Button';
import { Loader } from '../../components/Loader';
import { Contact } from '../../components/Contact';

// -> Import do CSS
import {
  InputFilter,
  Header,
  OrderName,
  BodyContent,
  ListContacts,
  NotFoundContainer,
  ErrorContainer,
  EmptyContacts
} from './styles';

// -> Import dos Images / Icons
import magnifierQuestionIcons from '../../assets/magnifier-question.svg';
import sadImage from '../../assets/sad.svg';
import emptyBoxImage from '../../assets/empty-box.svg';

export function Home() {
  const [loader, setLoader] = useState<boolean>(true);
  const [orderBy, setOrderBy] = useState<string>('asc');
  const [hasError, setHasError] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [contacts, setContacts] = useState<ContactDTO[]>([]);

  const loadContacts = useCallback(async () => {
    try{
      setLoader(true);
      const contactsResponse = await ContactsServices.listContacts(orderBy);
      setHasError(false);
      setContacts(contactsResponse);
    }
    catch {
      setHasError(true);
    }
    finally {
      await delay(300);
      setLoader(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  function handleToggleOrderBy() {
    setOrderBy(prevState => (
      prevState === 'asc' ? 'desc' : 'asc'
    ));
  }

  // -> Filtrando os contatos pelo nome / email
  const filteredContacts = useMemo(() => (
    contacts.filter((contact) => (
      contact.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      contact.email.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    ))
  ), [searchTerm, contacts]);

  return (
    <>
      {contacts.length > 0 && (
        <InputFilter
          value={searchTerm}
          placeholder='Pesquisar contato...'
          onChange={event => setSearchTerm(event.target.value)}
        />
      )}

      {loader
        ? (
          <Loader visible={loader} />
        )
        : (
          <>
            <Header hasError={hasError}>
              {(!hasError && contacts.length > 0) && (
                <strong>
                  {filteredContacts.length}
                  {filteredContacts.length > 1 ? ' Contatos' : ' Contato'}
                </strong>
              )}
              <Link to="/create" className='new-contact'>
                Novo contato
              </Link>
            </Header>
            <BodyContent>
              {hasError && (
                <ErrorContainer>
                  <img src={sadImage} alt="" />
                  <div className='details'>
                    <span> Ocorreu um erro ao obter os seus contatos! </span>
                    <Button type='button' onClick={loadContacts}>
                    Tentar novamente
                    </Button>
                  </div>
                </ErrorContainer>
              )}

              {!hasError && (
                <>
                  {filteredContacts.length > 0 && (
                    <OrderName orderBy={orderBy}>
                      <button type='button' onClick={handleToggleOrderBy}>
                        <strong> Nome </strong>
                        <ArrowUp size={16} color='#5061FC' weight='bold' />
                      </button>
                    </OrderName>
                  )}

                  {(filteredContacts.length <= 0 && contacts.length > 0) && (
                    <NotFoundContainer>
                      <img src={magnifierQuestionIcons} alt="" />
                      <span>
                        Nenhum resultado foi encontrado para
                        <strong> {`"${searchTerm}"`}. </strong>
                      </span>
                    </NotFoundContainer>
                  )}

                  {filteredContacts.length <= 0 && contacts.length <= 0 &&
                    <EmptyContacts>
                      <img src={emptyBoxImage} />
                      <span>
                        Você ainda não tem nenhum contato cadastrado!
                        Clique no botão <strong> ”Novo contato” </strong> à cima para cadastrar o seu primeiro!
                      </span>
                    </EmptyContacts>
                  }

                  <ListContacts>
                    {filteredContacts.map((contact) => (
                      <Contact key={contact.id} contact={contact} />
                    ))}
                  </ListContacts>
                </>
              )}
            </BodyContent>
          </>
        )
      }
    </>
  );
}

{/*  */}
