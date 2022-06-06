import { useEffect, useState } from 'react';
import { validEmail, validPassword } from '@lib/validator';
import { Field, Form, Formik, FormikErrors, useFormikContext } from 'formik';
import auth from '@lib/api/auth';
import Button from '@components/common/Button';
import Checkbox from '@components/common/Checkbox';
import Input from '@components/common/Input';
import Styled from './style';
import Title from '@components/common/Title';
import Timer from '@components/common/Timer/Timer';
import { useRouter } from 'next/router';
import Typography from '@components/common/Typography';

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
  const [emailConfirmed, setEmailConfirmed] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (allAgree) {
      setFieldValue('serviceAgree', true);
      setFieldValue('privacyAgree', true);
      setFieldValue('ageAgree', true);
    } else {
      setFieldValue('serviceAgree', false);
      setFieldValue('privacyAgree', false);
      setFieldValue('ageAgree', false);
    }
  }, [allAgree, setFieldValue]);

  const resendEmailClick = async () => {
    const response = await auth.resendEmail(email);
    if (response.status === 200) console.log('email verified');
    else console.log('email not verified');

    setIsReset(true);
    setIsReset(false);
  };
  const handleSendEmail = async () => {
    const response = await auth.sendEmail(email);
    if (response.status === 200) {
      setEmailClicked(true);
      console.log('email verified');
    } else alert(response.message);
  };
  const handleCheckEmail = async () => {
    const response = await auth.confirmEmail({ email, code });
    if (response.status === 200) {
      setEmailChecked(true);
      alert('이메일 인증이 완료되었습니다!');
      setEmailConfirmed(true);
      console.log('email verified confirmed');
    } else {
      alert('이메일 인증번호가 일치하지 않습니다.');
      console.log('email sending fail');
    }
  };
  const handleSignup = async () => {
    handleSubmit();
    const response = await auth.signupUser({ email, password });
    if (response.status === 200) {
      router.push('/auth/signin');
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
          borderColor={emailChecked && email && !errors.email ? 'primary' : 'gray200'}
          component={Input}
        />
        {emailClicked && !emailChecked && (
          <Field type={'text'} name={'code'} placeholder={'인증번호를 입력하세요'} component={Input} />
        )}
        {emailClicked && !emailChecked && !emailConfirmed && (
          <Timer resetStatus={isReset} isStart={true} limitMin={3} fontColor={'black'} />
        )}

        {emailClicked && !emailChecked && (
          <Styled.emailbuttonContainer>
            <Button
              type={'button'}
              name={'재전송'}
              size={'md'}
              fontColor={'white'}
              borderColor={'none'}
              color={email && !errors.email ? 'black' : 'gray200'}
              onClick={resendEmailClick}
              style={{ alignSelf: 'flex-start' }}
            />
            <Button
              type={'button'}
              name={'인증 완료하기'}
              size={'md'}
              fontColor={'white'}
              borderColor={'none'}
              color={'black'}
              onClick={handleCheckEmail}
              style={{ alignSelf: 'flex-end' }}
            />
          </Styled.emailbuttonContainer>
        )}
        {!emailClicked && (
          <Button
            type={'button'}
            name={'이메일 인증'}
            size={'md'}
            fontColor={'white'}
            borderColor={'none'}
            color={email && !errors.email ? 'black' : 'gray200'}
            disabled={!(email && !errors.email)}
            onClick={handleSendEmail}
            style={{ alignSelf: 'flex-end' }}
          />
        )}

        <Field
          type={'password'}
          placeholder={'비밀번호'}
          name={'password'}
          id={'password'}
          fontColor={password && !errors.password ? 'black' : 'darkgray'}
          borderColor={passwordConfirm && password && !errors.password ? 'primary' : 'gray200'}
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
        {errors.password && (
          <Typography size={'xxs'} weight={'regular'} color={'danger'} align={'right'}>
            {errors.password}
          </Typography>
        )}
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
        disabled={!allAgree || !emailChecked || errors.password ? true : false}
      />
    </Form>
  );
};

const SignupModal = () => {
  return (
    <Styled.box>
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
            const errors: FormikErrors<{ email: string; password: string; all: string }> = {
              email: '',
              password: '',
              all: '',
            };
            if (values.email && !validEmail(values.email)) errors.email = 'Email Fail';
            if (values.password && !validPassword(values.password)) errors.password = '유효하지 않은 비밀번호입니다.';
            if (values.passwordConfirm && values.password !== values.passwordConfirm)
              errors.password = '비밀번호가 일치하지 않습니다.';

            if (errors.email === '' && errors.password === '') {
              if (values.email === '' || values.password === '') errors.all = '이메일과 비밀번호는 필수 입력값입니다.';
              if (!values.serviceAgree || !values.privacyAgree || !values.ageAgree)
                errors.all = '필수 동의 항목입니다.';
              if (values.allAgree) errors.all = '';
            }

            return errors;
          }}
          onSubmit={values => {
            console.log('formData', values);
          }}
        >
          <SignupForm />
        </Formik>
      </Styled.container>
    </Styled.box>
  );
};

export default SignupModal;
