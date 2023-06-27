// -> Import do ReactJS
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

// -> Import dos Custom Hooks
import useErrors from '../../hooks/useErrors';

// -> Import da API
import CategoriesServices from '../../services/CategoriesServices';

// -> Import de funções úteis
import { emailValid } from '../../utils/emailValid';
import { formatPhone } from '../../utils/formatPhone';

// -> Import das tipagens
import { CategoryDTO } from '../../types/CategoryDTO';

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
  const { errors, setError, removeError, getErrorMessageByFieldName } = useErrors();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryID, setCategoryID] = useState('');

  const [categories, setCategories] = useState<CategoryDTO[]>([]);
  const [loadingButton, setLoadingButton] = useState<boolean>(false);
  const [loadingCategories, setloadingCategories] = useState<boolean>(true);

  useEffect(() => {
    async function loadCategories() {
      try {
        const categoriesList = await CategoriesServices.listCategories();
        setCategories(categoriesList);
      } catch {} finally {
        setloadingCategories(false);
      }
    }
    loadCategories();
  }, []);

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
    if(event.target.value.length < 15) {
      setError({ fieldName: 'phone', message: 'Número de telefone inválido' });
    } else {
      removeError('phone');
    }
    setPhone(formatPhone(event.target.value));
  }

  // -> Função para da o submit no formulário
  async function handleSubimtCreate(event: FormEvent) {
    event.preventDefault();
    setLoadingButton(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoadingButton(false);
  }

  // Desabiliar o botão
  const isFormValid = (!name || errors.length > 0);

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
          placeholder='E-mail'
          onChange={handleEmailChange}
          error={!!getErrorMessageByFieldName('email')}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('phone')}>
        <Input
          type='tel'
          value={phone}
          placeholder='Telefone'
          maxLength={15}
          onChange={handlePhoneChange}
          error={!!getErrorMessageByFieldName('phone')}
        />
      </FormGroup>

      <FormGroup isLoading={loadingCategories}>
        <Select
          value={categoryID}
          onChange={event => setCategoryID(event.target.value)}
          disabled={loadingCategories}
        >
          <option value="">Selecionar categoria</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
      </FormGroup>

      <Button type='submit' isLoading={loadingButton} disabled={isFormValid}>
        {buttonLabel}
      </Button>
    </ContactFormContainer>
  );
}
