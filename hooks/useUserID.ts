import { useCookies } from 'react-cookie';

export const useUserID = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['X-USER-ID']);

  if (!cookies['X-USER-ID']) {
    const id = Math.floor(Math.random() * 1000000);
    setCookie('X-USER-ID', id, { path: '/' })
    return id;
  }

  return cookies['X-USER-ID'];
};
