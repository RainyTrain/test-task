import { useCallback, useEffect, useState } from 'react';
import { Post } from '@entities';
import { User } from '@entities';
import { getUserList } from '@features';
import { getUsersPosts } from '@features';
import { UserBehaviour } from '@shared';

export const useUsersPage = (): UserBehaviour => {
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    getUserList().then((res) => setUsers(res));
  }, []);

  useEffect(() => {
    getUsersPosts().then((res) => setPosts(res));
  }, []);

  const removeUserData = useCallback(
    (id: number) => {
      const newUserList = users.filter((user) => user.id !== id);
      const newUserPosts = posts.filter((post) => post.userId !== id);

      setUsers(newUserList);
      setPosts(newUserPosts);
    },
    [posts, users],
  );

  const removeUserPost = useCallback(
    (id: number) => {
      const newUserPosts = posts.filter((post) => post.id !== id);

      setPosts(newUserPosts);
    },
    [posts],
  );

  const showPostsByUserId = useCallback(
    (id: number) => {
      if (id === selectedId) {
        setSelectedId(null);
        return;
      }
      setSelectedId(id);
    },
    [selectedId],
  );

  const changePostData = useCallback(
    (id: number, newPost: Post) => {
      const newPosts = posts.map((post) => {
        if (post.id == id) {
          return newPost;
        } else {
          return post;
        }
      });

      setPosts(newPosts);
    },
    [posts],
  );

  return {
    users,
    posts,
    selectedId,
    removeUserData,
    removeUserPost,
    showPostsByUserId,
    changePostData,
  };
};
