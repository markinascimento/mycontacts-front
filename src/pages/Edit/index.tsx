// -> Import dos Components
import { PageHeader } from '../../components/PageHeader';
import { ContactForm } from '../../components/ContactForm';

// -> Import do CSS
import { EditContainer } from './styles';

export function Edit() {
  return (
    <EditContainer>
      <PageHeader title='Editar contato' />

      <ContactForm buttonLabel='Salvar alterações' />
    </EditContainer>
  );
}
