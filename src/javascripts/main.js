import 'bootstrap';
import '../styles/main.scss';
import navBar from './components/navBar/navbar';
import contact from './components/contact/contact';
import projects from './components/projects/projects';
import skills from './components/skills/skills';

const init = () => {
  navBar.buildNav();
  contact.buildContactSection();
  projects.buildProjects();
  skills.buildSkills();
};

init();
