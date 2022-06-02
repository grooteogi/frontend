import React, { useRef } from 'react';
import Image from 'next/image';
import { Styled } from './AddHashtagBar.styled';
import Hashtag from '@components/common/Hashtag';
import { nanoid } from 'nanoid';
import { useFormikContext } from 'formik';
import { PostCreateRequestDto } from 'types/request';

const AddHashtagBar: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { setFieldValue, values } = useFormikContext<PostCreateRequestDto>();
  const { hashtags } = values;

  const handleUpdateHashtag = (value: string) => {
    setFieldValue('hashtags', [...hashtags, value]);
  };

  const handleRemoveHashtag = async (hashtag: string) => {
    setFieldValue(
      'hashtags',
      hashtags.filter((targetHashtag: string) => targetHashtag !== hashtag),
    );
  };

  const handleCheckEnter = async (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      if (inputRef.current) {
        handleUpdateHashtag(inputRef.current.value);
        inputRef.current.value = '';
      }
    }
    // e.preventDefault();
    e.stopPropagation();
  };

  return (
    <React.Fragment>
      <Styled.container>
        <Styled.section>
          <Styled.input
            ref={inputRef}
            type={'text'}
            placeholder={'해시태그를 입력하고 스페이스바를 눌러주세요!'}
            onKeyDown={handleCheckEnter}
          />
          <Image src={'/logos/search.png'} alt={'search icon not found'} width={'16px'} height={'16px'} />
        </Styled.section>
      </Styled.container>
      <Styled.hashtagBox>
        {hashtags.map((hash: string) => (
          <Hashtag key={nanoid()} hashtag={hash} removable onRemove={() => handleRemoveHashtag(hash)} />
        ))}
      </Styled.hashtagBox>
    </React.Fragment>
  );
};

export default AddHashtagBar;
