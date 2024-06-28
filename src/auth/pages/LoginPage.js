/* eslint linebreak-style: ["error", "windows"]*/

import {useState, useContext} from 'react';
import {Button, Container, Form} from 'react-bootstrap';
import {login} from '../../services/authServices';
import {AuthContext} from '../contexts/AuthContext';
import {useNavigate} from 'react-router-dom';
/**
 * Page de Login.
 * @return {jsx}
 */
function LoginPage() {
  const [data, setData] = useState({
    email: '',
    password: '',
    remember_me: true,
  });

  const [error, setError] = useState(null);
  const {setIsAuth} = useContext(AuthContext);
  const navigate = useNavigate();

  /**
   * submt.
   * @param {*} event
   */
  function submit(event) {
    event.preventDefault();
    setError(null);

    login(data.email, data.password, data.remember_me)
        .then((isConnected) => {
          if (isConnected) {
            setIsAuth(true);
            navigate('/');
          } else {
            setError('Identifiants incorrects. Veuillez réessayer.');
            console.log(error);
          }
        })
        .catch((error) => {
          console.error('Erreur lors de la connexion :', error);
          console.log(error);
          setError('Une erreur s\'est produite. Veuillez réessayer.');
          alert('Identifiants incorrects. Veuillez réessayer.');
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
      <h1>Connexion</h1>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Adresse Courriel</Form.Label>
          <Form.Control type="email" placeholder="courriel"
            value={data.email} name='email'
            onChange={(e)=> handleChange(e.target)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control type="password" placeholder="mot de passe"
            value={data.password} name='password'
            onChange={(e)=> handleChange(e.target)}/>
        </Form.Group>

        <Button className='btn-success' variant="primary" type="submit">
             Connexion
        </Button>
      </Form>
    </Container>
  );
}

export default LoginPage;
