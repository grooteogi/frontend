import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { darken } from 'polished';
import theme from '../../../styles/theme';

interface DefaultProps {
  clickable?: boolean;
  clicked: boolean;
  removable?: boolean;
}

type SClickableProps = Omit<DefaultProps, 'removable'>;
type SRemovableProps = Pick<DefaultProps, 'removable'>;

const hashtagTheme = theme.style.hashtag;

const getClickEffect = ({ clickable }: SClickableProps) => {
  if (clickable)
    return css`
      &:hover {
        background: ${darken(0.01, `${hashtagTheme.color.white}`)};
        cursor: pointer;
      }
      &:active {
        background: ${darken(0.05, `${hashtagTheme.color.white}`)};
        cursor: pointer;
      }
    `;
};

const getColor = ({ clickable, clicked }: SClickableProps) => {
  if (clickable) {
    return css`
      background-color: ${clicked ? hashtagTheme.color.white : hashtagTheme.color.lightgray};
      border: 1px solid ${clicked ? hashtagTheme.borderColor.primary : hashtagTheme.borderColor.lightgray};
    `;
  } else {
    return css`
      background-color: ${hashtagTheme.color.lightgray};
      border: 1px solid ${hashtagTheme.borderColor.lightgray};
    `;
  }
};

export const StyledButton = styled.div<SClickableProps>`
  ${getColor};
  ${getClickEffect};
  color: ${hashtagTheme.fontColor.black};
  line-height: 25px;
  padding-left: 8px;
  padding-right: 8px;
  font-size: 12px;
  border-radius: 4px;
  display: inline-block;
`;

const getRemoveButton = ({ removable }: SRemovableProps) => {
  return css`
    display: ${removable ? 'inline' : 'none'};
    margin-left: 4px;
  `;
};

export const StyledRemoveBtn = styled.span<SRemovableProps>`
  ${getRemoveButton};
  &:hover {
    cursor: pointer;
  }
  border-radius: 4px;
  padding: 2px;
`;
