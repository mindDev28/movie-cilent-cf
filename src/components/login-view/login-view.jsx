import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


import './login-view.scss'


export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    axios.post('https://movie-app-2828.herokuapp.com/login', {
        Username: username,
        Password: password
      })
      .then(response => {
        const data = response.data;
        props.onLoggedIn(data);
      })
      .catch(e => {
        console.log('no such user')
      });
  };

  return (
    <Container>
      <Row>
        <Col>
        </Col>
        <Col md={10}>
          <CardGroup>
            <Card id='login-card' >
              <Card.Body >
                <Card.Title>Please Login</Card.Title>
                <Form>
                  <Form.Group controlId="formUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
                  </Form.Group>

                  <Form.Group controlId="formPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
                  </Form.Group>
                  <Card.Text>
                
                  </Card.Text>
                  <div className="d-grid gap-2">
                    <Button variant="outline-dark" type="submit" onClick={handleSubmit}>Submit</Button>
                  </div>

                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
        <Col>
        </Col>
      </Row> 
  </Container>




  );
}

LoginView.propTypes = {
  user: PropTypes.shape({
      Username: PropTypes.string.isRequired,
      Password: PropTypes.string.isRequired,
  }),
  onLoggedIn: PropTypes.func.isRequired
};