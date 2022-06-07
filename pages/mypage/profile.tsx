import Modify from '@components/mypage/Modify';
import { useProfile } from '@components/mypage/useProfile';
import Content from '@components/mypage/Content';

const Profile = () => {
  const { profile } = useProfile();
  return <Content title={'회원 정보 수정'}>{profile !== undefined && <Modify profile={profile} />}</Content>;
};

export default Profile;
