import React, { useState } from 'react';
import { Styled } from './Hashtag.styled';
import Image from 'next/image';
import { XOR } from 'types/common';

interface SharedProps {
  hashtag: string;
}
interface ClickableProps extends SharedProps {
  onClick: (hashtag: string, clicked: boolean) => void;
  clickable: boolean;
}

interface RemovableProps extends SharedProps {
  onRemove: (hashtag: string) => void;
  removable: boolean;
}

type HashtagProp = XOR<SharedProps, XOR<ClickableProps, RemovableProps>>;

const Hashtag: React.FC<HashtagProp> = ({ hashtag, clickable, removable, onClick, onRemove }) => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <Styled.container
      clickable={clickable}
      onClick={() => {
        onClick && onClick(hashtag, clicked);
        setClicked(!clicked);
      }}
      clicked={clicked}
    >
      #{hashtag}
      <Styled.removeButton removable={removable}>
        <Image
          src={'/logos/x_button.png'}
          alt={'not found'}
          width="8px"
          height="8px"
          quality="100"
          onClick={() => {
            onRemove && onRemove(hashtag);
          }}
        />
      </Styled.removeButton>
    </Styled.container>
  );
};

export default Hashtag;
