import Link from '@components/common/Link';
import Box from '@components/common/Box';
import Button from '@components/common/Button';
import Checkbox from '@components/common/Checkbox';
import Input from '@components/common/Input';
import Typography from '@components/common/Typography';
import Styled from './style';
import Title from '@components/common/Title';
import auth from '@lib/api/auth';
import { useFormik } from 'formik';
import { useState } from 'react';

const SignInModal = () => {
  const [agree, setAgree] = useState(true);
  const loginFormik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async values => {
      console.log(values);
      const status = await auth.signinUser(values);
      if (status === 200) location.href = '/';
      else alert('로그인에 실패하였습니다!');
    },
  });

  return (
    <Box width={450} height={550}>
      <Styled.container>
        <Title size="h1" color={'black'} align="left">
          🌳 그루터기
        </Title>
        <Styled.descriptionContainer>
          <Typography size={'lg'} weight={'light'} color={'darkgray'}>
            인생선배를 찾는 지름길,
          </Typography>
          <Typography size={'lg'} weight={'light'} color={'darkgray'}>
            그루터기
          </Typography>
        </Styled.descriptionContainer>

        <Styled.formContainer onSubmit={loginFormik.handleSubmit}>
          <Input
            id={'email'}
            name={'email'}
            type={'text'}
            onChange={loginFormik.handleChange}
            value={loginFormik.values.email}
            placeholder={'이메일'}
          />
          <Input
            id={'password'}
            name={'password'}
            type={'password'}
            onChange={loginFormik.handleChange}
            value={loginFormik.values.password}
            placeholder={'비밀번호'}
          />
          <Checkbox label={'로그인 유지'} checked={agree} onChange={() => setAgree(!agree)} />
          <Button
            type={'submit'}
            color={'primary'}
            fontColor={'black'}
            borderColor={'none'}
            name={'로그인'}
            size={'lg'}
          />

          <Styled.labelContainer>
            <Typography size={'xs'} color={'black'} align={'center'}>
              아직 회원이 아니신가요?
            </Typography>
            <Link href={'/auth/signup'} size={'xs'} color={'primary'} weight={'regular'}>
              회원가입하기
            </Link>
          </Styled.labelContainer>
        </Styled.formContainer>
      </Styled.container>
    </Box>
  );
};

export default SignInModal;
