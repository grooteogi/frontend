import React from 'react';
import { SDropboxProps, StyledDropbox } from './style';

interface DropdownProps extends SDropboxProps {
  name: string;
  list: string[];
}

const Dropdown = ({ name, list }: DropdownProps) => {
  return (
    <StyledDropbox name={name}>
      {list.map(element => (
        <option key={element} value={element}>
          {element}
        </option>
      ))}
    </StyledDropbox>
  );
};

export default Dropdown;
