import React from 'react';
import { Styled } from './Alert.styled';
import Title from '@components/common/Title';
import Typography from '@components/common/Typography';
// import Exit from './icons/exit.svg';
import { Rate } from 'antd';
import 'antd/dist/antd.css';

export type AlertProps = {
  title: string;
  content: string;
  score: number;
  onclose: (e: React.MouseEvent) => void;
};

const Alert: React.FC<AlertProps> = ({ title, content, score }) => {
  console.log('Alert');
  return (
    <Styled.container>
      <Styled.header>
        <Title size={'h1'} color={'black'}>
          {title}
        </Title>
        {/* <Exit /> */}
      </Styled.header>
      <Rate disabled allowHalf defaultValue={score} />
      <Typography size={'xxs'} color={'black'}>
        {content}
      </Typography>
    </Styled.container>
  );
};

export default Alert;
