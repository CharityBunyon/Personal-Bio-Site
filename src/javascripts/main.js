import 'bootstrap';
import '../styles/main.scss';
import navBar from './components/navBar/navbar';
import contact from './components/contact/contact';


const init = () => {
  navBar.buildNav();
  contact.buildContactSection();
};

init();
