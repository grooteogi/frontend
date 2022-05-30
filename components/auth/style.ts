import styled from '@emotion/styled';

const Styled = {
  container: styled.div`
    padding: 3rem 3rem;
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
  checkboxContainer: styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 0.2rem;
    margin: 1rem 0;
  `,
};

export default Styled;
