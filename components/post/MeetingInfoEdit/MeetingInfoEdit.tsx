import Hashtag from '@components/common/Hashtag';
import Input from '@components/common/Input';
import Textarea from '@components/common/Textarea';
import Typography from '@components/common/Typography';
import Wrapper from '@components/common/Wrapper';
import React, { useEffect, useRef, useState } from 'react';
import { HashtagEntity, PostEntity } from 'types/entity';
import Styled from './MeetingInfoEdit.style';
import { usePostCreate } from '../context';
import AddHashtagBar from '../AddHashtagBar/AddHashtagBar';
import { hashtagIdAdd } from '@lib/common';

export type MeetingInfoEditProps = Partial<Pick<PostEntity, 'title' | 'content' | 'imageUrl' | 'hashtags'>>;

let idx = 0;
const MeetingInfoEdit: React.FC<MeetingInfoEditProps> = ({
  title: prevTitle,
  content: prevContent,
  imageUrl: prevImageUrl,
  hashtags: prevHashtags = [],
}) => {
  const { title, content, imageUrl, hashtags, setTitle, setContent, setImageUrl, setHashtags } = usePostCreate();
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
        // setImageUrl(previewImageRef.current.src);
      };
      reader.readAsDataURL(fileInput.files[0]);
    }
  };
  useEffect(() => {
    const hashtagsWithId = hashtagIdAdd(prevHashtags);
    if (prevTitle) setTitle(prevTitle);
    if (prevContent) setContent(prevContent);
    if (prevImageUrl) setImageUrl(prevImageUrl);
    if (hashtagsWithId !== null && hashtagsWithId !== undefined) setHashtags(hashtagsWithId);
  }, []);

  const addHashtag = (value: string) => {
    const newHashtag: HashtagEntity = { hashtagId: idx++, name: value };
    setHashtags([...hashtags, newHashtag]);
  };
  const removeHashtag = async (hashtag: HashtagEntity) => {
    setHashtags(hashtags.filter((h: HashtagEntity) => h.hashtagId !== hashtag.hashtagId));
    console.log(hashtags);
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
          <Input name={'title'} />
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
                <Styled.postPic ref={previewImageRef} src={prevContent} isWidthBigger={isWidthBigger} />
              </Styled.postPicWrapper>
            </Styled.thumbnail>
          </Styled.thumbnailWrappper>
        </Wrapper>
        <Wrapper flexDirection={'column'} gap={{ rowGap: 10 }}>
          <Typography size={'md'} color={'black'} weight={'BOLD'}>
            내 약속을 자세히 설명해봐요
          </Typography>
          <Textarea name={'content'} rows={8} />
        </Wrapper>
      </Wrapper>
      <Wrapper flexDirection={'column'} gap={{ rowGap: 15 }}>
        <Typography size={'lg'} color={'black'} weight={'BOLD'}>
          저는 이런 분야에 관심이 있어요
        </Typography>
        <AddHashtagBar addHashtags={addHashtag} />
        <Wrapper flexDirection={'row'} gap={{ columnGap: 10 }}>
          {hashtags.map(({ ...fetched }: HashtagEntity) => (
            <Hashtag key={fetched.hashtagId} fetchedTag={fetched} removable onRemove={() => removeHashtag(fetched)} />
          ))}
        </Wrapper>
      </Wrapper>
    </Styled.container>
  );
};

export default MeetingInfoEdit;
