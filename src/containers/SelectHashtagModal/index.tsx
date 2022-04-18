import React, { useEffect, useState } from 'react';
import { fetchedHashtag } from '../../../types/fetchedHashtag';
import Box from '../../components/Box';
import Hashtag from '../../components/Hashtag';
import Link from '../../components/Link';
import Title from '../../components/Title';
import Typography from '../../components/Typography';
import Wrapper from '../../components/Wrapper';
import { initialCharacter, initialConcern } from './data';

const SelectHashtagModal = () => {
  const [selectedTags, setSelectedTags] = useState<fetchedHashtag[]>([]);

  const onHashtagClick = (hashtag: fetchedHashtag, clicked: boolean) => {
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
        <Wrapper flexDirection={'row'} margin={{ marginTop: '10px' }} gap={{ rowGap: 5, columnGap: 10 }}>
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
        <Wrapper flexDirection={'row'} margin={{ marginTop: '10px' }} gap={{ rowGap: 5, columnGap: 10 }}>
          {initialCharacter.map(character => {
            return <Hashtag key={character.id} fetchedTag={character} clickable={true} onClick={onHashtagClick} />;
          })}
        </Wrapper>
      </Wrapper>
      <Wrapper flexDirection={'row'} justifyContent={'flex-end'} alignItems={'center'} gap={{ gap: 10 }}>
        <Link href={'/'} size={'md'} color={'primary'} align={'right'}>
          건너뛰기
        </Link>

        <Button name={'확인'} size={'md'} color={'white'} fontColor={'black'} />
      </Wrapper>
    </Box>
  );
};
export default SelectHashtagModal;
