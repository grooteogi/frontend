import React from 'react';
import Styled from './StickyBar.style';
import Button from '@components/common/Button';
import { usePostContext } from '../context';

interface StickyBarType {
  buttonName: string;
}

const StickyBar: React.FC<StickyBarType> = ({ buttonName }) => {
  return (
    <Styled.container>
      <Button name={buttonName} color={'primary'} fontColor={'white'} size={'lg'} type={'submit'} form="createPage" />
    </Styled.container>
  );
};

export default StickyBar;
