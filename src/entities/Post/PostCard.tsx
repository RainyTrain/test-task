import { Stack, Typography } from '@mui/material';
import { memo } from 'react';
import { Card } from '@shared';
import { Post } from './types';

interface PostProps {
  data: Post;
  remove: (arg: number) => void;
  onClick: () => void;
}

export const PostCard = memo((props: PostProps) => {
  const { data, remove, onClick } = props;

  const removePost = (id: number) => {
    return () => {
      remove(id);
    };
  };

  return (
    <Card remove={removePost(data.id)} onClick={onClick} bgColor="#95FF85">
      <Stack spacing={2}>
        <Typography variant="subtitle1">{data.title}</Typography>
        <Typography variant="body2">{data.body}</Typography>
      </Stack>
    </Card>
  );
});
