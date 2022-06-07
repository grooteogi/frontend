import Exit from '@components/asset/exit';
import Title from '@components/common/Title';
import { validPassword } from '@lib/validator';
import { Formik, FormikErrors } from 'formik';
import React from 'react';
import Modal from 'react-modal';
import PasswordForm from './PasswordForm';
import { Styled } from './PasswordModal.styled';

interface PasswordModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const customStyles: Modal.Styles = {
  overlay: { backgroundColor: 'rgba(0, 0, 0, 0)' },
  content: {
    width: '450px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const PasswordModal: React.FC<PasswordModalProps> = ({ open, setOpen }) => {
  return (
    <Modal
      ariaHideApp={false}
      isOpen={open}
      style={customStyles}
      onRequestClose={() => {
        setOpen(false);
      }}
    >
      <Styled.container>
        <Styled.title>
          <Title size={'h2'} color={'deepdarkgray'}>
            비밀번호 변경하기
          </Title>
          <span
            onClick={() => {
              setOpen(false);
            }}
          >
            <Exit />
          </span>
        </Styled.title>
        <Formik
          initialValues={{ currentPassword: '', newPassword: '', passwordConfirm: '' }}
          validate={values => {
            const errors: FormikErrors<{ newPassword: string; passwordConfirm: string }> = {
              newPassword: '',
              passwordConfirm: '',
            };

            if (!values.newPassword || !validPassword(values.newPassword))
              errors.newPassword = '유효하지 않은 비밀번호입니다.';
            if (!values.passwordConfirm || values.newPassword !== values.passwordConfirm)
              errors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
            return errors;
          }}
          onSubmit={values => {
            console.log('handle formData', values);
          }}
        >
          <PasswordForm setOpen={setOpen} />
        </Formik>
      </Styled.container>
    </Modal>
  );
};
export default PasswordModal;
