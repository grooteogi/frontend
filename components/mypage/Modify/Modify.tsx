import Input from '@components/common/Input';
import Image from '@components/common/Image';
import Typography from '@components/common/Typography';
import Layout from '@components/mypage/layout';
import Button from '@components/common/Button';
import Wrapper from '@components/common/Wrapper';
import { useFormik } from 'formik';
import { Divider } from 'antd';
import 'antd/dist/antd.css';
import { UserProfileResponseDto } from 'types/response';
import React, { useRef } from 'react';
import image from '@lib/api/image';
import user from '@lib/api/user';
import auth from '@lib/api/auth';
import { ModifyUserProfileRequestDto } from 'types/request';

interface ModifyProps {
  profile: UserProfileResponseDto;
}

const Modify: React.FC<ModifyProps> = ({ profile }) => {
  const modifyFormik = useFormik<ModifyUserProfileRequestDto>({
    initialValues: {
      nickname: profile.nickname,
      imageUrl: profile.imageUrl,
      name: profile.name,
      address: profile.address,
      phone: profile.phone,
    },
    onSubmit: async values => {
      const response = await user.modifyProfile(values);
      if (response.status === 200) alert(response.message);
      else alert('회원정보 수정에 실패하였습니다.');
    },
  });
  const handleWithDrawal = async () => {
    const status = await auth.withDrawal();
    if (status === 200) location.href = '/';
    else alert('회원탈퇴에 실패하였습니다.');
  };

  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => hiddenFileInput.current?.click();
  const handleChange = async (event: React.ChangeEvent<HTMLInputElement> | any) => {
    const file = event.target.files[0];
    const data = new FormData();
    data.append('multipartFile', file);

    const res = await image.upload(data);
    console.log('res', res);
    if (res.status === 200 || res.status === 202) modifyFormik.setFieldValue('imageUrl', res.data);
    else alert('업로드 실패');
  };

  // prettier-ignore
  const formData = {
    이름: (<Input id="name" name={'name'} type={'text'} onChange={modifyFormik.handleChange} value={modifyFormik.values.name} placeholder={modifyFormik.initialValues.name}/>),
    닉네임: (<Input id="nickname" name={'nickname'} type={'text'} onChange={modifyFormik.handleChange} value={modifyFormik.values.nickname} placeholder={modifyFormik.initialValues.nickname}/>),
    이메일: (<Typography size={'xs'} color={'gray700'}>{profile.email}</Typography>),
    비밀번호: (<Button color={'primary'} fontColor={'white'} name={'변경하기'} size={'sm'} type={'button'} onClick={() => alert('password button clicked')}/>),
    '프로필 사진': (
      <>
        <Image src={modifyFormik.values.imageUrl} alt={'profile img not found'} size={'md'} />
        <Wrapper flexDirection={'row'} padding={{ paddingTop: '15px' }} gap={{ columnGap: 2 }}>
          <input id="imageUrl" name="imageUrl" type={'file'} ref={hiddenFileInput} onChange={handleChange} hidden />
          <Button color={'primary'} fontColor={'white'} name={'프로필 변경'} size={'sm'} type={'button'} onClick={handleClick}/>
          <Button color={'gray200'} fontColor={'gray500'} name={'이미지 제거'} size={'sm'} type={'button'} onClick={() => modifyFormik.setFieldValue('imageUrl', '/imgs/default_profile.png')}/>
        </Wrapper>
      </>
    ),
  };

  return (
    <Layout.container onSubmit={modifyFormik.handleSubmit}>
      {Object.entries(formData).map(([key, value]) => (
        <React.Fragment key={key}>
          <Layout.name>
            <Typography size={'sm'} color={'gray700'}>
              {key}
            </Typography>
          </Layout.name>
          <Layout.inputs>{value}</Layout.inputs>
        </React.Fragment>
      ))}
      <Layout.complete>
        <Button type={'submit'} name="수정하기" color={'primary'} fontColor={'white'} size={'md'} />
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
        <Button
          name="회원 탈퇴"
          color={'gray200'}
          fontColor={'white'}
          size={'md'}
          type={'button'}
          onClick={handleWithDrawal}
        />
      </Layout.footer>
    </Layout.container>
  );
};
export default Modify;
