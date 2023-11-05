import { useState } from 'react';
import { InputWrapper, UserInput, SummaryInput } from './styled';

const Input = () => {
  const [inputText, setInputText] = useState('');

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <SummaryInput>
      <InputWrapper>
        <UserInput
          value={inputText}
          onChange={handleChange}
          placeholder="input"
        />
      </InputWrapper>
    </SummaryInput>
  );
};

export default Input;
