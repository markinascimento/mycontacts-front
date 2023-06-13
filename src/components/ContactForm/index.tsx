// -> Import do ReactJS
import { FormEvent } from 'react';

// -> Import dos Components
import Input from '../Input';
import Select from '../Select';
import { Button } from '../Button';
import { FormGroup } from '../FormGroup';

// -> Import do CSS
import { ContactFormContainer } from './styles';

export function ContactForm() {

  function handleSubimtCreate(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <ContactFormContainer onSubmit={handleSubimtCreate}>
      <FormGroup>
        <Input placeholder='Nome *' />
      </FormGroup>

      <FormGroup>
        <Input placeholder='E-mail *' />
      </FormGroup>

      <FormGroup>
        <Input placeholder='Telefone *' />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="1">Instagram</option>
          <option value="1">Facebook</option>
          <option value="1">LinkedIn</option>
        </Select>
      </FormGroup>

      <Button type='submit'>
        Cadastrar
      </Button>
    </ContactFormContainer>
  );
}
