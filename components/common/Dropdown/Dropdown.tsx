import { useState } from 'react';
import Styled from './Dropdown.styled';

interface DropdownProps {
  list: string[];
  zIndex?: number;
  value: string;
  onClick: (region: string) => void;
}

function Dropdown({ list, zIndex, value, onClick }: DropdownProps) {
  const [active, setActive] = useState(false);
  return (
    <Styled.selectbox>
      <Styled.selectedLabel value={value} onClick={() => setActive(!active)} type={'button'}>
        {value}
      </Styled.selectedLabel>
      <Styled.selectOptionList active={active} zIndex={zIndex}>
        {list.length === 0 ? (
          <Styled.optionItem onClick={() => setActive(false)}>-</Styled.optionItem>
        ) : (
          list
            .filter(element => element !== value)
            .map(element => (
              <Styled.optionItem
                key={element}
                onClick={() => {
                  setActive(false);
                  onClick(element);
                }}
              >
                {element}
              </Styled.optionItem>
            ))
        )}
      </Styled.selectOptionList>
    </Styled.selectbox>
  );
}

export default Dropdown;
