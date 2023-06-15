import { useState } from 'react';

interface ErrorProps {
  fieldName: string;
  message: string;
}

export default function useErrors() {
  const [errors, setErrors] = useState<ErrorProps[]>([]);

  function setError({ fieldName, message }: ErrorProps) {
    setErrors(prevState => {
      const errorIndex = prevState.findIndex(error => error.fieldName === fieldName);

      if(errorIndex < 0) {
        return [...prevState, { fieldName, message }];
      }

      return prevState;
    });
  }

  function removeError(fieldName: string) {
    setErrors((prevState) => prevState.filter((error) => error.fieldName !== fieldName));
  }

  function getErrorMessageByFieldName(fieldName: string) {
    return errors.find(error => error.fieldName === fieldName)?.message;
  }

  return { errors, setError, removeError, getErrorMessageByFieldName };
}
