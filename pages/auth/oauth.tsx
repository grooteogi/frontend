import styled from '@emotion/styled';
import { storage } from '@lib/storage';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ImpulseSpinner } from 'react-spinners-kit';

const OAuthRedirect = () => {
  const router = useRouter();
  const token = router.query.token;

  console.log('token', token);
  console.log(router.asPath);
  console.log('query', router.query);

  useEffect(() => {
    router.push(`/?token=${token}`, undefined, { shallow: true });
  });

  useEffect(() => {
    if (token) {
      storage.setToken(token as string);
      location.href = '/';
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.token]);

  return (
    <Container>
      <ImpulseSpinner />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default OAuthRedirect;
