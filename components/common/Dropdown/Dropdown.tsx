import { useState } from 'react';
import { StyledSelectbox, StyledSelectedLabel, StyledOptionList, StyledOptionItem } from './Dropdown.styled';

interface DropdownProps {
  defaultString?: string;
  list: string[];
  zIndex?: number;
  active?: boolean;
  state: any;
  onClick: (region: string) => void;
}

function Dropdown({ defaultString = '지역구', list, active = false, zIndex, state, onClick }: DropdownProps) {
  const [acitve, setActive] = useState(active);
  const [selected, setSelected] = useState(defaultString);
  return (
    <StyledSelectbox>
      <StyledSelectedLabel value={state.region} onClick={() => setActive(!acitve)}>
        {state.region}
      </StyledSelectedLabel>
      <StyledOptionList active={acitve} zIndex={zIndex}>
        {list.length === 0 ? (
          <StyledOptionItem onClick={() => setActive(false)}>-</StyledOptionItem>
        ) : (
          list
            .filter(element => element !== state.region)
            .map(element => (
              <StyledOptionItem
                key={element}
                onClick={() => {
                  setActive(false);
                  // setSelected(element);
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
