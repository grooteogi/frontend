import styled from '@emotion/styled';
import theme from '@styles/theme';

const Styled = {
  container: styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    gap: 20px;
    padding: 30px 0px;
    ${theme.responsive.mobile} {
      padding: 15px 15px;
    }
  `,
};

export default Styled;
