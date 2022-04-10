import { useState } from 'react';
import { StyledSelectbox, StyledSelectedLabel, StyledOptionList, StyledOptionItem } from './style';

interface DropdownProps {
  list: string[];
}

const Dropdown = ({ list }: DropdownProps) => {
  const [acitve, setActive] = useState(true);
  const [selected, setSelected] = useState(list[0]);
  return (
    <StyledSelectbox>
      <StyledSelectedLabel value={selected} onClick={() => setActive(!acitve)}>
        {selected}
      </StyledSelectedLabel>
      <StyledOptionList active={acitve}>
        {list
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
          ))}
      </StyledOptionList>
    </StyledSelectbox>
  );
};

export default Dropdown;
