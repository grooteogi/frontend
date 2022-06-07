import React from 'react';
import Styled from './StickyBar.style';
import Button from '@components/common/Button';

interface StickyBarType {
  buttonName: string;
  onClick?: () => void;
}

const StickyBar: React.FC<StickyBarType> = ({ buttonName, onClick }) => {
  return (
    <Styled.container>
      <Button
        name={buttonName}
        onClick={onClick}
        color={'primary'}
        fontColor={'white'}
        size={'lg'}
        type={'submit'}
        form="createPage"
      />
    </Styled.container>
  );
};

export default StickyBar;
