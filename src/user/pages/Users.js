import React from 'react';

import UserList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'David Decastro',
      image:
        'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
      place: 3
    }
  ];
  return <UserList item={USERS} />;
};

export default Users;
