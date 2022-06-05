import Image from '@components/common/Image';
import Title from '@components/common/Title';
import Typography from '@components/common/Typography';
import Styled from './MentorProfile.styled';
import Hashtag from '@components/common/Hashtag';
import { nanoid } from 'nanoid';
import { PostEntity } from 'types/entity';
import { CreditType } from 'types/enum';

const MentorProfile = ({ post }: { post: PostEntity }) => {
  return (
    <Styled.container>
      <Styled.image>
        <Image src={post.imageUrl} alt={'약속 사진'} size={'md'} />
      </Styled.image>
      <Styled.info>
        <Styled.title>
          <Title size={'h3'} color={'black'} align={'left'}>
            {post.title}
          </Title>
        </Styled.title>
        <Typography size={'xs'} color={'gray700'}>
          {CreditType[post.creditType as keyof typeof CreditType]}
        </Typography>
        <Styled.hash>
          {post.hashtags.map(hash => (
            <Hashtag key={nanoid()} hashtag={hash} />
          ))}
        </Styled.hash>
      </Styled.info>
    </Styled.container>
  );
};

export default MentorProfile;
