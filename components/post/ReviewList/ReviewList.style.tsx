import Typography from '@components/common/Typography';
import styled from '@emotion/styled';

export const Styled = {
  container: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,
  itemBox: styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  `,
  reviewItem: styled.div`
    display: flex;
    flex-direction: column;
  `,
  profileImg: styled.img`
    width: 47px;
    height: 47px;
    border-radius: 50%;
    object-fit: none;
  `,
  reviewInfoHeader: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  reviewInfoHeaderLeft: styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
  `,
  reviewInfo: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 47px;
  `,
  reviewInfoHeaderRight: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
  `,
  title: styled(Typography)`
    font-size: 1.2rem;
    font-weight: 600;
  `,
  hr: styled.hr`
    color: gray;
    width: 100%;
    margin-top: 15px;
    margin-bottom: 15px;
  `,
  contentTextBox: styled.div`
    display: flex;
    flex-direction: column;
    margin: 14px 0;
  `,
};

export default Styled;
