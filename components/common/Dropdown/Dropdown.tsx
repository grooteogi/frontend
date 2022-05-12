import { useState } from 'react';
import { StyledSelectbox, StyledSelectedLabel, StyledOptionList, StyledOptionItem } from './Dropdown.styled';

interface DropdownProps {
  defaultString?: string;
  list: string[];
  zIndex?: number;
  active?: boolean;
}

function Dropdown({ defaultString = '지역구', list, active = false, zIndex }: DropdownProps) {
  const [acitve, setActive] = useState(active);
  const [selected, setSelected] = useState(defaultString);
  return (
    <StyledSelectbox>
      <StyledSelectedLabel value={selected} onClick={() => setActive(!acitve)}>
        {selected}
      </StyledSelectedLabel>
      <StyledOptionList active={acitve} zIndex={zIndex}>
        {list.length === 0 ? (
          <StyledOptionItem onClick={() => setActive(false)}>-</StyledOptionItem>
        ) : (
          list
            .filter(element => element !== selected)
            .map(element => (
              <StyledOptionItem
                key={element}
                onClick={() => {
                  setActive(false);
                  setSelected(element);
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
