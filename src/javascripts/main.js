import 'bootstrap';
import '../styles/main.scss';
import navBar from './components/navBar/navbar';
import contact from './components/contact/contact';
import projectDisplay from './components/projectDisplay/projectDisplay';
import skills from './components/skills/skills';
import welcome from './components/welcome/welcome';
import about from './components/about/about';
// import projects from './components/projects/projects';

const init = () => {
  about.buildAbout();
  navBar.buildNav();
  contact.buildContact();
  skills.buildSkills();
  welcome.buildAnimation();
  // projects.buildProjectCard();
  projectDisplay.buildProjects();
};

init();
