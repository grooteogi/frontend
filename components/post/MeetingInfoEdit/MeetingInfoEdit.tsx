import Input from '@components/common/Input';
import Textarea from '@components/common/Textarea';
import Typography from '@components/common/Typography';
import React, { useEffect, useRef, useState } from 'react';
import { PostEntity } from 'types/entity';
import Styled from './MeetingInfoEdit.style';
import { PostCreateStateType, PostFormData, usePostContext } from '../context';
import AddHashtagBar from './AddHashtagBar/AddHashtagBar';
import { Field, Form, Formik } from 'formik';
import schedules from './../detail.schedule.mock';
import post from '@lib/api/post';
import StickyBar from '../StickyBar/StickyBar';
import { useRouter } from 'next/router';

export type MeetingInfoEditProps = Partial<Pick<PostEntity, 'title' | 'content' | 'imageUrl' | 'hashtags'>>;

const MeetingInfoEdit: React.FC<MeetingInfoEditProps> = () => {
  const router = useRouter();
  const { hashtags, creditType, schedules, imageUrl, setImageUrl } = usePostContext();
  const previewImageRef = useRef<any>();
  const [isWidthBigger, setIsWidthBigger] = useState<boolean>(true);

  useEffect(() => {
    setIsWidthBigger(previewImageRef.current.width > previewImageRef.current.height);
  }, []);

  const onChangeHandler = (fileInput: HTMLInputElement) => {
    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();
      const formData = new FormData();
      formData.append('aa', fileInput.files[0]);
      reader.onload = async e => {
        const res = await post.updatePostImg(formData);
        if (res) {
          previewImageRef.current.src = e.target?.result;
          setImageUrl(res);
        }
        //  TODO: auth 통합후 지울것 (res 되기전에 테스트)
        previewImageRef.current.src = e.target?.result;
        setImageUrl(e.target?.result);
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
          const sendData = { ...values, imageUrl, hashtags, creditType, schedules };
          console.log(sendData);
          const status = await post.createPost(sendData);
          console.log(status);
          router.push('/');
        }}
      >
        <Form id="createPage">
          <Styled.postInfoBox>
            <Typography size={'lg'} color={'black'} weight={'BOLD'}>
              저는 이런 약속을 계획하고 있어요
            </Typography>
            <Styled.postInfoElementBox>
              <Typography size={'md'} color={'black'} weight={'BOLD'}>
                내 약속의 제목을 정해봐요
              </Typography>
              <Field type={'text'} id={'title'} name={'title'} component={Input} />
            </Styled.postInfoElementBox>
            <Styled.postInfoElementBox>
              <Typography size={'md'} color={'black'} weight={'BOLD'}>
                내 약속을 설명할 수 있는 사진을 올려봐요
              </Typography>
              <Styled.thumbnailWrappper>
                <Styled.thumbnail>
                  <input
                    name={'imageUrl'}
                    type={'file'}
                    id={'fileReader'}
                    onChange={e => onChangeHandler(e.target)}
                    hidden
                  />
                  <Styled.imgSelectBox htmlFor={'fileReader'}>사진 선택</Styled.imgSelectBox>
                  <Styled.postPicWrapper>
                    <Styled.postPic ref={previewImageRef} isWidthBigger={isWidthBigger} />
                  </Styled.postPicWrapper>
                </Styled.thumbnail>
              </Styled.thumbnailWrappper>
            </Styled.postInfoElementBox>
            <Styled.postInfoElementBox>
              <Typography size={'md'} color={'black'} weight={'BOLD'}>
                내 약속을 자세히 설명해봐요
              </Typography>
              <Field id={'content'} name={'content'} rows={8} component={Textarea} />
            </Styled.postInfoElementBox>
          </Styled.postInfoBox>
          <Styled.addHashtagBox>
            <Typography size={'lg'} color={'black'} weight={'BOLD'}>
              저는 이런 분야에 관심이 있어요
            </Typography>
            <AddHashtagBar />
          </Styled.addHashtagBox>
          <StickyBar buttonName={'약속 생성하기'} />
        </Form>
      </Formik>
    </Styled.container>
  );
};

export default MeetingInfoEdit;
