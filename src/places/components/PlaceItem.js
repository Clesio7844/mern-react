import React, { useState } from 'react';

import Card from '../../shared/components/UIELements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIELements/Modal';
import Map from '../../shared/components/UIELements/Map';
import './PlaceItem.css';

const PlaceItem = props => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closenMapHandler = () => setShowMap(false);

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closenMapHandler}
        header={props.address}
        contentClass='place-item__modal-content'
        footerClass='place-item__modal-actions'
        footer={<Button onClick={closenMapHandler}>CLOSE</Button>}
      >
        <div className='map.container'>
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <li className='place-item'>
        <Card className='place-item__content'>
          <div className='place-item__image'>
            <img src={props.image} title={props.title} />
          </div>
          <div className='place-item__info'>
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className='place-item__actions'>
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            <Button to={`/places/${props.id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
