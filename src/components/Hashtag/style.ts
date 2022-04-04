import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { darken } from 'polished';
import theme from '../../../styles/theme';

interface DefaultProps {
  size: 'sm' | 'md' | 'lg';
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

const getSize = ({ size }: SClickableProps) => {
  const sizes = hashtagTheme.sizes;
  return css`
    font-size: ${sizes[size].fontSize};
    padding: ${sizes[size].padding};
  `;
};

const getColor = ({ clickable, clicked }: SClickableProps) => {
  if (clickable) {
    return css`
      background-color: ${clicked ? hashtagTheme.color.lightgray : hashtagTheme.color.white};
      border: 1px solid ${clicked ? hashtagTheme.borderColor.lightgray : hashtagTheme.borderColor.primary};
    `;
  } else {
    return css`
      background-color: ${hashtagTheme.color.lightgray};
      border: 1px solid ${hashtagTheme.borderColor.lightgray};
    `;
  }
};

export const StyledButton = styled.div<SClickableProps>`
  ${getSize};
  ${getColor};
  ${getClickEffect};
  color: ${hashtagTheme.fontColor.black};
  font-size: 1rem;
  border-radius: 4px;
  padding: 8px 12px;
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
    background: ${darken(0.5, `${hashtagTheme.color.lightgray}`)};
    cursor: pointer;
  }
  border-radius: 4px;
  padding: 2px;
`;
