import React from 'react';
import Box from '../../components/Box';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Typography from '../../components/Typography';
import Wrapper from '../../components/Wrapper';

const REST_API_KEY = '6aecd19783801d36d392d8b19b858225';
const REDIRECT_URI = 'http://localhost:3000/kakao';
const KAKAO_AUTH_URL = `http://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const SignInModal = () => {
  return (
    <Box width={500} height={550}>
      <Wrapper flexDirection={'column'} rowInterval={30}>
        <Title icon={'/logos/grooteogi_logo.png'} size={'h1'} color={'black'} align={'left'}>
          그루터기
        </Title>
        <Wrapper flexDirection={'column'} rowInterval={15}>
          <Typography size={'lg'} color={'darkgray'} weight={'LIGHT'}>
            인생선배를 찾는 지름길,
          </Typography>
          <Typography size={'lg'} color={'darkgray'} weight={'LIGHT'}>
            그루터기
          </Typography>
        </Wrapper>
        <Wrapper flexDirection={'column'} rowInterval={20}>
          <Button
            icon={'/logos/kakao_logo.png'}
            color={'kakao'}
            fontColor={'black'}
            name={'카카오로 1초만에 시작하기'}
            size={'lg'}
            onClick={() => {
              location.href = KAKAO_AUTH_URL;
            }}
          />
          <Button
            icon={'/logos/google_logo.png'}
            color={'white'}
            fontColor={'black'}
            borderColor={'lightgray'}
            name={'구글계정으로 시작하기'}
            size={'lg'}
          />
          <Button color={'lightgray'} fontColor={'darkgray'} name={'이메일로 시작하기'} size={'lg'} />
        </Wrapper>
      </Wrapper>
    </Box>
  );
};

export default SignInModal;
