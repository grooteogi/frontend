import React from 'react';
import Box from '@components/common/Box';
import Button from '@components/common/Button';
import Title from '@components/common/Title';
import Typography from '@components/common/Typography';
import { useRouter } from 'next/router';
import Styled from './style';

const SignInModal = () => {
  const router = useRouter();
  const KAKAO_AUTH = process.env.NEXT_PUBLIC_KAKAO_AUTH;
  const GOOGLE_AUTH = process.env.NEXT_PUBLIC_GOOGLE_AUTH;

  return (
    <Box width={450}>
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

        <Styled.buttonContainer>
          <Button
            icon={'/logos/kakao_logo.png'}
            color={'kakao'}
            fontColor={'black'}
            name={'카카오로 1초만에 시작하기'}
            size={'lg'}
            onClick={() => {
              location.href = KAKAO_AUTH || '/';
            }}
          />
          <Button
            icon={'/logos/google_logo.png'}
            color={'white'}
            fontColor={'black'}
            borderColor={'gray200'}
            name={'구글계정으로 시작하기'}
            size={'lg'}
            onClick={() => {
              location.href = GOOGLE_AUTH || '/';
            }}
          />
          <Button
            color={'gray200'}
            fontColor={'darkgray'}
            name={'이메일로 시작하기'}
            size={'lg'}
            onClick={() => router.push('/auth/signin')}
          />
        </Styled.buttonContainer>
      </Styled.container>
    </Box>
  );
};
export default SignInModal;
