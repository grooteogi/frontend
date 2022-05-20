import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import Image from 'next/image';
import { Styled } from './AddHashtagBar.styled';

interface InputProps {
  addHashtags: (value: string) => void;
}

const AddHashtagBar: React.FC<InputProps> = ({ addHashtags }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [wordEntered, setWordEntered] = useState<string>('');
  const checkEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      console.log('enter');
      // 엔터 이벤트 처리
      if (inputRef.current) {
        addHashtags(inputRef.current.value);
        inputRef.current.value = '';
      }
    }
  };
  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
  };
  return (
    <Styled.container>
      <Styled.section>
        <Styled.input ref={inputRef} type={'text'} value={wordEntered} onChange={handleFilter} onKeyDown={checkEnter} />
        <Image src={'/logos/search.png'} alt={'search icon not found'} width={'16px'} height={'16px'} />
      </Styled.section>
    </Styled.container>
  );
};

export default AddHashtagBar;
