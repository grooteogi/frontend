import React, { useEffect, useRef, useState } from 'react';
import Hashtag from '@components/common/Hashtag';
import Wrapper from '@components/common/Wrapper';
import { Styled } from './PostCard.styled';
import Title from '@components/common/Title';
import Typography from '@components/common/Typography';
import { PostEntity } from 'types/fetchedData';
import sampleImg from 'public/imgs/dev_sample.jpg';
interface PostCardProps {
  postEntity: PostEntity;
  setClickedPostId: (id: number) => void;
}

const PostCard: React.FC<PostCardProps> = ({ postEntity, setClickedPostId }) => {
  const hashtagRef = useRef<any>();
  const [ellipsisTags, setEllipsisTags] = useState<boolean>(false);
  useEffect(() => {
    setEllipsisTags(hashtagRef.current.offsetHeight > 30);
  }, []);
  return (
    <Styled.container
      onClick={() => {
        setClickedPostId(postEntity.postId);
      }}
    >
      <Styled.image src={sampleImg} alt={'not found'} width="235px" height="200px" objectFit="cover" quality="100" />
      <Styled.hashRef ref={hashtagRef}>
        {/* {ellipsisTags ? (
          <>
            <Hashtag key={postEntity.hashtags[0]} fetchedTag={{ id: 1, tag: postEntity.hashtags[0], registered: '' }} />
            <Hashtag key={0} fetchedTag={{ id: 0, tag: '...', registered: '' }} />
          </>
        ) : (
          postEntity.hashtags.map((hash, index) => {
            return <Hashtag key={index} fetchedTag={{ id: index, tag: hash, registered: '' }} />;
          })
        )} */}
      </Styled.hashRef>
      <Wrapper flexDirection="column" margin={{ marginTop: '12px' }} alignItems="flex-start" gap={{ rowGap: 6 }}>
        <Styled.title>
          <Title size={'h4'} color={'black'} align={'right'}>
            {postEntity.title}
          </Title>
        </Styled.title>
        <Styled.content>
          <Typography size={'xs'} color={'dimgray'}>
            {postEntity.content}
          </Typography>
        </Styled.content>
      </Wrapper>
    </Styled.container>
  );
};

export default PostCard;
