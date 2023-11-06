import { useState } from 'react';
import { InputWrapper, UserInput, ImageWrapper } from './styled';
import search from '../../assets/images/search.svg';

const Input = () => {
  const [inputText, setInputText] = useState('');

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <InputWrapper>
      <ImageWrapper src={search} />
      <UserInput value={inputText} onChange={handleChange} placeholder="검색" />
    </InputWrapper>
  );
};

export default Input;
