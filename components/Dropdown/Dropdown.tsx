import { useState } from 'react';
import { StyledSelectbox, StyledSelectedLabel, StyledOptionList, StyledOptionItem } from './Dropdown.styled';

interface DropdownProps {
  list: string[];
}

const Dropdown = ({ list }: DropdownProps) => {
  const [acitve, setActive] = useState(false);
  const [selected, setSelected] = useState('지역구');
  return (
    <StyledSelectbox>
      <StyledSelectedLabel value={selected} onClick={() => setActive(!acitve)}>
        {selected}
      </StyledSelectedLabel>
      <StyledOptionList active={acitve}>
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
};

export default Dropdown;
