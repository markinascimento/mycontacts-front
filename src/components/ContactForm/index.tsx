// -> Import do ReactJS
import { FormEvent, useState } from 'react';

// -> Import dos Components
import Input from '../Input';
import Select from '../Select';
import { Button } from '../Button';
import { FormGroup } from '../FormGroup';

// -> Import do CSS
import { ContactFormContainer } from './styles';

// -> Tipandos as props do component
interface ContactFormProps {
  buttonLabel: string;
}

export function ContactForm({ buttonLabel }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [loaderButton, setLoaderButton] = useState<boolean>(false);

  async function handleSubimtCreate(event: FormEvent) {
    event.preventDefault();
    setLoaderButton(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoaderButton(false);
  }



  return (
    <ContactFormContainer onSubmit={handleSubimtCreate}>
      <FormGroup>
        <Input placeholder='Nome *' error/>
      </FormGroup>

      <FormGroup
        error='O formato do e-mail é inválido'
      >
        <Input placeholder='E-mail *' error />
      </FormGroup>

      <FormGroup>
        <Input placeholder='Telefone *' error />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="1">Instagram</option>
          <option value="1">Facebook</option>
          <option value="1">LinkedIn</option>
        </Select>
      </FormGroup>

      <Button type='submit' isLoading={loaderButton}>
        {buttonLabel}
      </Button>
    </ContactFormContainer>
  );
}
