import Hashtag from '@components/common/Hashtag';
import Input from '@components/common/Input';
import Textarea from '@components/common/Textarea';
import Typography from '@components/common/Typography';
import Wrapper from '@components/common/Wrapper';
import SearchBar from '@components/search/SearchBar';
import React, { useEffect, useRef, useState } from 'react';
import { MeetingInfoType } from 'types/postDetail';
import Styled from './MeetingInfoEdit.style';

export type MeetingInfoEditProps = Partial<Pick<MeetingInfoType, 'title' | 'content' | 'imageUrl' | 'hashtags'>>;

const MeetingInfoEdit: React.FC<MeetingInfoEditProps> = ({ title, content, imageUrl, hashtags = [] }) => {
  const [editImageUrl, setEditImageUrl] = useState(imageUrl);
  const previewImageRef = useRef<any>();
  const [isWidthBigger, setIsWidthBigger] = useState<boolean>(true);
  useEffect(() => {
    setIsWidthBigger(previewImageRef.current.width > previewImageRef.current.height);
  }, []);
  const onChangeHandler = (fileInput: HTMLInputElement) => {
    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();
      reader.onload = e => {
        previewImageRef.current.src = e.target?.result;
        setEditImageUrl(previewImageRef.current.src);
      };
      reader.readAsDataURL(fileInput.files[0]);
    }
  };
  const onRemove = ({ target }: any) => {
    alert(target);
  };
  return (
    <Styled.container>
      <Wrapper flexDirection={'column'} gap={{ rowGap: 20 }}>
        <Typography size={'lg'} color={'black'} weight={'BOLD'}>
          저는 이런 약속을 계획하고 있어요
        </Typography>
        <Wrapper flexDirection={'column'} gap={{ rowGap: 10 }}>
          <Typography size={'md'} color={'black'} weight={'BOLD'}>
            내 약속의 제목을 정해봐요
          </Typography>
          <Input value={title} />
        </Wrapper>
        <Wrapper flexDirection={'column'} gap={{ rowGap: 10 }}>
          <Typography size={'md'} color={'black'} weight={'BOLD'}>
            내 약속을 설명할 수 있는 사진을 올려봐요
          </Typography>
          <Styled.thumbnailWrappper>
            <Styled.thumbnail>
              <input type={'file'} id={'fileReader'} onChange={e => onChangeHandler(e.target)} hidden />
              <Styled.imgSelectBox htmlFor={'fileReader'}>사진 선택</Styled.imgSelectBox>
              <Styled.postPicWrapper>
                <Styled.postPic ref={previewImageRef} src={editImageUrl} isWidthBigger={isWidthBigger} />
              </Styled.postPicWrapper>
            </Styled.thumbnail>
          </Styled.thumbnailWrappper>
        </Wrapper>
        <Wrapper flexDirection={'column'} gap={{ rowGap: 10 }}>
          <Styled.content size={'md'} color={'black'} weight={'BOLD'}>
            내 약속을 자세히 설명해봐요
          </Styled.content>
          <Textarea value={content} rows={8} />
        </Wrapper>
      </Wrapper>
      <Wrapper flexDirection={'column'} gap={{ rowGap: 15 }}>
        <Typography size={'lg'} color={'black'} weight={'BOLD'}>
          저는 이런 분야에 관심이 있어요
        </Typography>
        <SearchBar
          onSearchClick={() => {
            return;
          }}
        />
        <Wrapper flexDirection={'row'} gap={{ columnGap: 20 }}>
          {hashtags.map(({ ...el }) => (
            <Hashtag key={el.hashtagId} fetchedTag={el} removable onRemove={() => onRemove(el.hashtagId)} />
          ))}
        </Wrapper>
      </Wrapper>
    </Styled.container>
  );
};

export default MeetingInfoEdit;
