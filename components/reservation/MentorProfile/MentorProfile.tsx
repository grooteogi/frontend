import Image from '@components/common/Image';
import Title from '@components/common/Title';
import Typography from '@components/common/Typography';
import Styled from './MentorProfile.styled';

const MentorProfile = () => {
  const title = '저랑같이 공부해요!';

  return (
    <Styled.container>
      <Image size={'md'} alt={'mentor_img'} src={'/imgs/profile.png'} />
      <Styled.infoContainer>
        <Title size={'h3'} color={'black'}>
          {title}
        </Title>
        <Typography size={'xs'} color={'gray700'}>
          더치페이
        </Typography>
      </Styled.infoContainer>
    </Styled.container>
  );
};

export default MentorProfile;
