import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useInput from '@hooks/useInput';
import auth from '@lib/api/auth';
import { validEmail, validPassword } from '@lib/validator';
import Box from '@components/Box';
import Button from '@components/Button';
import Checkbox from '@components/Checkbox';
import Input from '@components/Input';
import Typography from '@components/Typography';
import Wrapper from '@components/Wrapper';

const NormalSignupModal = () => {
  const router = useRouter();
  const { value: email, onChange: onEmailChange, valid: emailValid } = useInput('', validEmail);
  const { value: pwd, onChange: onPwdChange, valid: pwdValid } = useInput('', validPassword);
  const { value: pwdConfirm, onChange: onPwdConfirmChange } = useInput('', validPassword);
  const { value: code, onChange: onCodeChange } = useInput('');
  const [emailClicked, setEmailClicked] = useState(false);
  const [emailConfirm, setEmailConfirm] = useState(false);
  const [allChecked, setAllChecked] = useState(false);
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    router.prefetch('/auth/hashtag');

    if (emailClicked) {
      const countdown = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(countdown);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [minutes, seconds, emailClicked, router]);

  const handleEmailVerifiedClick = async () => {
    setEmailClicked(true);
    const status = await auth.sendEmail(email);
    if (status === 200) console.log('email verified');
    else console.log('email not verified');
  };
  const handleEmailVerified = async () => {
    const status = await auth.confirmEmail({ email, code });
    if (status === 200) setEmailConfirm(true);
    else console.log('email sending fail');
  };
  const handleSubmit = async () => {
    const status = await auth.signupUser({ type: 0, email, password: pwd });
    // if (status === 200) router.push('/auth/hashtag');
    router.push('/auth/hashtag');
  };

  return (
    <Box width={500} height={800}>
      <Wrapper flexDirection={'row'} gap={{ rowGap: 20 }}>
        <Typography size={'lg'} color={'black'} weight={'BOLD'}>
          🌳 간편 가입하기
        </Typography>
      </Wrapper>
      <Wrapper flexDirection={'column'} gap={{ gap: 20 }}>
        <Input placeholder={'이메일'} />
        <Wrapper flexDirection={'row'} gap={{ columnGap: 1 }} justifyContent={'flex-end'}>
          <Button color={'black'} fontColor={'white'} borderColor={'none'} name={'이메일 인증'} size={'md'} />
        </Wrapper>
        <Wrapper flexDirection={'row'} gap={{ gap: 20 }}>
          <Input
            width={375}
            height={40}
            placeholder={'이메일'}
            value={email}
            onChange={onEmailChange}
            fontColor={emailValid ? 'black' : 'gray'}
            borderColor={emailConfirm ? 'primary' : 'lightgray'}
          />
          {emailClicked ? (
            <Input width={375} height={40} placeholder={'인증번호를 입력하세요'} value={code} onChange={onCodeChange} />
          ) : (
            <></>
          )}
          {emailConfirm ? (
            <></>
          ) : (
            <Wrapper flexDirection={'row'} justifyContent={'flex-end'} alignItems={'center'} gap={{ gap: 10 }}>
              {emailClicked ? (
                <Typography size={'sm'} color={'black'}>
                  {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                </Typography>
              ) : (
                <></>
              )}
              <Button
                fontColor={'white'}
                borderColor={'none'}
                name={'이메일 인증'}
                size={'md'}
                color={emailValid ? 'black' : 'lightgray'}
                disabled={emailValid ? false : true}
                onClick={emailClicked ? handleEmailVerified : handleEmailVerifiedClick}
              />
            </Wrapper>
          )}
          <Input
            width={375}
            height={40}
            placeholder={'비밀번호'}
            type={'password'}
            value={pwd}
            onChange={onPwdChange}
            fontColor={pwdValid ? 'black' : 'gray'}
            borderColor={pwd && pwd === pwdConfirm ? 'primary' : 'lightgray'}
          />
          <Input
            width={375}
            height={40}
            placeholder={'비밀번호 확인'}
            type={'password'}
            value={pwdConfirm}
            onChange={onPwdConfirmChange}
            fontColor={pwd === pwdConfirm ? 'black' : 'gray'}
            borderColor={pwd && pwd === pwdConfirm ? 'primary' : 'lightgray'}
          />
          <Wrapper flexDirection={'row'} gap={{ rowGap: 5 }}>
            <Checkbox
              label={'전체 동의'}
              checked={allChecked}
              defaultChecked={allChecked}
              onClick={() => setAllChecked(!allChecked)}
            />
            <Wrapper flexDirection={'row'} gap={{ rowGap: 10 }}>
              <Checkbox
                label={'서비스 이용 약관 동의 (필수)'}
                link={true}
                paddingLeft={'1rem'}
                checked={allChecked}
                defaultChecked={allChecked}
              />
              <Checkbox
                label={'개인정보 수집 및 이용 동의 (필수)'}
                link={true}
                paddingLeft={'1rem'}
                checked={allChecked}
                defaultChecked={allChecked}
              />
              <Checkbox
                label={'만 14세 이상입니다 (필수)'}
                paddingLeft={'1rem'}
                checked={allChecked}
                defaultChecked={allChecked}
              />
            </Wrapper>
          </Wrapper>
        </Wrapper>
        <Button color={'primary'} name={'회원가입하기'} fontColor={'black'} size={'lg'} onClick={handleSubmit}></Button>
      </Wrapper>
    </Box>
  );
};

export default NormalSignupModal;