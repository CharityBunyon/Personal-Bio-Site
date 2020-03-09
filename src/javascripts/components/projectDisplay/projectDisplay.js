import utilities from '../../helpers/utilities';
import './projectDisplay.scss';
import projectData from '../../helpers/data/projectData';
import projects from '../projects/projects';


const buildProjects = () => {
  projectData.getProjects()
    .then((project) => {
      let domString = '';
      project.forEach((board) => {
        domString += projects.buildProjectCard(board);
      });
      utilities.printToDom('projects', domString);
    })
    .catch((error) => console.error(error));
};

export default { buildProjects };
