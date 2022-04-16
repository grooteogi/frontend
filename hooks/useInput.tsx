import React, { useState } from 'react';

type validatorType = (value: string) => boolean;
const useInput = (initialValue: string, validator: validatorType = () => true) => {
  const [value, setValue] = useState(initialValue);
  const [valid, setValid] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    if (validator(value)) setValid(true);
    else setValid(false);
    setValue(value);
  };
  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const eValue = e.target.innerText;
    if (validator(value)) setValid(true);
    else setValid(false);
    setValue(eValue);
  };
  return { value, onChange, onBlur, setValue, valid };
};

export default useInput;
