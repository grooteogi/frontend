import Hashtag from '@components/common/Hashtag';
import Input from '@components/common/Input';
import SearchBar from '@components/common/SearchBar';
import Textarea from '@components/common/Textarea';
import Typography from '@components/common/Typography';
import Wrapper from '@components/common/Wrapper';
import React, { useEffect, useRef, useState } from 'react';
import { HashtagEntity } from 'types/entity';
import { MeetingInfoType } from '../detail.mock';
import Styled from './MeetingInfoEdit.style';

export interface MeetingInfoEditProps
  extends Partial<Pick<MeetingInfoType, 'title' | 'content' | 'imageUrl' | 'hashtags'>> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  getimg?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const MeetingInfoEdit: React.FC<MeetingInfoEditProps> = ({ title, content, imageUrl, hashtags = [] }) => {
  const [editTitle, setEditTitle] = useState(title);
  const [editContent, setEditContent] = useState(content);
  const [editImageUrl, setEditImageUrl] = useState(imageUrl);
  const [edithashtags, setEdithashtags] = useState<HashtagEntity[]>(hashtags);
  const previewImage = useRef<any>();
  const [isWidthBigger, setIsWidthBigger] = useState<boolean>(true);
  useEffect(() => {
    setIsWidthBigger(previewImage.current.width > previewImage.current.height);
  }, []);
  const onChangeHandler = (fileInput: HTMLInputElement) => {
    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();
      reader.onload = e => {
        previewImage.current.src = e.target?.result;
        setEditImageUrl(e.target?.result?.toString);
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
          <Typography size={'sm'} color={'black'} weight={'BOLD'}>
            내 약속을 설명할 수 있는 사진을 올려봐요
          </Typography>
          <Input
            value={editTitle}
            onChange={e => {
              setEditTitle(e.target.value);
            }}
          ></Input>
        </Wrapper>
        <Wrapper flexDirection={'column'} gap={{ rowGap: 10 }}>
          <Typography size={'sm'} color={'black'} weight={'BOLD'}>
            내 약속의 제목을 정해봐요
          </Typography>
          <Styled.thumbnailWrappper>
            <Styled.thumbnail>
              <input type={'file'} id={'fileReader'} onChange={e => onChangeHandler(e.target)} hidden />
              <Styled.imgSelectBox htmlFor={'fileReader'}>사진 선택</Styled.imgSelectBox>
              <Styled.postPicWrapper>
                <Styled.postPic ref={previewImage} src={editImageUrl} isWidthBigger={isWidthBigger} />
              </Styled.postPicWrapper>
            </Styled.thumbnail>
          </Styled.thumbnailWrappper>
        </Wrapper>
        <Wrapper flexDirection={'column'} gap={{ rowGap: 10 }}>
          <Typography size={'sm'} color={'black'} weight={'BOLD'}>
            내 약속을 자세히 설명해봐요
          </Typography>
          <Textarea
            value={editContent}
            onChange={e => {
              setEditContent(e.target.value);
            }}
            rows={8}
          />
        </Wrapper>
      </Wrapper>
      <Wrapper flexDirection={'column'} gap={{ rowGap: 15 }}>
        <Typography size={'lg'} color={'black'} weight={'BOLD'}>
          저는 이런 분야에 관심이 있어요
        </Typography>
        <SearchBar hashtags={[]}></SearchBar>
        <Wrapper flexDirection={'row'} gap={{ columnGap: 20 }}>
          {edithashtags.map(({ ...el }) => (
            <Hashtag key={el.id} fetchedTag={el} removable onRemove={() => onRemove(el.id)}></Hashtag>
          ))}
        </Wrapper>
      </Wrapper>
    </Styled.container>
  );
};

export default MeetingInfoEdit;
