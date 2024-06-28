import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {AuthContext} from '../contexts/AuthContext';

/**
 * Deconnexion
 */
function Deconnexion() {
  const {setIsAuth} = useContext(AuthContext);
  const navigate = useNavigate();

  setIsAuth(false);
  navigate('/');
}
export default Deconnexion;
