import Button from '@components/common/Button';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Box from '@components/common/Box';
import Hashtag from '@components/common/Hashtag';
import Link from '@components/common/Link';
import Title from '@components/common/Title';
import Typography from '@components/common/Typography';
import Wrapper from '@components/common/Wrapper';
import { HashtagEntity } from 'types/entity';

export const initialConcern: HashtagEntity[] = [
  { hashtagId: 1, name: '대학생활' },
  { hashtagId: 2, name: '대외활동' },
  { hashtagId: 3, name: '유학' },
  { hashtagId: 4, name: '취미생활' },
  { hashtagId: 5, name: '편입' },
  { hashtagId: 6, name: 'LEET' },
  { hashtagId: 7, name: 'PEET' },
  { hashtagId: 8, name: '고시준비' },
  { hashtagId: 9, name: '취업준비' },
  { hashtagId: 10, name: '창업' },
  { hashtagId: 11, name: '포트폴리오' },
  { hashtagId: 12, name: '기타' },
];

export const initialCharacter: HashtagEntity[] = [
  { hashtagId: 1, name: '긍정적인' },
  { hashtagId: 2, name: '열정적인' },
  { hashtagId: 3, name: '조용한' },
  { hashtagId: 4, name: '욕심많은' },
  { hashtagId: 5, name: '외향적인' },
  { hashtagId: 6, name: '내향적인' },
  { hashtagId: 7, name: '현실적인' },
  { hashtagId: 8, name: '이상적인' },
  { hashtagId: 9, name: '감성적인' },
  { hashtagId: 10, name: '이성적인' },
  { hashtagId: 11, name: '계획적인' },
  { hashtagId: 12, name: '엄청난' },
];

const SelectHashtagModal = () => {
  const router = useRouter();
  const [selectedTags, setSelectedTags] = useState<HashtagEntity[]>([]);

  const onHashtagClick = (hashtag: HashtagEntity, clicked: boolean) => {
    clicked
      ? setSelectedTags(selectedTags.filter(tag => tag.hashtagId !== hashtag.hashtagId))
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
            return <Hashtag key={concern.hashtagId} onClick={onHashtagClick} fetchedTag={concern} clickable={true} />;
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
            return (
              <Hashtag key={character.hashtagId} fetchedTag={character} clickable={true} onClick={onHashtagClick} />
            );
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
