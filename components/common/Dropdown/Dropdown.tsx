import { useState } from 'react';
import { StyledSelectbox, StyledSelectedLabel, StyledOptionList, StyledOptionItem } from './Dropdown.styled';

interface DropdownProps {
  list: string[];
  zIndex?: number;
  value: string;
  onClick: (region: string) => void;
}

function Dropdown({ list, zIndex, value, onClick }: DropdownProps) {
  const [acitve, setActive] = useState(false);
  return (
    <StyledSelectbox>
      <StyledSelectedLabel value={value} onClick={() => setActive(!acitve)} />
      <StyledOptionList active={acitve} zIndex={zIndex}>
        {list.length === 0 ? (
          <StyledOptionItem onClick={() => setActive(false)}>-</StyledOptionItem>
        ) : (
          list
            .filter(element => element !== value)
            .map(element => (
              <StyledOptionItem
                key={element}
                onClick={() => {
                  setActive(false);
                  onClick(element);
                }}
              >
                {element}
              </StyledOptionItem>
            ))
        )}
      </StyledOptionList>
    </StyledSelectbox>
  );
}

export default Dropdown;
