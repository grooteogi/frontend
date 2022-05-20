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
};
