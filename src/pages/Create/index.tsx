// -> Import dos Components
import { ContactForm } from '../../components/ContactForm';
import { PageHeader } from '../../components/PageHeader';

// -> Import do CSS
import { CreateContainer } from './styles';

export function Create() {
  return (
    <CreateContainer>
      <PageHeader title='Novo contato' />

      <ContactForm />
    </CreateContainer>
  );
}
