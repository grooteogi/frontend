import Input from '@components/common/Input';
import Textarea from '@components/common/Textarea';
import Typography from '@components/common/Typography';
import Wrapper from '@components/common/Wrapper';
import React, { useEffect, useRef, useState } from 'react';
import { PostEntity } from 'types/entity';
import Styled from './MeetingInfoEdit.style';
import { PostFormData, usePostContext } from '../context';
import AddHashtagBar from './AddHashtagBar/AddHashtagBar';
import { Field, Form, Formik } from 'formik';

export type MeetingInfoEditProps = Partial<Pick<PostEntity, 'title' | 'content' | 'imageUrl' | 'hashtags'>>;

const MeetingInfoEdit: React.FC<MeetingInfoEditProps> = () => {
  const { hashtags, setPost } = usePostContext();
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

  return (
    <Styled.container>
      <Formik
        initialValues={{
          title: '',
          content: '',
          imageUrl: '',
          hashtags: [],
        }}
        onSubmit={async (values: PostFormData) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <Wrapper flexDirection={'column'} gap={{ rowGap: 20 }}>
            <Typography size={'lg'} color={'black'} weight={'BOLD'}>
              저는 이런 약속을 계획하고 있어요
            </Typography>
            <Wrapper flexDirection={'column'} gap={{ rowGap: 10 }}>
              <Typography size={'md'} color={'black'} weight={'BOLD'}>
                내 약속의 제목을 정해봐요
              </Typography>
              <Field type={'text'} id={'title'} name={'title'} component={Input} />
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
                    <Styled.postPic ref={previewImageRef} isWidthBigger={isWidthBigger} />
                  </Styled.postPicWrapper>
                </Styled.thumbnail>
              </Styled.thumbnailWrappper>
            </Wrapper>
            <Wrapper flexDirection={'column'} gap={{ rowGap: 10 }}>
              <Typography size={'md'} color={'black'} weight={'BOLD'}>
                내 약속을 자세히 설명해봐요
              </Typography>
              <Field id={'content'} name={'content'} rows={8} component={Textarea} />
            </Wrapper>
          </Wrapper>
          <Wrapper flexDirection={'column'} gap={{ rowGap: 15 }}>
            <Typography size={'lg'} color={'black'} weight={'BOLD'}>
              저는 이런 분야에 관심이 있어요
            </Typography>
            <AddHashtagBar hashtags={hashtags} />
          </Wrapper>
        </Form>
      </Formik>
    </Styled.container>
  );
};

export default MeetingInfoEdit;
