import React from 'react';
import { Styled } from './MyPagePostCard.styled';
import Title from '@components/common/Title';
import Image from '../../common/Image';
import Hashtag from '../../common/Hashtag';
import { nanoid } from 'nanoid';
import { PostListResponseDto } from 'types/response';

const MyPagePostCard: React.FC<{ post: PostListResponseDto }> = ({ post }) => {
  return (
    <Styled.container>
      <Styled.image>
        <Image
          src={post.imageUrl === '' || post.imageUrl ? '/imgs/default_profile.png' : post.imageUrl}
          alt={'약속 사진'}
          size={'md'}
        />
      </Styled.image>
      <Styled.info>
        <Styled.title>
          <Title size={'h3'} color={'black'} align={'left'}>
            {post.title}
          </Title>
        </Styled.title>
        <Styled.hash>
          {post.hashtags.map(hash => (
            <Hashtag key={nanoid()} hashtag={hash} />
          ))}
        </Styled.hash>
      </Styled.info>
    </Styled.container>
  );
};

export default MyPagePostCard;
