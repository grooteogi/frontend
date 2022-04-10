import React from 'react';
import { SDropboxProps, StyledDropbox, StyledOption } from './style';

interface DropdownProps extends SDropboxProps {
  name: string;
  list: string[];
}

const Dropdown = ({ name, list }: DropdownProps) => {
  return (
    <StyledDropbox name={name}>
      {list.map(element => (
        <StyledOption key={element} value={element}>
          {element}
        </StyledOption>
      ))}
    </StyledDropbox>
  );
};

export default Dropdown;
