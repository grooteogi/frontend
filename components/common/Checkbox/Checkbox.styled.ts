import styled from '@emotion/styled';
import theme from '@styles/theme';

export interface SCheckboxComponentBox {
  width?: string;
  height?: string;
  paddingLeft?: string;
}
export interface SCheckboxComponentText {
  link?: boolean;
}

const getCheckboxBox = ({ ...box }) => {
  return `
    display: flex;
    flex-basis: auto;
    align-items: center;
    width: ${box.width};
    height: ${box.height};
    padding: 0.4rem;
    padding-left : ${box.paddingLeft};
  `;
};
const getCheckboxText = ({ link }: SCheckboxComponentText) => {
  const isFloatRight = () => (link ? 'margin-left: auto;' : '');
  return `
      ${isFloatRight}
      font-size: ${theme.fontSize.xs};
      color: ${theme.color.darkgray};
  `;
};

export const StyledCheckbox = styled.div<SCheckboxComponentBox>`
  ${getCheckboxBox}
`;
export const EmptyDiv = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledCheckboxInput = styled.input`
  width: 16px;
  height: 16px;
  border-radius: ${theme.borderRadius.sm};
  border-color: ${theme.color.darkgray};
  accent-color: ${theme.color.darkgray};
`;
export const StyledCheckboxText = styled.div`
  padding-left: 0.5rem;
  font-size: 0.875rem;
  color: ${theme.color.darkgray};
`;
export const StyledCheckboxDetail = styled.div<SCheckboxComponentText>`
  margin-left: auto;
  ${getCheckboxText};
`;
