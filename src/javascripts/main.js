import 'bootstrap';
import '../styles/main.scss';
import navBar from './components/navBar/navbar';
import contact from './components/contact/contact';
import projectDisplay from './components/projectDisplay/projectDisplay';
import skills from './components/skills/skills';
import welcome from './components/welcome/welcome';

const init = () => {
  navBar.buildNav();
  contact.buildContactSection();
  skills.buildSkills();
  welcome.buildAnimation();
  projectDisplay.buildProjects();
};

init();
