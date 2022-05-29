import styled from '@emotion/styled';
import theme from '@styles/theme';

export interface SListProps {
  children: JSX.Element;
}

export const Styled = {
  container: styled.div`
    width: 100%;
    height: auto;
    background: ${theme.color.white};
    border-radius: ${theme.borderRadius.md};
    border: 1px solid ${theme.color.gray200};
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
  hashtagBox: styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 10px;
  `,
  input: styled.input`
    width: auto;
    flex-grow: 1;
    height: 25px;
    padding: 4px;
    font-size: 0.875rem;
  `,
};
