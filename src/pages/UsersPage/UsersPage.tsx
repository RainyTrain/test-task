import { Box, Stack } from '@mui/material';
import { UserCard } from '@entities';
import { ChangePost } from '@features';
import { useContext } from 'react';
import { UserPostContext } from '@shared';

export const UsersPage = () => {
  const {
    changePostData,
    posts,
    removeUserData,
    removeUserPost,
    selectedId,
    showPostsByUserId,
    users,
  } = useContext(UserPostContext);

  return (
    <Box>
      <Stack
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'row'}
        flexWrap={'wrap'}>
        {users &&
          users.map((user) => {
            return (
              <UserCard
                data={user}
                key={user.id}
                remove={removeUserData!}
                onClick={showPostsByUserId!}
                isActive={selectedId === user.id}
              />
            );
          })}
      </Stack>
      {selectedId && (
        <Stack
          justifyContent={'center'}
          alignItems={'stretch'}
          flexDirection={'row'}
          flexWrap={'wrap'}>
          {posts!
            .filter((post) => post.userId == selectedId)
            .map((post) => {
              return (
                <ChangePost
                  remove={removeUserPost!}
                  key={post.id}
                  post={post}
                  changePostData={changePostData!}
                />
              );
            })}
        </Stack>
      )}
    </Box>
  );
};
