import React from 'react';
import { Styled } from './Alert.styled';
import Title from '@components/common/Title';
import Typography from '@components/common/Typography';
import Exit from '@components/asset/exit';
import { Rate } from 'antd';
import 'antd/dist/antd.css';

export interface AlertProps extends ReactModal.Props {
  title: string;
  content: string;
  score?: number;
  phoneNum?: string;
  isOpen: boolean;
  onRequestClose: (e?: React.MouseEvent | React.KeyboardEvent) => void;
}

const Alert: React.FC<AlertProps> = ({ title, content, score, phoneNum, isOpen, onRequestClose }) => {
  return (
    <Styled.container isOpen={isOpen} onRequestClose={onRequestClose} ariaHideApp={false}>
      <Styled.header>
        <Title size={'h1'} color={'black'}>
          {title}
        </Title>
        <span onClick={(e?: React.MouseEvent | React.KeyboardEvent) => onRequestClose(e)}>
          <Exit />
        </span>
      </Styled.header>
      {score && <Rate disabled allowHalf defaultValue={score} />}
      {phoneNum && (
        <Typography size={'xs'} color={'black'}>
          전화번호: {phoneNum}
        </Typography>
      )}
      <Typography size={'xs'} color={'black'}>
        {content}
      </Typography>
    </Styled.container>
  );
};

export default Alert;
