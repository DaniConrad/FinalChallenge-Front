import React from 'react'
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { getProfile } from '../../services/routes';

const Profile = () => {

    const { token, user } = useContext(UserContext) 

    const navigate = useNavigate()
    
    getProfile(token)
          .then(function (response) {
            
          })
          .catch(function (error) {
            navigate('/')
          });

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
      </Card.Body>
    </Card>
  );
  
}

export default Profile