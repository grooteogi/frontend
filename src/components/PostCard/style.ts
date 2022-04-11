import styled from '@emotion/styled';
import theme from '../../../styles/theme';

export const Container = styled.div`
  width: 235px;
  height: 300px;
  border: 1px solid ${theme.style.lightgrey};
  background: ${theme.style.white};
  display: flex;
  flex-direction: column;
`;
export const ImageDiv = styled.div`
  border-radius: 8px;
  overflow: hidden;
`;

export const TitleDiv = styled.div`
  max-width: 90%;
  padding-left: 4px;
  padding-right: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
`;

export const ContentDiv = styled.div`
  padding-left: 4px;
  padding-right: 4px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
