/* eslint linebreak-style: ["error", "windows"]*/

import {useState, useContext} from 'react';
import {Button, Container, Form} from 'react-bootstrap';
import {register} from '../../services/authServices';
import {AuthContext} from '../contexts/AuthContext';
import {useNavigate} from 'react-router-dom';

/**
 * Page de Login.
 * @return {jsx}
 */
function Register() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });


  const {setIsAuth} = useContext(AuthContext);
  const navigate = useNavigate();

  /**
   * submit
   * @param {*} event
   */
  function submit(event) {
    event.preventDefault();
    register(data.email, data.name, data.password)
        .then((isConnected) => {
          setIsAuth(isConnected);
          navigate('/');
        });
  }

  /**
 * Binding du formulaire.
* @param {{name:String, value:'String'}} target
*/
  function handleChange({name, value}) {
    setData((prev) =>({...prev, [name]: value}));
  }

  return (
    <Container>
      <h1>Inscription</h1>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nom</Form.Label>
          <Form.Control type="name" placeholder="nom"
            value={data.name} name='name'
            onChange={(e)=> handleChange(e.target)}/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Adresse Courriel</Form.Label>
          <Form.Control type="email" placeholder="courriel"
            value={data.email} name='email'
            onChange={(e)=> handleChange(e.target)}/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control type="password" placeholder="mot de passe"
            value={data.password} name='password'
            onChange={(e)=> handleChange(e.target)}/>
        </Form.Group>

        <Button className='btn-success' variant="primary" type="submit">
             Inscription
        </Button>
      </Form>
    </Container>
  );
}

export default Register;
