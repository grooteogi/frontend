import { useState } from 'react';
import { StyledSelectbox, StyledSelectedLabel, StyledOptionList, StyledOptionItem } from './Dropdown.styled';

interface DropdownProps {
  defaultString?: string;
  list: string[];
  zIndex?: number;
  active?: boolean;
  value: string;
  onClick: (region: string) => void;
}

function Dropdown({ defaultString = '지역구', list, active = false, zIndex, value, onClick }: DropdownProps) {
  const [acitve, setActive] = useState(active);
  return (
    <StyledSelectbox>
      <StyledSelectedLabel value={value} onClick={() => setActive(!acitve)}>
        {value}
      </StyledSelectedLabel>
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
