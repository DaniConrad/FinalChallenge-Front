import React from 'react'
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { getProfile } from '../../services/routes';

const Profile = () => {

    const { token } = useContext(UserContext) 

    const navigate = useNavigate()
    
    getProfile(token)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            navigate('/')
          });

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
  
}

export default Profile