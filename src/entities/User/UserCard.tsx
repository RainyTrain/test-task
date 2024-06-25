import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Stack } from '@mui/material';

import { Card } from '@shared';
import { User } from './types';

interface UserProps {
  data: User;
  remove: (arg: number) => void;
  onClick: (arg: number) => void;
  isActive: boolean;
}

export const UserCard = memo((props: UserProps) => {
  const { data, remove, onClick, isActive } = props;
  const navigate = useNavigate();

  const removeUser = useCallback(
    (id: number) => {
      return () => {
        remove(id);
      };
    },
    [remove],
  );

  const showUserPosts = useCallback(
    (id: number) => {
      return () => {
        onClick(id);
      };
    },
    [onClick],
  );

  const geoLocationClick = (latitude: string, longitude: string) => {
    navigate(`/map?lat=${latitude}&lng=${longitude}`);
  };

  return (
    <Card
      remove={removeUser(data.id)}
      onClick={showUserPosts(data.id)}
      bgColor={isActive ? '#FFA4A4' : undefined}>
      <Stack spacing={1} alignItems={'center'}>
        <div>{data.name}</div>
        <div>({data.username})</div>
      </Stack>
      <div>{data.email}</div>
      <Stack>
        <Button
          sx={{
            display: 'flex',
            gap: 2,
          }}
          variant="contained"
          onClick={(event) => {
            event.stopPropagation();
            geoLocationClick(data.address.geo.lat, data.address.geo.lng);
          }}>
          <span>{data.address.geo.lat} </span>
          <span>{data.address.geo.lng}</span>
        </Button>
      </Stack>
      <div>{data.company.name}</div>
    </Card>
  );
});
