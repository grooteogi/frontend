import styled from '@emotion/styled';
import theme from '../../../styles/theme';

export interface SDropboxProps {
  isLogo?: boolean;
}

const dropboxTheme = theme.style.dropbox;
export const StyledDropbox = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  & ::-ms-expand {
    display: none;
  }
  background: url('/icon/dropdown_check_icon.png') no-repeat 95% 50%;
  font-weight: ${dropboxTheme.weight};
  font-size: 1rem;
  border-radius: 0px;
  text-align: right;
  padding: '.5rem 1rem';
  border: none;
`;
export const StyledOption = styled.option`
  padding: 3px 0;
`;
