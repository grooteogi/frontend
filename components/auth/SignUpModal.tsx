import { useEffect, useState } from 'react';
import { validEmail, validPassword } from '@lib/validator';
import { Field, Form, Formik, FormikErrors, useFormikContext } from 'formik';
import auth from '@lib/api/auth';
import Box from '@components/common/Box';
import Button from '@components/common/Button';
import Checkbox from '@components/common/Checkbox';
import Input from '@components/common/Input';
import Styled from './style';
import Title from '@components/common/Title';
import Timer from '@components/common/Timer/Timer';

interface LoginFormikValues {
  email: string;
  password: string;
  passwordConfirm: string;
  code: string;
  allAgree: boolean;
  serviceAgree: boolean;
  privacyAgree: boolean;
  ageAgree: boolean;
}

const SignupForm = () => {
  const { values, errors, setFieldValue, handleSubmit } = useFormikContext<LoginFormikValues>();
  const { email, password, passwordConfirm, code, allAgree } = values;
  const [emailClicked, setEmailClicked] = useState(false);
  const [emailChecked, setEmailChecked] = useState(false);

  useEffect(() => {
    if (allAgree === true) {
      setFieldValue('serviceAgree', true);
      setFieldValue('privacyAgree', true);
      setFieldValue('ageAgree', true);
    }
  }, [allAgree, setFieldValue]);

  const handleEmailClick = async () => {
    if (!emailClicked) {
      setEmailClicked(true);
      const status = await auth.sendEmail(email);
      if (status === 200) console.log('email verified');
      else console.log('email not verified');
    } else {
      const status = await auth.confirmEmail({ email, code });
      if (status === 200) {
        setEmailChecked(true);
        alert('이메일 인증이 완료되었습니다!');
        console.log('email verified confirmed');
      } else {
        alert('이메일 인증번호가 일치하지 않습니다.');
        console.log('email sending fail');
      }
    }
  };

  const handleSignup = async () => {
    handleSubmit();
    console.log('fuckcc');
    const status = await auth.signupUser({ email, password });
    if (status === 200) {
      console.log('signup access');
    } else {
      alert('회원가입 실패!');
    }
  };

  return (
    <Form>
      <Styled.inputContainer>
        <Field
          type={'text'}
          placeholder={'이메일'}
          name={'email'}
          id={'email'}
          fontColor={email && !errors.email ? 'black' : 'darkgray'}
          borderColor={email && !errors.email ? 'primary' : 'gray200'}
          component={Input}
        />
        {emailClicked && !emailChecked && (
          <Field type={'password'} name={'code'} placeholder={'인증번호를 입력하세요'} component={Input} />
        )}
        {emailClicked && !emailChecked && <Timer isStart={true} limitMin={3} fontColor={'black'} />}
        <Button
          type={'button'}
          name={'이메일 인증'}
          size={'md'}
          fontColor={'white'}
          borderColor={'none'}
          color={email && !errors.email ? 'black' : 'gray200'}
          disabled={email && !errors.email ? false : true}
          onClick={handleEmailClick}
          style={{ alignSelf: 'flex-end' }}
        />
        <Field
          type={'password'}
          placeholder={'비밀번호'}
          name={'password'}
          id={'password'}
          fontColor={password && !errors.password ? 'black' : 'darkgray'}
          borderColor={password && !errors.password ? 'primary' : 'gray200'}
          component={Input}
        />
        <Field
          type={'password'}
          placeholder={'비밀번호 확인'}
          name={'passwordConfirm'}
          id={'passwordConfirm'}
          fontColor={passwordConfirm === password ? 'black' : 'darkgray'}
          borderColor={passwordConfirm && passwordConfirm === password ? 'primary' : 'gray200'}
          component={Input}
        />
      </Styled.inputContainer>

      <Styled.checkboxContainer>
        <Field type={'checkbox'} name={'allAgree'} id={'allAgree'} label={'전체 동의'} component={Checkbox} />
        <Field
          type={'checkbox'}
          name={'serviceAgree'}
          id={'serviceAgree'}
          label={'서비스 이용 약관 동의 (필수)'}
          checked={allAgree}
          paddingLeft={'1.5rem'}
          component={Checkbox}
        />
        <Field
          type={'checkbox'}
          name={'privacyAgree'}
          id={'privacyAgree'}
          label={'개인정보 수집 및 이용 동의 (필수)'}
          checked={allAgree}
          paddingLeft={'1.5rem'}
          component={Checkbox}
        />
        <Field
          type={'checkbox'}
          name={'ageAgree'}
          id={'ageAgree'}
          label={'만 14세 이상입니다 (필수)'}
          checked={allAgree}
          paddingLeft={'1.5rem'}
          component={Checkbox}
        />
      </Styled.checkboxContainer>

      <Button
        type={'submit'}
        onClick={handleSignup}
        color={'primary'}
        name={'회원가입하기'}
        fontColor={'black'}
        size={'lg'}
      />
    </Form>
  );
};

const SignupModal = () => {
  return (
    <Box width={450}>
      <Styled.container>
        <Title size="h1" color={'black'} align="left">
          🌳 간편 가입하기
        </Title>

        <Formik
          initialValues={{
            email: '',
            password: '',
            passwordConfirm: '',
            code: '',
            allAgree: false,
            serviceAgree: false,
            privacyAgree: false,
            ageAgree: false,
          }}
          validate={values => {
            const errors: FormikErrors<{ email: string; password: string }> = { email: '', password: '' };
            if (values.email && !validEmail(values.email)) errors.email = 'Email Fail';
            if (values.password && !validPassword(values.password)) errors.password = 'Password Fail';
            return errors;
          }}
          onSubmit={values => {
            console.log('fuckyou');
            console.log('formData', values);
          }}
        >
          <SignupForm />
        </Formik>
      </Styled.container>
    </Box>
  );
};

export default SignupModal;
