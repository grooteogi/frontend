import React from 'react';
import Button from '@components/common/Button';
import Input from '@components/common/Input';
import Typography from '@components/common/Typography';
import { Field, Form, useFormikContext } from 'formik';
import { Styled } from './PasswordModal.styled';
import user from '@lib/api/user';

interface PasswordFormilValues {
  currentPassword: string;
  newPassword: string;
  passwordConfirm: string;
}

const formData = {
  '현재 비밀번호': 'currentPassword',
  '새로운 비밀번호': 'newPassword',
  '비밀번호 확인': 'passwordConfirm',
};

const PasswordForm = () => {
  const { values, errors, handleSubmit } = useFormikContext<PasswordFormilValues>();
  const { currentPassword, newPassword } = values;
  const handlePasswordClick = async () => {
    handleSubmit();
    const response = await user.modifyPassword({ currentPassword, newPassword });
    if (response.status === 200) alert('패스워드 변경 성공');
    else alert(response.message);
  };
  return (
    <Form>
      {Object.entries(formData).map(([key, value]) => (
        <Styled.content key={key}>
          <Typography size={'xxs'} color={'gray500'}>
            {key}
          </Typography>
          <Field
            type={'password'}
            placeholder={key}
            name={value}
            id={value}
            fontColor={value && !errors[value as keyof PasswordFormilValues] ? 'black' : 'darkgray'}
            borderColor={value && !errors[value as keyof PasswordFormilValues] ? 'primary' : 'gray200'}
            component={Input}
          />
          {errors[value as keyof PasswordFormilValues] && (
            <Typography size={'xxs'} weight={'regular'} color={'danger'} align={'right'}>
              {errors[value as keyof PasswordFormilValues] as string}
            </Typography>
          )}
        </Styled.content>
      ))}
      <Styled.button>
        <Button
          name="변경하기"
          color={'primary'}
          fontColor={'white'}
          size={'sm'}
          style={{ flexGrow: 1 }}
          type={'submit'}
          onClick={handlePasswordClick}
          disabled={errors.newPassword || errors.passwordConfirm ? true : false}
        />
      </Styled.button>
    </Form>
  );
};
export default PasswordForm;
