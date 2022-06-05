import styled from '@emotion/styled';
import theme from '@styles/theme';

export interface SListProps {
  children: JSX.Element;
}

export const Styled = {
  container: styled.div`
    height: auto;
    background: ${theme.color.white};
    border-radius: ${theme.borderRadius.md};
    border: 1px solid ${theme.color.gray200};
    ${theme.responsive.pc} {
      width: 600px;
    }
    ${theme.responsive.tablet} {
      width: 450px;
    }
    ${theme.responsive.mobile} {
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
    font-size: ${theme.fontSize.xs};
  `,
  ul: styled.ul`
    position: absolute;
    z-index: 2;
    width: inherit;
    max-width: inherit;
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
    font-size: ${theme.fontSize.xxs};
    font-weight: ${theme.weight.bold};
    &:hover {
      background-color: #edf5f5;
      cursor: pointer;
    }
  `,
};
