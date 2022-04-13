import styled from '@emotion/styled';
import Image from 'next/image';

export const Container = styled.div`
  width: 235px;
  height: 300px;
  display: flex;
  flex-direction: column;
`;

export const StyledImage = styled(Image)`
  border-radius: 8px;
  overflow: hidden;
`;

export const TitleWrapper = styled.div`
  max-width: 90%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const ContentWrapper = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
