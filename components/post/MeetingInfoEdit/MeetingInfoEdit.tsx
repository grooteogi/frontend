import Hashtag from '@components/common/Hashtag';
import Input from '@components/common/Input';
import SearchBar from '@components/common/SearchBar';
import Textarea from '@components/common/Textarea';
import Typography from '@components/common/Typography';
import Wrapper from '@components/common/Wrapper';
import React, { useEffect, useRef, useState } from 'react';
import { fetchedHashtag } from '../../../types/fetchedHashtag';
import Styled from './MeetingInfoEdit.style';

export interface MeetingInfoEditProps {
  postPicSrc: string;
  postTitle: string;
  userPicSrc: string;
  username: string;
  location: string;
  hashtags: fetchedHashtag[];
  description: string;
  liked?: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  getimg: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const MeetingInfoEdit: React.FC<MeetingInfoEditProps> = ({
  postPicSrc,
  postTitle,
  userPicSrc,
  username,
  location,
  hashtags,
  description,
  getimg,
}) => {
  const postImg = useRef<any>();
  const [isWidthBigger, setIsWidthBigger] = useState<boolean>(true);
  useEffect(() => {
    setIsWidthBigger(postImg.current.width > postImg.current.height);
  }, []);
  const [hashtagsState, setHashtagState] = useState<fetchedHashtag[]>(hashtags);
  const imgClickedHandler = () => {
    alert('우클릭');
    getimg;
  };
  const onRemove = () => {
    alert('remove');
  };
  return (
    <Styled.container>
      <Wrapper flexDirection={'column'} gap={{ rowGap: 20 }}>
        <Typography size={'lg'} color={'black'} weight={'BOLD'}>
          저는 이런 약속을 계획하고 있어요
        </Typography>
        <Wrapper flexDirection={'column'} gap={{ rowGap: 10 }}>
          <Typography size={'sm'} color={'black'} weight={'BOLD'}>
            내 약속을 설명할 수 있는 사진을 올려봐요
          </Typography>
          <Input value={postTitle}></Input>
        </Wrapper>
        <Wrapper flexDirection={'column'} gap={{ rowGap: 10 }}>
          <Typography size={'sm'} color={'black'} weight={'BOLD'}>
            내 약속의 제목을 정해봐요
          </Typography>
          <Styled.thumbnailWrappper>
            <Styled.thumbnail>
              <Styled.imgSelectBox onClick={imgClickedHandler} onContextMenu={imgClickedHandler}>
                사진 선택
              </Styled.imgSelectBox>
              <Styled.postPicWrapper>
                <Styled.postPic ref={postImg} src={postPicSrc} isWidthBigger={isWidthBigger} />
              </Styled.postPicWrapper>
            </Styled.thumbnail>
          </Styled.thumbnailWrappper>
        </Wrapper>
        <Wrapper flexDirection={'column'} gap={{ rowGap: 10 }}>
          <Typography size={'sm'} color={'black'} weight={'BOLD'}>
            내 약속을 자세히 설명해봐요
          </Typography>
          <Textarea value={description}></Textarea>
        </Wrapper>
      </Wrapper>
      <Wrapper flexDirection={'column'} gap={{ rowGap: 15 }}>
        <Typography size={'lg'} color={'black'} weight={'BOLD'}>
          저는 이런 분야에 관심이 있어요
        </Typography>
        <SearchBar hashtags={[]}></SearchBar>
        <Wrapper flexDirection={'row'} gap={{ columnGap: 20 }}>
          {hashtagsState.map(({ ...el }) => (
            <Hashtag key={el.id} fetchedTag={el} removable onRemove={onRemove}></Hashtag>
          ))}
        </Wrapper>
      </Wrapper>
    </Styled.container>
  );
};

export default MeetingInfoEdit;
