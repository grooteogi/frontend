import Link from '@components/common/Link';
import { storage } from '@lib/storage';
import { default as NextLink } from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import Styled from './Header.styled';
import Logo from './Logo';

const Header = () => {
  const scrollHref = useRef<HTMLDivElement>(null);
  const [scrollDown, setScrollDown] = useState<boolean>(false);
  const [auth, setAuth] = useState<boolean>(false);

  useEffect(() => {
    const token = storage.getToken();
    if (typeof token === 'string') setAuth(true);
    else setAuth(false);
  }, []);

  useEffect(() => {
    function update() {
      const rect = scrollHref.current ? scrollHref.current.getBoundingClientRect() : { top: 0 };
      if (rect['top'] !== 0) setScrollDown(true);
      else setScrollDown(false);
    }
    document.addEventListener('scroll', update);
  }, [scrollHref]);

  const handleLogout = () => {
    storage.clearToken();
    setAuth(false);
    location.href = '/';
  };

  return (
    <React.Fragment>
      <div ref={scrollHref} />
      <Styled.header animate={{ height: scrollDown ? '50px' : '80px' }}>
        <Styled.container>
          <NextLink href={'/'} passHref={true}>
            <a>
              <Logo animate={{ scale: scrollDown ? '0.8' : '1' }} transition={{ ease: 'easeInOut', duration: 4 }} />
            </a>
          </NextLink>
          {auth ? (
            <Styled.menuContainer>
              <Link href={'/post/create'} size={'xs'} color={'primary'}>
                약속생성
              </Link>
              <Link href={'/mypage/apply'} size={'xs'} color={'black'}>
                내정보
              </Link>
              <Link href={'/'} onClick={handleLogout} size={'xs'} color={'black'}>
                로그아웃
              </Link>
            </Styled.menuContainer>
          ) : (
            <Styled.menuContainer>
              <Link href={'/auth/signup'} size={'xs'} color={'primary'}>
                회원가입
              </Link>
              <Link href={'/auth'} size={'xs'} color={'black'}>
                로그인
              </Link>{' '}
            </Styled.menuContainer>
          )}
        </Styled.container>
      </Styled.header>
    </React.Fragment>
  );
};

export default Header;
