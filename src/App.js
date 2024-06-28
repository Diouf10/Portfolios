import {Container} from 'react-bootstrap';
import NavigationBar from './_misc/Components/NavigationBar';
import Home from './_misc/Pages/Home';
import Skills from './_misc/Pages/Skills';
import About from './_misc/Pages/About';
import Contact from './_misc/Pages/Contact';
import Projects from './_misc/Pages/Projects';
import {Route, Routes} from 'react-router-dom';
import ProjectDetails from './_misc/Components/ProjectDetails';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import logo from './assets/images/logo-MWD.png';

/**
* L'Application.
* @return {jsx}
*/
function App() {
  useEffect(() => {
    AOS.init();
  }, []);

return (
<div className="App">
<NavigationBar />
<Container>
<Routes>
         
<Route index element={<Home />} />
<Route path='/about'  element={<About />} />
<Route path='/skills' element={<Skills />} />
<Route path='/projects' element={<Projects />} />
<Route path="/projects/:id" element={<ProjectDetails/>} />
<Route path='/contact' element={<Contact />} />
         
</Routes>
</Container>
</div>
  );
}
 
export default App;