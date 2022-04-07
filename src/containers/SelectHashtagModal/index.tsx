import React from 'react';
import Box from '../../components/Box';
import Button from '../../components/Button';
import Hashtag from '../../components/Hashtag';
import Link from '../../components/Link';
import Title from '../../components/Title';
import Typography from '../../components/Typography';
import Wrapper from '../../components/Wrapper';

const initialConcern = [
  { title: '#대학생활', value: '대학생활' },
  { title: '#대외활동', value: '대외활동' },
  { title: '#유학', value: '유학' },
  { title: '#취미생활', value: '취미생활' },
  { title: '#편입', value: '편입' },
  { title: '#LEET', value: 'LEET' },
  { title: '#PEET', value: 'PEET' },
  { title: '#고시준비', value: '고시준비' },
  { title: '#취업준비', value: '취업준비' },
  { title: '#창업', value: '창업' },
  { title: '#포트폴리오', value: '포트폴리오' },
  { title: '#기타', value: '기타' },
];
const initialCharacter = [
  { title: '#긍정적인', value: '긍정적인' },
  { title: '#열정적인', value: '열정적인' },
  { title: '#조용한', value: '조용한' },
  { title: '#욕심많은', value: '욕심많은' },
  { title: '#외향적인', value: '외향적인' },
  { title: '#내향적인', value: '내향적인' },
  { title: '#현실적인', value: '현실적인' },
  { title: '#이상적인', value: '이상적인' },
  { title: '#감성적인', value: '감성적인' },
  { title: '#이성적인', value: '이성적인' },
  { title: '#계획적인', value: '계획적인' },
];
const handleClick = (tagValue: string) => {};
const SelectHashtagModal = () => {
  return (
    <Box width={450} height={600}>
      <Wrapper flexDirection={'column'} alignItems="flex-start">
        <Title size="h1" color={'black'} align="left">
          내 정보 추가하기
        </Title>
        <Wrapper flexDirection={'row'}>
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
        <Wrapper flexDirection={'row'} gap={{ rowGap: 5, columnGap: 10 }}>
          {initialConcern.map(concern => {
            return (
              <Hashtag
                key={concern.title}
                onClick={() => handleClick(concern.value)}
                content={concern.title}
                clickable={true}
              />
            );
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
        <Wrapper flexDirection={'row'} gap={{ rowGap: 5, columnGap: 10 }}>
          {initialCharacter.map(character => {
            return (
              <Hashtag
                key={character.title}
                content={character.title}
                clickable={true}
                onClick={() => handleClick(character.value)}
              />
            );
          })}
        </Wrapper>
      </Wrapper>
      <Wrapper flexDirection={'row'} justifyContent={'flex-end'} gap={{ gap: 10 }}>
        <Link href={''} size={'sm'} color={'primary'} align={'right'}>
          건너뛰기
        </Link>
        <Link href={''} size={'sm'} color={'darkgray'} align={'right'}>
          확인
        </Link>
      </Wrapper>
    </Box>
  );
};
export default SelectHashtagModal;
