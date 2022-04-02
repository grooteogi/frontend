import React from 'react';
import { StyledButton, StyledRemoveBtn } from './style';

interface NormalProps {
  content: string;
}
interface clickableProps extends NormalProps {
  clickable: boolean;
}

interface removableProps extends NormalProps {
  removable: boolean;
}

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

type HashtagProp = XOR<NormalProps, XOR<clickableProps, removableProps>>;

const Hashtag = ({ content, clickable, removable }: HashtagProp) => {
  return (
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    <StyledButton clickable={clickable} onClick={() => {}}>
      {content}
      {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
      <StyledRemoveBtn removable={removable} onClick={() => {}}>
        {' X'}
      </StyledRemoveBtn>
    </StyledButton>
  );
};

export default Hashtag;
