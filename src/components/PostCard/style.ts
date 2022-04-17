import styled from '@emotion/styled';
import Image from 'next/image';

export const Styled = {
  container: styled.div`
    width: 235px;
    height: 300px;
    display: flex;
    flex-direction: column;
  `,
  image: styled(Image)`
    border-radius: 8px;
    overflow: hidden;
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
