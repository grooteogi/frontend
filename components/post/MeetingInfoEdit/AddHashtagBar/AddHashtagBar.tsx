import React, { useRef } from 'react';
import Image from 'next/image';
import { Styled } from './AddHashtagBar.styled';
import Hashtag from '@components/common/Hashtag';
import { HashtagEntity } from 'types/entity';
import { usePostContext } from '@components/post/context';

let idx = 0;
const AddHashtagBar: React.FC = () => {
  const { hashtags, setHashtags } = usePostContext();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpdateHashtag = (value: string) => {
    const newHashtag: HashtagEntity = { hashtagId: idx++, name: value };
    setHashtags([...hashtags, newHashtag]);
  };

  const handleRemoveHashtag = async (hashtag: HashtagEntity) => {
    setHashtags(hashtags.filter((h: HashtagEntity) => h.hashtagId !== hashtag.hashtagId));
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
          <Styled.input ref={inputRef} type={'text'} onKeyDown={handleCheckEnter} />
          <Image src={'/logos/search.png'} alt={'search icon not found'} width={'16px'} height={'16px'} />
        </Styled.section>
      </Styled.container>
      <Styled.hashtagBox>
        {hashtags.map(({ ...fetched }: HashtagEntity) => (
          <Hashtag
            key={fetched.hashtagId}
            fetchedTag={fetched}
            removable
            onRemove={() => handleRemoveHashtag(fetched)}
          />
        ))}
      </Styled.hashtagBox>
    </>
  );
};

export default AddHashtagBar;
