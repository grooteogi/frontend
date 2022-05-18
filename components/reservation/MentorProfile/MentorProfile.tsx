import Hashtag from '@components/common/Hashtag';
import Image from '@components/common/Image';
import Title from '@components/common/Title';
import Typography from '@components/common/Typography';
import { useEffect, useRef, useState } from 'react';
import { fetchedHashtag } from 'types/fetchedHashtag';
import Styled from './MentorProfile.styled';

const MentorProfile = () => {
  const hashtagRef = useRef<HTMLDivElement>(null);
  const [ellipsisTags, setEllipsisTags] = useState<boolean>(false);
  useEffect(() => {
    if (hashtagRef.current != null) setEllipsisTags(hashtagRef.current.offsetHeight > 30);
  }, []);

  const title = '저랑같이 공부해요!';
  const hashtags: fetchedHashtag[] = [
    { id: 1, hashtagType: 'PERSONALITY', tag: '대학생활', registered: '' },
    { id: 2, hashtagType: 'PERSONALITY', tag: '취업준비', registered: '' },
    { id: 3, hashtagType: 'PERSONALITY', tag: '코딩테스트', registered: '' },
  ];

  return (
    <Styled.container>
      <Image size={'md'} alt={'mentor_img'} src={'/imgs/profile.png'} />
      <Styled.infoContainer>
        <Title size={'h3'} color={'black'}>
          {title}
        </Title>
        <Styled.hashRef ref={hashtagRef}>
          {ellipsisTags ? (
            <>
              <Hashtag key={hashtags[0].id} fetchedTag={hashtags[0]} />
              <Hashtag key={0} fetchedTag={{ id: 0, hashtagType: 'CONCERN', tag: '...', registered: '' }} />
            </>
          ) : (
            hashtags.map(hash => {
              return <Hashtag key={hash.id} fetchedTag={hash} />;
            })
          )}
        </Styled.hashRef>
        <Typography size={'xs'} color={'dimgray'}>
          더치페이
        </Typography>
      </Styled.infoContainer>
    </Styled.container>
  );
};

export default MentorProfile;
