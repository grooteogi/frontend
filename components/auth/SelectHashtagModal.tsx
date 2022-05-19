import Button from '@components/common/Button';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { TagMenuEntity } from 'types/fetchedData';
import Box from '@components/common/Box';
import Hashtag from '@components/common/Hashtag';
import Link from '@components/common/Link';
import Title from '@components/common/Title';
import Typography from '@components/common/Typography';
import Wrapper from '@components/common/Wrapper';

import { TagMenuEntity as fetchedHashtagType } from 'types/fetchedData';

export const initialConcern: fetchedHashtagType[] = [
  { id: 1, hashtagType: 'CONCERN', tag: '대학생활', registered: '' },
  { id: 2, hashtagType: 'CONCERN', tag: '대외활동', registered: '' },
  { id: 3, hashtagType: 'CONCERN', tag: '유학', registered: '' },
  { id: 4, hashtagType: 'CONCERN', tag: '취미생활', registered: '' },
  { id: 5, hashtagType: 'CONCERN', tag: '편입', registered: '' },
  { id: 6, hashtagType: 'CONCERN', tag: 'LEET', registered: '' },
  { id: 7, hashtagType: 'CONCERN', tag: 'PEET', registered: '' },
  { id: 8, hashtagType: 'CONCERN', tag: '고시준비', registered: '' },
  { id: 9, hashtagType: 'CONCERN', tag: '취업준비', registered: '' },
  { id: 10, hashtagType: 'CONCERN', tag: '창업', registered: '' },
  { id: 11, hashtagType: 'CONCERN', tag: '포트폴리오', registered: '' },
  { id: 12, hashtagType: 'CONCERN', tag: '기타', registered: '' },
];

export const initialCharacter: fetchedHashtagType[] = [
  { id: 1, hashtagType: 'PERSONALITY', tag: '긍정적인', registered: '' },
  { id: 2, hashtagType: 'PERSONALITY', tag: '열정적인', registered: '' },
  { id: 3, hashtagType: 'PERSONALITY', tag: '조용한', registered: '' },
  { id: 4, hashtagType: 'PERSONALITY', tag: '욕심많은', registered: '' },
  { id: 5, hashtagType: 'PERSONALITY', tag: '외향적인', registered: '' },
  { id: 6, hashtagType: 'PERSONALITY', tag: '내향적인', registered: '' },
  { id: 7, hashtagType: 'PERSONALITY', tag: '현실적인', registered: '' },
  { id: 8, hashtagType: 'PERSONALITY', tag: '이상적인', registered: '' },
  { id: 9, hashtagType: 'PERSONALITY', tag: '감성적인', registered: '' },
  { id: 10, hashtagType: 'PERSONALITY', tag: '이성적인', registered: '' },
  { id: 11, hashtagType: 'PERSONALITY', tag: '계획적인', registered: '' },
  { id: 12, hashtagType: 'PERSONALITY', tag: '엄청난', registered: '' },
];

const SelectHashtagModal = () => {
  const router = useRouter();
  const [selectedTags, setSelectedTags] = useState<TagMenuEntity[]>([]);

  const onHashtagClick = (hashtag: TagMenuEntity, clicked: boolean) => {
    clicked
      ? setSelectedTags(selectedTags.filter(tag => tag.id !== hashtag.id))
      : setSelectedTags([...selectedTags, hashtag]);
  };

  return (
    <Box width={450} height={600}>
      <Wrapper flexDirection={'column'} alignItems="flex-start">
        <Title size="h1" color={'black'} align="left">
          내 정보 추가하기
        </Title>
        <Wrapper flexDirection={'row'} margin={{ marginTop: '10px' }}>
          <Typography size={'md'} weight={'THIN'} color={'darkgray'}>
            내&nbsp;
          </Typography>
          <Typography size={'md'} weight={'THIN'} color={'primary'}>
            관심사
          </Typography>
          <Typography size={'md'} weight={'THIN'} color={'darkgray'}>
            를 더 잘 알려줄 수 있어요!
          </Typography>
        </Wrapper>
      </Wrapper>
      <Wrapper flexDirection={'row'}>
        <Typography size={'md'} weight={'THIN'} color={'darkgray'}>
          나는 이것에&nbsp;
        </Typography>
        <Typography size={'md'} weight={'LIGHT'} color={'darkgray'}>
          관심&nbsp;
        </Typography>
        <Typography size={'md'} weight={'THIN'} color={'darkgray'}>
          있어요.
        </Typography>
        <Wrapper flexDirection={'row'} margin={{ marginTop: '10px' }} gap={{ rowGap: 8, columnGap: 8 }}>
          {initialConcern.map(concern => {
            return <Hashtag key={concern.id} onClick={onHashtagClick} fetchedTag={concern} clickable={true} />;
          })}
        </Wrapper>
      </Wrapper>
      <Wrapper flexDirection={'row'}>
        <Typography size={'md'} weight={'THIN'} color={'darkgray'}>
          나는 이런&nbsp;
        </Typography>
        <Typography size={'md'} weight={'LIGHT'} color={'darkgray'}>
          성격&nbsp;
        </Typography>
        <Typography size={'md'} weight={'THIN'} color={'darkgray'}>
          이에요.
        </Typography>
        <Wrapper flexDirection={'row'} margin={{ marginTop: '10px' }} gap={{ rowGap: 8, columnGap: 8 }}>
          {initialCharacter.map(character => {
            return <Hashtag key={character.id} fetchedTag={character} clickable={true} onClick={onHashtagClick} />;
          })}
        </Wrapper>
      </Wrapper>
      <Wrapper flexDirection={'row'} justifyContent={'flex-end'} alignItems={'center'} gap={{ gap: 10 }}>
        <Link href={'/'} size={'md'} color={'primary'} align={'right'}>
          건너뛰기
        </Link>
        <Button name={'확인'} size={'md'} color={'null'} fontColor={'black'} onClick={() => router.push('/')} />
      </Wrapper>
    </Box>
  );
};
export default SelectHashtagModal;
