// -> Import do ReactJS
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from 'react';

// -> Import dos Components
import Input from '../Input';
import Select from '../Select';
import { Button } from '../Button';
import { FormGroup } from '../FormGroup';

// -> Import do CSS
import { ContactFormContainer } from './styles';
import useErrors from '../../hooks/useErrors';
import { emailValid } from '../../utils/emailValid';
import { formatPhone } from '../../utils/formatPhone';

// -> Tipandos as props do component
interface ContactFormProps {
  buttonLabel: string;
}

interface InputChangeProps {
  event: ChangeEvent<HTMLInputElement>,
  setState: Dispatch<SetStateAction<string>>
}

export function ContactForm({ buttonLabel }: ContactFormProps) {
  const { errors, setError, removeError, getErrorMessageByFieldName } = useErrors();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [loaderButton, setLoaderButton] = useState<boolean>(false);

  // -> Manipulador do input de nome
  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    if(!event.target.value) {
      setError({ fieldName: 'name', message: 'Nome é obrigatório' });
    } else {
      removeError('name');
    }
    setName(event.target.value);
  }

  // -> Manipulador do input de email
  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    if(!event.target.value || !emailValid(event.target.value)) {
      setError({ fieldName: 'email', message: 'E-mail inválido' });
    } else {
      removeError('email');
    }
    setEmail(event.target.value);
  }

  // -> Manipulador do input de telefone
  function handlePhoneChange(event: ChangeEvent<HTMLInputElement>) {
    setPhone(formatPhone(event.target.value));
  }

  // -> Função para da o submit no formulário
  async function handleSubimtCreate(event: FormEvent) {
    event.preventDefault();
    setLoaderButton(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoaderButton(false);
  }

  const buttonDisabled = !name || errors.length > 0;

  return (
    <ContactFormContainer onSubmit={handleSubimtCreate}>
      <FormGroup error={getErrorMessageByFieldName('name')} >
        <Input
          value={name}
          placeholder='Nome *'
          onChange={handleNameChange}
          error={!!getErrorMessageByFieldName('name')}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          type='email'
          value={email}
          placeholder='E-mail *'
          onChange={handleEmailChange}
          error={!!getErrorMessageByFieldName('email')}
        />
      </FormGroup>

      <FormGroup>
        <Input
          type='tel'
          value={phone}
          error={false}
          maxLength={15}
          placeholder='Telefone *'
          onChange={handlePhoneChange}
        />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="1">Instagram</option>
          <option value="1">Facebook</option>
          <option value="1">LinkedIn</option>
        </Select>
      </FormGroup>

      <Button type='submit' isLoading={loaderButton} disabled={buttonDisabled}>
        {buttonLabel}
      </Button>
    </ContactFormContainer>
  );
}
