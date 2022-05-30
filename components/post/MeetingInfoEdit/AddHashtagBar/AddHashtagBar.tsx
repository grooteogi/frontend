import React, { useRef } from 'react';
import Image from 'next/image';
import { Styled } from './AddHashtagBar.styled';
import Hashtag from '@components/common/Hashtag';
import { usePostContext } from '@components/post/context';
import { nanoid } from 'nanoid';

const AddHashtagBar: React.FC = () => {
  const { hashtags, setHashtags } = usePostContext();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpdateHashtag = (value: string) => {
    // TODO: 중복된 해시태그 체크
    setHashtags([...hashtags, value]);
  };

  const handleRemoveHashtag = async (hashtag: string) => {
    setHashtags(hashtags.filter((targetHashtag: string) => targetHashtag !== hashtag));
  };

  const handleCheckEnter = async (e: React.KeyboardEvent) => {
    if (e.key === ' ') {
      if (inputRef.current) {
        handleUpdateHashtag(inputRef.current.value);
        inputRef.current.value = '';
      }
    }
  };

  return (
    <>
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
    </>
  );
};

export default AddHashtagBar;
