import styled from '@emotion/styled';

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
      font-size: 0.875rem;
      color: #4E4E4E;
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
  border-radius: 4px;
  accent-color: #4e4e4e;
`;
export const StyledCheckboxText = styled.div<SCheckboxComponentText>`
  padding-left: 1rem;
  font-size: 0.875rem;
  color: #4e4e4e;
`;
export const StyledCheckboxDetail = styled.div<SCheckboxComponentText>`
  margin-left: auto;
  ${getCheckboxText};
`;
