import styled from '@emotion/styled';

export const Styled = {
  container: styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    width: 100%;
  `,
  profileImg: styled.img`
    width: 47px;
    height: 47px;
    border-radius: 50%;
    object-fit: none;
  `,
  hr: styled.hr`
    color: gray;
    width: 100%;
    margin-top: 25px;
  `,
};

export default Styled;
