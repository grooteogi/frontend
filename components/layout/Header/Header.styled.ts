import styled from '@emotion/styled';
import theme from '@styles/theme';
import { motion } from 'framer-motion';

const Styled = {
  header: styled(motion.header)`
    width: 100%;

    display: flex;
    align-items: center;

    position: sticky;
    top: 0;
    z-index: 999;

    background-color: ${theme.color.white};
  `,
  container: styled(motion.div)`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto 0;
    @media (min-width: 1060px) {
      width: 1060px;
    }
    @media (min-width: 768px) and (max-width: 1059px) {
      width: 767px;
    }
    @media (max-width: 767px) {
      width: 390px;
    }
  `,
  menuContainer: styled(motion.div)`
    display: flex;
    column-gap: 1.5rem;
  `,
};

export default Styled;
