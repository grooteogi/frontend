import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { darken } from 'polished';
import theme from '@styles/theme';

interface DefaultProps {
  clickable?: boolean;
  clicked: boolean;
  removable?: boolean;
}

type ClickableProps = Omit<DefaultProps, 'removable'>;
type RemovableProps = Pick<DefaultProps, 'removable'>;

const getClickEffect = ({ clickable }: ClickableProps) => {
  if (clickable)
    return css`
      &:hover {
        background: ${darken(0.01, `${theme.color.white}`)};
        cursor: pointer;
      }
      &:active {
        background: ${darken(0.05, `${theme.color.white}`)};
        cursor: pointer;
      }
    `;
};

const getColor = ({ clickable, clicked }: ClickableProps) => {
  if (clickable) {
    return css`
      background-color: ${clicked ? theme.color.white : theme.color.gray100};
      border: 1px solid ${clicked ? theme.color.primary : theme.color.gray100};
    `;
  } else {
    return css`
      background-color: ${theme.color.gray100};
      border: 1px solid ${theme.color.gray100};
    `;
  }
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
    color: ${theme.color.black};
    line-height: 25px;
    padding-left: 8px;
    padding-right: 8px;
    font-size: 12px;
    border-radius: ${theme.borderRadius.sm};
    display: inline-block;
  `,
  removeButton: styled.span<RemovableProps>`
    ${getRemoveButton};
    &:hover {
      cursor: pointer;
    }
    border-radius: ${theme.borderRadius.sm};
    padding: 2px;
  `,
};
