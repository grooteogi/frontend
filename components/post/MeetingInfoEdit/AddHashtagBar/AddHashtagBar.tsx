import React, { useRef } from 'react';
import Image from 'next/image';
import { Styled } from './AddHashtagBar.styled';
import Wrapper from '@components/common/Wrapper';
import Hashtag from '@components/common/Hashtag';
import { HashtagEntity } from 'types/entity';
import { usePostContext } from '@components/post/context';

let idx = 0;
const AddHashtagBar: React.FC<{ hashtags: HashtagEntity[] }> = ({ hashtags }) => {
  const { setHashtags } = usePostContext();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpdateHashtag = (value: string) => {
    const newHashtag: HashtagEntity = { hashtagId: idx++, name: value };
    setHashtags([...hashtags, newHashtag]);
  };

  const handleRemoveHashtag = async (hashtag: HashtagEntity) => {
    setHashtags(hashtags.filter((h: HashtagEntity) => h.hashtagId !== hashtag.hashtagId));
    console.log(hashtags);
  };

  const handleCheckEnter = async (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      // 엔터 이벤트 처리
      if (inputRef.current) {
        handleUpdateHashtag(inputRef.current.value);
        inputRef.current.value = '';
        inputRef.current.focus();
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
      <Wrapper flexDirection={'row'} gap={{ columnGap: 10 }}>
        {hashtags.map(({ ...fetched }: HashtagEntity) => (
          <Hashtag
            key={fetched.hashtagId}
            fetchedTag={fetched}
            removable
            onRemove={() => handleRemoveHashtag(fetched)}
          />
        ))}
      </Wrapper>
    </>
  );
};

export default AddHashtagBar;
