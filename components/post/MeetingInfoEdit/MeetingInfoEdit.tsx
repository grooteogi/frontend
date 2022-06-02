import React from 'react';
import Styled from './MeetingInfoEdit.style';
import AddHashtagBar from './AddHashtagBar/AddHashtagBar';
import StickyBar from '../StickyBar/StickyBar';
import Title from '@components/common/Title';
import UploadImage from './UploadImage/UploadImage';
import Input from '@components/common/Input';
import Textarea from '@components/common/Textarea';

import { PostEntity } from 'types/entity';
import { Field, Form } from 'formik';

export type MeetingInfoEditProps = {
  postData?: PostEntity;
};

const MeetingInfoEdit: React.FC<MeetingInfoEditProps> = () => {
  return (
    <Form id="createPage">
      <Styled.postInfoBox>
        <Title size={'h2'} color={'black'}>
          저는 이런 약속을 계획하고 있어요
        </Title>
        <Styled.postInfoElementBox>
          <Title size={'h3'} color={'deepdarkgray'}>
            내 약속의 제목을 정해봐요
          </Title>
          <Field type={'text'} id={'title'} name={'title'} placeholder={'제목을 입력해주세요'} component={Input} />
        </Styled.postInfoElementBox>
        <Styled.postInfoElementBox>
          <Title size={'h3'} color={'deepdarkgray'}>
            내 약속을 설명할 수 있는 사진을 올려봐요
          </Title>
          <UploadImage />
        </Styled.postInfoElementBox>
        <Styled.postInfoElementBox>
          <Title size={'h3'} color={'deepdarkgray'}>
            내 약속을 자세히 설명해봐요
          </Title>
          <Field id={'content'} name={'content'} rows={8} placeholder={'약속을 설명해주세요!'} component={Textarea} />
        </Styled.postInfoElementBox>
      </Styled.postInfoBox>
      <Styled.addHashtagBox>
        <Title size={'h2'} color={'black'}>
          저는 이런 분야에 관심이 있어요
        </Title>
        <AddHashtagBar />
      </Styled.addHashtagBox>
      <StickyBar buttonName={'약속 생성하기'} />
    </Form>
  );
};

export default MeetingInfoEdit;
