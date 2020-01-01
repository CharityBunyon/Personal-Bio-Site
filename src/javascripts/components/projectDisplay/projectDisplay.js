// import $ from 'jquery';
import utilities from '../../helpers/utilities';
import './projectDisplay.scss';
import projectData from '../../helpers/data/projectData';
import projectDom from '../projects/projects';


const buildProjects = () => {
  projectData.getProjects()
    .then((project) => {
      let domString = '<h1 id="projectTitle" class="text-center">WHAT I\'VE DONE</h1> <hr id="underline">';
      domString += '<div class="container-fluid">';
      project.forEach((board) => {
        domString += projectDom.buildProjectCard(board);
      });
      utilities.printToDom('projects', domString);
      domString = '</div>';
    })
    .catch((error) => console.error(error));
};

export default { buildProjects };
