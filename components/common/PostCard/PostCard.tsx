import React, { useEffect, useRef, useState } from 'react';
import Hashtag from '@components/common/Hashtag';
import Wrapper from '@components/common/Wrapper';
import { Styled } from './PostCard.styled';
import Title from '@components/common/Title';
import Typography from '@components/common/Typography';
import { fetchedHashtag, fetchedPostCard } from 'types/fetchedData';

interface PostCardProps {
  fetchedData: fetchedPostCard;
  setClickedPostId: (id: number) => void;
}

const PostCard: React.FC<PostCardProps> = ({ fetchedData, setClickedPostId }) => {
  const hashtagRef = useRef<any>();
  const [ellipsisTags, setEllipsisTags] = useState<boolean>(false);
  useEffect(() => {
    setEllipsisTags(hashtagRef.current.offsetHeight > 30);
  }, []);
  return (
    <Styled.container
      onClick={() => {
        setClickedPostId(fetchedData.id);
      }}
    >
      <Styled.image
        src={fetchedData.imageUrl}
        alt={'not found'}
        width="235px"
        height="200px"
        objectFit="cover"
        quality="100"
      />
      <Styled.hashRef ref={hashtagRef}>
        {ellipsisTags ? (
          <>
            <Hashtag key={fetchedData.postHashtags[0].id} fetchedTag={fetchedData.postHashtags[0]} />
            <Hashtag key={0} fetchedTag={{ id: 0, hashtagType: 'CONCERN', tag: '...', registered: '' }} />
          </>
        ) : (
          fetchedData.postHashtags.map(hash => {
            return <Hashtag key={hash.id} fetchedTag={hash} />;
          })
        )}
      </Styled.hashRef>
      <Wrapper flexDirection="column" margin={{ marginTop: '12px' }} alignItems="flex-start" gap={{ rowGap: 6 }}>
        <Styled.title>
          <Title size={'h4'} color={'black'} align={'right'}>
            {fetchedData.title}
          </Title>
        </Styled.title>
        <Styled.content>
          <Typography size={'xs'} color={'dimgray'}>
            {fetchedData.content}
          </Typography>
        </Styled.content>
      </Wrapper>
    </Styled.container>
  );
};

export default PostCard;
