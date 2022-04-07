import Link from '../components/Link';
import Box from '../components/Box';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import Input from '../components/Input';
import Typography from '../components/Typography';
import Wrapper from '../components/Wrapper';

export const NormalSignInModal = () => {
  return (
    <Box width={500} height={550}>
      <Wrapper flexDirection={'row'} rowInterval={20}>
        <Typography size={'lg'} color={'black'} weight={'BOLD'}>
          🌳 간편 가입하기
        </Typography>
        <Wrapper flexDirection={'column'} rowInterval={15}>
          <Typography size={'lg'} color={'darkgray'}>
            인생선배를 찾는 지름길,
          </Typography>
          <Typography size={'lg'} color={'darkgray'}>
            그루터기
          </Typography>
        </Wrapper>
      </Wrapper>
      <Wrapper flexDirection={'column'} rowInterval={20}>
        <Input width={375} height={40} placeholder={'이메일'}></Input>
        <Input width={375} height={40} placeholder={'비밀번호'}></Input>
        <Checkbox label={'로그인 유지'}></Checkbox>
        <Button color={'primary'} fontColor={'black'} borderColor={'none'} name={'로그인'} size={'lg'} />
      </Wrapper>
      <Wrapper flexDirection={'row'} columnInterval={1} justifyContent={'center'}>
        <Typography size={'xs'} color={'black'} align={'center'}>
          아직 회원이 아니신가요?
        </Typography>
        <Link href={''} size={'xs'} color={'primary'} weight={'REGULAR'}>
          회원가입하기
        </Link>
      </Wrapper>
    </Box>
  );
};
