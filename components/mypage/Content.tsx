import Title from '@components/common/Title';
import Layout from '@components/mypage/layout';
import SideBar from './../../components/mypage/SideBar/SideBar';
import { useState } from 'react';
import Hamburger from 'hamburger-react';

interface ContentProps {
  title: string;
  children?: JSX.Element | JSX.Element[] | false;
}

const Content: React.FC<ContentProps> = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);
  const setSideClose = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (isOpen) {
      setOpen(false);
    }
  };
  return (
    <Layout.PageContent>
      <Layout.SectionLeft isOpen={isOpen}>
        <SideBar />
      </Layout.SectionLeft>
      <Layout.SectionRight onClick={setSideClose}>
        <Layout.PageTitle>
          <Title size={'h1'} color={'black'}>
            {title}
          </Title>
          <Layout.hamburgerBox isOpen={isOpen}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </Layout.hamburgerBox>
        </Layout.PageTitle>
        {children}
      </Layout.SectionRight>
    </Layout.PageContent>
  );
};

export default Content;
