import Box from '../../components/Box';
import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import Input from '../../components/Input';
import Typography from '../../components/Typography';
import Wrapper from '../../components/Wrapper';

export const NormalSignupModal = () => (
  <Box width={500} height={800}>
    <Wrapper flexDirection={'row'} gap={{ rowGap: 20 }}>
      <Typography size={'lg'} color={'black'} weight={'BOLD'}>
        🌳 간편 가입하기
      </Typography>
      <Wrapper flexDirection={'column'} gap={{ rowGap: 15 }}>
        <Typography size={'lg'} color={'darkgray'}>
          인생선배를 찾는 지름길,
        </Typography>
        <Typography size={'lg'} color={'darkgray'}>
          그루터기
        </Typography>
      </Wrapper>
      <Wrapper flexDirection={'column'} gap={{ gap: 20 }}>
        <Input width={375} height={40} placeholder={'이메일'} />
        <Wrapper flexDirection={'row'} gap={{ columnGap: 1 }} justifyContent={'flex-end'}>
          <Button color={'black'} fontColor={'white'} borderColor={'none'} name={'이메일 인증'} size={'md'} />
        </Wrapper>
      </Wrapper>
      <Wrapper flexDirection={'column'} gap={{ rowGap: 20 }}>
        <Input type={'password'} width={375} height={40} placeholder={'비밀번호'}></Input>
        <Input type={'password'} width={375} height={40} placeholder={'비밀번호 확인'}></Input>
        <Wrapper flexDirection={'row'} gap={{ rowGap: 5 }}>
          <Checkbox label={'전체 동의'}></Checkbox>
          <Wrapper flexDirection={'row'} gap={{ rowGap: 10 }}>
            <Checkbox label={'서비스 이용 약관 동의 (필수)'} link={true} paddingLeft={'1rem'}></Checkbox>
            <Checkbox label={'개인정보 수집 및 이용 동의 (필수)'} link={true} paddingLeft={'1rem'}></Checkbox>
            <Checkbox label={'만 14세 이상입니다 (필수)'} paddingLeft={'1rem'}></Checkbox>
            <Checkbox label={'광고성 정보 수신 동의 (선택)'} link={true} paddingLeft={'1rem'}></Checkbox>
          </Wrapper>
        </Wrapper>
      </Wrapper>
      <Button color={'primary'} name={'회원가입하기'} fontColor={'black'} size={'lg'}></Button>
    </Wrapper>
  </Box>
);
