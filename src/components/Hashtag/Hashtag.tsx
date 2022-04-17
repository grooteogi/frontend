import React, { useState } from 'react';
import { Styled } from './style';
import Image from 'next/image';

interface SharedProps {
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

const Hashtag: React.FC<HashtagProp> = ({ content, clickable, removable, onClick, onRemove }) => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <Styled.container
      clickable={clickable}
      onClick={(e: React.MouseEvent) => {
        onClick && onClick(e);
        setClicked(!clicked);
      }}
      clicked={clicked}
    >
      {content}
      <Styled.removeButton removable={removable}>
        <Image
          src={'/logos/x_button.png'}
          alt={'not found'}
          width="8px"
          height="8px"
          quality="100"
          onClick={onRemove}
        />
      </Styled.removeButton>
    </Styled.container>
  );
};

export default Hashtag;
