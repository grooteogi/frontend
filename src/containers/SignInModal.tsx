import React from 'react';
import Box from '../components/Box';
import Button from '../components/Button';
import Typography from '../components/Typography';
import Wrapper from '../components/Wrapper';

export const SignInModal = () => {
  return (
    <Box width={500} height={600}>
      <Typography children={'🌳 그루터기'} size={'lg'} color={'black'} />
      <Wrapper flexDirection={'column'}>
        <Typography children={'인생선배를 찾는 지름길'} size={'lg'} color={'darkgray'} />
        <Typography children={'그루터기'} size={'lg'} color={'darkgray'} />
      </Wrapper>
      <Wrapper flexDirection={'column'} rowInterval={20}>
        <Button
          icon={'/logos/kakao_logo.png'}
          color={'kakao'}
          fontColor={'black'}
          name={'카카오로 1초만에 시작하기'}
          size={'lg'}
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
    </Box>
  );
};
