import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'CodeNation Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://images.unsplash.com/photo-1495202337139-e865ed70fcd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2855&q=80',
    address: '19 Spring Gardens, Manchester M2 1FB',
    location: {
      lat: 53.4813668,
      lng: -2.2433974
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'CodeNation Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://images.unsplash.com/photo-1495202337139-e865ed70fcd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2855&q=80',
    address: '19 Spring Gardens, Manchester M2 1FB',
    location: {
      lat: 53.4813668,
      lng: -2.2433974
    },
    creator: 'u2'
  }
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
