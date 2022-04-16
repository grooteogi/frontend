import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import SearchButton from '../../components/SearchButton';
import { StyledImage } from './style';

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

interface SearchMenuProps {
  items?: string[];
}

const SearchMenu = ({ ...props }: SearchMenuProps) => {
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  const isItemSelected = (id: any) => !!selected.find(el => el === id);

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {items.map(({ id }) => {
        return <SearchButton key={id} content={id} />;
      })}
    </ScrollMenu>
  );
};

function LeftArrow() {
  const { initComplete, isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext);
  return (
    <button
      disabled={!initComplete || (initComplete && isFirstItemVisible)}
      style={{ opacity: isFirstItemVisible ? '0' : '1' }}
      onClick={() => scrollPrev}
    >
      <img src="/logos/left.png"></img>
    </button>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
  return (
    <button disabled={isLastItemVisible} onClick={() => scrollNext}>
      {/* <img src="/logos/right.png" /> */}
    </button>
  );
}

export default SearchMenu;
