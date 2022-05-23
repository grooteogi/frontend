import styled from '@emotion/styled';
import theme from '@styles/theme';
const searchTheme = theme.style.searchBar;

export interface SListProps {
  children: JSX.Element;
}

export const Styled = {
  container: styled.div`
    width: 100%;
    max-width: 600px;
    height: auto;
    background: ${searchTheme.backgroundColor.white};
    border-radius: 8px;
    border: 1px solid ${searchTheme.borderColor.lightgray};
    @media (min-width: 1060px) {
      width: 600px;
    }
    @media (min-width: 768px) and (max-width: 1059px) {
      width: 450px;
    }
    @media (max-width: 767px) {
      width: 390px;
    }
  `,
  section: styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    border-radius: inherit;
    max-width: 100%;
    min-width: 300px;
    width: 100%;
    height: 40px;
    padding: 8px;
    background: inherit;
  `,
  input: styled.input`
    width: auto;
    flex-grow: 1;
    height: 25px;
    padding: 4px;
    fontsize: 0.875rem;
  `,
  ul: styled.ul`
    position: absolute;
    z-index: 2;
    width: 100%;
    max-width: 600px;
    padding-bottom: 4px;
    background-color: inherit;
    border-radius: inherit;
    border: inherit;
  `,
  li: styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 8px;
    width: 100%;
    font-size: 0.75rem;
    font-weight: bold;
    &:hover {
      background-color: #edf5f5;
      cursor: pointer;
    }
  `,
};
