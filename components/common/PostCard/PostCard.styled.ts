import styled from '@emotion/styled';
import theme from '@styles/theme';

export const Styled = {
  container: styled.div`
    width: 95%;
    ${theme.responsive.pc} {
      max-width: 230px;
    }
    ${theme.responsive.tablet} {
      max-width: 230px;
    }
    ${theme.responsive.mobile} {
      max-width: 180px;
    }
    height: 100%;
    display: flex;
    flex-direction: column;
    &:hover {
      cursor: pointer;
    }
  `,
  image: styled.div`
    width: 100%;
    ${theme.responsive.pc} {
      height: 200px;
    }
    ${theme.responsive.tablet} {
      height: 200px;
    }
    ${theme.responsive.mobile} {
      height: 150px;
    }
  `,
  hashRef: styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 12px;
    column-gap: 6px;
  `,
  title: styled.section`
    max-width: 90%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `,
  content: styled.section`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  `,
};
