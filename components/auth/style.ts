import styled from '@emotion/styled';
import theme from '@styles/theme';

const Styled = {
  box: styled.div`
    border: 1px solid ${theme.color.gray200};
    border-radius: 12px;
    background: ${theme.color.white};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: auto;
    width: 450px;
    ${theme.responsive.mobile} {
      width: 100%;
      border: 0px;
    }
  `,
  container: styled.div`
    padding: 3rem 3rem;
    ${theme.responsive.mobile} {
      padding: 3rem 1.5rem;
    }
  `,
  descriptionContainer: styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    margin: 1rem auto;
  `,
  buttonContainer: styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    margin-top: 2rem;
  `,
  formContainer: styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    margin-top: 2rem;
  `,
  labelContainer: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 0.5rem;
  `,
  inputContainer: styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    margin-top: 2rem;
  `,
  emailContainer: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  confirmContainer: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 10px;
    align-items: start;
  `,
  emailbuttonContainer: styled.span`
    display: flex;
    justify-content: flex-end;
    column-gap: 0.5rem;
  `,
  checkboxContainer: styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 0.2rem;
    margin: 1rem 0;
  `,
};

export default Styled;
