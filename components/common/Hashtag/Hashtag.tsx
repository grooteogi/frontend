import React, { useState } from 'react';
import { Styled } from './Hashtag.styled';
import Image from 'next/image';
import { HashtagEntity } from 'types/entity';

interface SharedProps {
  fetchedTag: HashtagEntity;
}
interface ClickableProps extends SharedProps {
  onClick: (hashtag: HashtagEntity, clicked: boolean) => void;
  clickable: boolean;
}

interface RemovableProps extends SharedProps {
  onRemove: (hashtag: HashtagEntity) => void;
  removable: boolean;
}

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

type HashtagProp = XOR<SharedProps, XOR<ClickableProps, RemovableProps>>;

const Hashtag: React.FC<HashtagProp> = ({ fetchedTag, clickable, removable, onClick, onRemove }) => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <Styled.container
      clickable={clickable}
      onClick={() => {
        onClick && onClick(fetchedTag, clicked);
        setClicked(!clicked);
      }}
      clicked={clicked}
    >
      #{fetchedTag.name}
      <Styled.removeButton removable={removable}>
        <Image
          src={'/logos/x_button.png'}
          alt={'not found'}
          width="8px"
          height="8px"
          quality="100"
          onClick={() => {
            onRemove && onRemove(fetchedTag);
          }}
        />
      </Styled.removeButton>
    </Styled.container>
  );
};

export default Hashtag;
