import { useCookies } from 'react-cookie';
import { v4 as uuidv4 } from 'uuid';

export const useUserID = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['X-USER-ID']);

  if (!cookies['X-USER-ID']) {
    const id = uuidv4();
    setCookie('X-USER-ID', id, { path: '/' });
    return id;
  }

  return cookies['X-USER-ID'];
};
