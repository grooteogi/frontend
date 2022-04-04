import React, { useState } from 'react';
import { StyledButton, StyledRemoveBtn } from './style';
import Image from 'next/image';

interface SharedProps {
  size: 'sm' | 'md' | 'lg';
  content: string;
}
interface ClickableProps extends SharedProps {
  onClick?: (e: React.MouseEvent) => void;
  clickable: boolean;
}

interface RemovableProps extends SharedProps {
  onRemove?: (e: React.MouseEvent) => void;
  removable: boolean;
}

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

type HashtagProp = XOR<SharedProps, XOR<ClickableProps, RemovableProps>>;

const Hashtag = ({ content, clickable, removable, size, onClick, onRemove }: HashtagProp) => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <StyledButton
      clickable={clickable}
      onClick={() => {
        setClicked(clicked => !clicked);
        onClick;
      }}
      size={size}
      clicked={clicked}
    >
      {content}
      <StyledRemoveBtn removable={removable}>
        <Image
          src={'/logos/x_button.png'}
          alt={'not found'}
          width="12px"
          height="12px"
          quality="100"
          onClick={onRemove}
        />
      </StyledRemoveBtn>
    </StyledButton>
  );
};

export default Hashtag;
