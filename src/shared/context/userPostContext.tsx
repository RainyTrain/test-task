import { useMemo } from 'react';
import { createContext, ReactNode } from 'react';
import { useUsersPage } from '@pages';
import { UserBehaviour } from './types';

export const UserPostContext = createContext<UserBehaviour>({} as UserBehaviour);

export const UserPostProvider = ({ children }: { children: ReactNode }) => {
  const {
    selectedId,
    posts,
    users,
    changePostData,
    removeUserData,
    removeUserPost,
    showPostsByUserId,
  } = useUsersPage();

  const value = useMemo(() => {
    return {
      selectedId,
      posts,
      users,
      changePostData,
      removeUserData,
      removeUserPost,
      showPostsByUserId,
    } as UserBehaviour;
  }, [selectedId, posts, users, changePostData, removeUserData, removeUserPost, showPostsByUserId]);

  return <UserPostContext.Provider value={value}>{children}</UserPostContext.Provider>;
};
