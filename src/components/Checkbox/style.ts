import styled from '@emotion/styled';

export interface SCheckboxComponentBox {
  width: number;
  height: number;
  padding: string;
  backgroundColor: string;
}
export interface SCheckboxComponentInput {
  backgroundColor: string;
}
export interface SCheckboxComponentText {
  fontSize: number;
  fontColor: string;
}

const getCheckboxBox = ({ ...box }) => {
  return `
    width: ${box.width}px;
    height: ${box.height}px;
    padding: ${box.padding};
    background-color: ${box.backgroundColor};
  `;
};
const getCheckboxInput = ({ ...input }) => {
  return `
    accent-color: ${input.backgroundColor};
  `;
};
const getCheckboxText = ({ link = false, ...text }) => {
  const isFloatRight = () => (link ? 'margin-left: auto;' : '');
  return `
      ${isFloatRight}
      font-size: ${text.fontSize}px;
      color: ${text.fontColor};
  `;
};

export const StyledCheckbox = styled.div<SCheckboxComponentBox>`
  display: flex;
  flex-basis: auto;
  align-items: center;
  ${getCheckboxBox}
`;
export const EmptyDiv = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledCheckboxInput = styled.input<SCheckboxComponentInput>`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  ${getCheckboxInput};
`;
export const StyledCheckboxText = styled.div<SCheckboxComponentText>`
  padding-left: 1rem;
  ${getCheckboxText};
`;
export const StyledCheckboxDetail = styled.div<SCheckboxComponentText>`
  margin-left: auto;
  ${getCheckboxText};
`;
