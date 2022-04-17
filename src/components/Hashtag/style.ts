import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { darken } from 'polished';
import theme from '../../../styles/theme';

interface DefaultProps {
  clicked: boolean;
  clickable?: boolean;
  removable?: boolean;
}

type ClickableProps = Omit<DefaultProps, 'removable'>;
type RemovableProps = Pick<DefaultProps, 'removable'>;

const hashtagTheme = theme.style.hashtag;

const getClickEffect = ({ clickable }: ClickableProps) => {
  if (clickable)
    return css`
      &:hover {
        background: ${darken(0.01, `${hashtagTheme.color.white}`)};
        cursor: pointer;
      }
      &:active {
        background: ${darken(0.05, `${hashtagTheme.color.white}`)};
      }
    `;
};

const getColor = ({ clickable, clicked }: ClickableProps) => {
  return clickable
    ? css`
        background-color: ${clicked ? hashtagTheme.color.white : hashtagTheme.color.bluegray};
        border: 1px solid ${clicked ? hashtagTheme.borderColor.primary : hashtagTheme.borderColor.bluegray};
      `
    : css`
        background-color: ${hashtagTheme.color.bluegray};
        border: 1px solid ${hashtagTheme.borderColor.bluegray};
      `;
};

const getRemoveButton = ({ removable }: RemovableProps) => {
  return css`
    display: ${removable ? 'inline' : 'none'};
    margin-left: 4px;
  `;
};

export const Styled = {
  container: styled.div<ClickableProps>`
    ${getColor};
    ${getClickEffect};
    color: ${hashtagTheme.fontColor.black};
    line-height: 25px;
    padding-left: 8px;
    padding-right: 8px;
    font-size: 12px;
    border-radius: 4px;
    display: inline-block;
  `,
  removeButton: styled.span<RemovableProps>`
    ${getRemoveButton};
    &:hover {
      cursor: pointer;
    }
    border-radius: 4px;
    padding: 2px;
  `,
};
