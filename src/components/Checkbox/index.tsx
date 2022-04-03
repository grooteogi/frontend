import {
  EmptyDiv,
  SCheckboxComponentBox,
  SCheckboxComponentInput,
  SCheckboxComponentText,
  StyledCheckbox,
  StyledCheckboxDetail,
  StyledCheckboxInput,
  StyledCheckboxText,
} from './style';

interface CheckBoxProps {
  label: string;
  link?: boolean;
  box: SCheckboxComponentBox;
  input: SCheckboxComponentInput;
  text: SCheckboxComponentText;
}

const CheckboxComponents = {
  Box(box: SCheckboxComponentBox) {
    return <StyledCheckbox {...box}></StyledCheckbox>;
  },
  Input(input: SCheckboxComponentInput) {
    return <StyledCheckboxInput type="checkbox" {...input} />;
  },
  Text(text: SCheckboxComponentText) {
    return <StyledCheckboxText {...text}></StyledCheckboxText>;
  },
  Detail(text: SCheckboxComponentText) {
    return <StyledCheckboxDetail {...text}></StyledCheckboxDetail>;
  },
};

const Checkbox = ({ label, link, box, input, text }: CheckBoxProps) => {
  return (
    <CheckboxComponents.Box {...box}>
      <EmptyDiv>
        <CheckboxComponents.Input {...input} />
        <CheckboxComponents.Text {...text}>{label}</CheckboxComponents.Text>
      </EmptyDiv>
      {link && <CheckboxComponents.Detail {...text}>보기</CheckboxComponents.Detail>}
    </CheckboxComponents.Box>
  );
};

export default Checkbox;
