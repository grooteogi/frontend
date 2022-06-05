import Styled from './ReservationForm.styled';
import Title from '@components/common/Title';
import Typography from '@components/common/Typography';
import { Field, Form, Formik, useFormikContext } from 'formik';
import Input from '@components/common/Input';
import Button from '@components/common/Button';
import Timer from '@components/common/Timer/Timer';
import Textarea from '@components/common/Textarea';
import { useReservationContext } from '../context';
import reservation from '@lib/api/reservation';
import { useRouter } from 'next/router';

type PhoneFormikType = {
  agree: boolean;
  phoneNumber: string;
  code: string;
  isSend: boolean;
  isVerify: boolean;
};

const PhoneVerifyForm = () => {
  const { values, setFieldValue } = useFormikContext<PhoneFormikType>();
  const { phoneNumber, code } = values;

  const handleSendMessage = async () => {
    const response = await reservation.sendMessage(phoneNumber);
    if (response.status === 200) {
      alert('메세지가 전송되었습니다!');
      setFieldValue('isSend', true);
      console.log('Success sms');
    } else console.log('Fail sms');
  };
  const handleConfirmMessage = async () => {
    const response = await reservation.confirmMessage({ phoneNumber, code });
    if (response.status === 200) {
      setFieldValue('isVerify', true);
      console.log('Success sms');
    } else console.log('Fail sms');
  };
  return (
    <>
      <Title size={'h2'} color={'black'}>
        연락받을 전화번호
      </Title>
      <Typography size={'xs'} color={'darkgray'}>
        전화번호 제공은 필수사항입니다.
      </Typography>

      <Styled.inputContainer>
        <Title size={'h4'} color={'black'}>
          휴대폰번호
        </Title>
        <Styled.innerContainer>
          <Field
            type={'text'}
            placeholder={'휴대폰 번호를 - 없이 입력해주세요.'}
            name={'phoneNumber'}
            id={'phoneNumber'}
            component={Input}
          />
          <Button
            type={'button'}
            size={'md'}
            name={'SMS 전송'}
            fontColor={'darkgray'}
            color={'white'}
            borderColor={'gray400'}
            onClick={handleSendMessage}
          />
        </Styled.innerContainer>
      </Styled.inputContainer>

      <Styled.inputContainer>
        <Title size={'h4'} color={'black'}>
          인증번호
        </Title>
        <Styled.innerContainer>
          <Field
            type={'text'}
            placeholder={'SMS로 수신된 인증번호 5자리 입력해주세요.'}
            name={'code'}
            id={'code'}
            component={Input}
          />
          <Button
            type={'button'}
            size={'md'}
            name={'인증하기'}
            fontColor={'darkgray'}
            color={'white'}
            borderColor={'gray400'}
            onClick={handleConfirmMessage}
          />
        </Styled.innerContainer>
        <Timer isStart={values.isSend} limitMin={2} fontColor={'primary'} />
      </Styled.inputContainer>
    </>
  );
};

const ReservationForm = () => {
  const router = useRouter();
  const { scheduleId, message, setMessage } = useReservationContext();

  return (
    <Formik
      initialValues={{ agree: false, phoneNumber: '', code: '', isSend: false, isVerify: false }}
      onSubmit={async values => {
        console.log('formData', values);
        const requestDate = {
          scheduleId,
          message,
        };
        const response = await reservation.createReservation(requestDate);
        if (response.status === 200) {
          alert('예약이 완료되었습니다.');
          router.back();
          console.log('reservation success');
        } else console.log('fail');
      }}
    >
      {({ values }) => (
        <Form>
          <Styled.container>
            <PhoneVerifyForm />
            <Title size={'h2'} color={'black'}>
              멘토에게 전하는 말!
            </Title>
            <Textarea
              placeholder={'하고싶은 말이 있다면 적어주세요!'}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setMessage(e.target.value);
              }}
            />
            <Styled.checkboxContainer>
              <Field type={'checkbox'} name={'agree'} id={'agree'} style={{}} />
              <Typography size={'xs'} color={'darkgray'}>
                제 3자(그루터기 나무)에게 내 전화번호를 제공하는 것을 동의합니다.
              </Typography>
            </Styled.checkboxContainer>
            <Button
              type={'submit'}
              name={'신청하기'}
              size={'lg'}
              disabled={values.agree && values.isVerify ? false : true}
              color={'primary'}
              fontColor={'white'}
            />
          </Styled.container>
        </Form>
      )}
    </Formik>
  );
};

export default ReservationForm;
