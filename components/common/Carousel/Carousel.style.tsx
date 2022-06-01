import styled from '@emotion/styled';
import { Carousel } from 'antd';

export const Styled = {
  carousel: styled(Carousel)``,
  item: styled.img`
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    height: 30vh;
    object-fit: none;
  `,
};

export default Styled;
