import styled from '@emotion/styled';

export interface SDropboxProps {
  isLogo?: boolean;
}

export const StyledDropbox = styled.select`
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  & ::-ms-expand {
    display: none;
  }
  width: 8rem;
  height: 2.5rem;
  background: url('/icons/expand_more.png') calc(100% - 5px) center no-repeat;
  background-size: 20px;
  padding: 5px 30px 5px 10px;
  border-color: transparent;
  border-radius: 8px;
  outline: none;
  padding-left: 1rem;
  font-size: 1rem;
`;
export const StyledOption = styled.option`
  padding: 1rem 0;
  text-align: right;
  border-color: transparent;
`;
