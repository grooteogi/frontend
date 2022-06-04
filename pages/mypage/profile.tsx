import Input from '@components/common/Input';
import Image from '@components/common/Image';
import Typography from '@components/common/Typography';
import Layout from '@components/mypage/layout';
import { Divider } from 'antd';
import 'antd/dist/antd.css';
import Button from '@components/common/Button';
import Wrapper from '@components/common/Wrapper';
import Content from '@components/mypage/Content';

const Profile = () => {
  const data = {
    이름: <Input placeholder={'홍길동'} />,
    닉네임: <Input placeholder={'설정된 닉네임'} />,
    이메일: (
      <Typography size={'xs'} color={'gray700'}>
        sample1234@sample.com
      </Typography>
    ),
    비밀번호: <Button color={'primary'} fontColor={'white'} name={'변경하기'} size={'sm'} />,
    '프로필 사진': (
      <>
        <Image src={'/imgs/profile.png'} alt={'profile img not found'} size={'md'} />
        <Wrapper flexDirection={'row'} padding={{ paddingTop: '15px' }} gap={{ columnGap: 2 }}>
          <Button color={'primary'} fontColor={'white'} name={'프로필 변경'} size={'sm'} />
          <Button color={'gray200'} fontColor={'gray500'} name={'이미지 제거'} size={'sm'} />
        </Wrapper>
      </>
    ),
  };

  return (
    <Content title={'회원 정보 수정'}>
      <Layout.container>
        {Object.entries(data).map(([key, value]) => (
          <>
            <Layout.name>
              <Typography size={'sm'} color={'gray700'}>
                {key}
              </Typography>
            </Layout.name>
            <Layout.inputs>{value}</Layout.inputs>
          </>
        ))}
        <Layout.complete>
          <Button name="수정하기" color={'primary'} fontColor={'white'} size={'md'} />
        </Layout.complete>
        <Divider style={{ gridColumn: '1 / span 3' }} />
        <Layout.footer>
          <Wrapper flexDirection={'column'}>
            <Typography size={'md'} color={'darkgray'}>
              회원 탈퇴
            </Typography>
            <Typography size={'xxs'} color={'gray500'}>
              회원 탈퇴 시 포인트와 결제내역 및 모든 기록이 삭제됩니다.
            </Typography>
          </Wrapper>
          <Button name="회원 탈퇴" color={'gray200'} fontColor={'white'} size={'md'} />
        </Layout.footer>
      </Layout.container>
    </Content>
  );
};

export default Profile;
