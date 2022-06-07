import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useRouteWarning = (isSaved: boolean, message: string) => {
  const router = useRouter();

  useEffect(() => {
    if (!isSaved) {
      const handleRouteChange = () => {
        const result = confirm(message);
        if (!result) {
          router.events.emit('routeChangeError');
          throw 'Abort route change. Please ignore this error.';
        }
      };
      router.events.on('routeChangeStart', handleRouteChange);

      return () => {
        router.events.off('routeChangeStart', handleRouteChange);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSaved]);
};

export default useRouteWarning;
