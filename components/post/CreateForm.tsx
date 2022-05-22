import { Form, Formik, FormikHelpers } from 'formik';
import { createContext } from 'react';
import { sleep } from 'react-query/types/core/utils';
import { ScheduleEntity } from 'types/entity';
import { CreditType } from 'types/enum';

export type PostCreateStateType = {
  title: string;
  content: string;
  imageUrl: string;
  hashtags: string[];
  creditType: CreditType;
  schedules: ScheduleEntity[];
};

const CreateFormik = ({ children }: { children: React.ReactNode }) => {
  return (
    <Formik
      initialValues={{
        title: '',
        content: '',
        imageUrl: '',
        hashtags: [],
        creditType: CreditType.DIRECT,
        schedules: [],
      }}
      onSubmit={async (values: PostCreateStateType) => {
        await sleep(1000);
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>{children}</Form>
    </Formik>
  );
};

export default CreateFormik;
