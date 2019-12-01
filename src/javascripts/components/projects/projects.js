// import $ from 'jquery';
import utilities from '../../helpers/utilities';
import './projects.scss';
import projects from '../../helpers/data/projectData';


const buildProjects = () => {
  const projectList = projects.getProject();
  let domString = '<h3>PROJECTS</h3>';
  domString = `<div class="row ">
  `;
  for (let i = 0; i < projectList.length; i += 1) {
    const project = projectList[i];
    domString += `
          <div class="col projectSection d-flex flex-wrap">
            <a href="${project.src}"><img style="width:400px; height:400px;" class="planetImage back" src="${project.imageUrl}" alt="${project.name}"></a>
            <div>
            <h4 class="front">${project.title.toUpperCase()}</h4>
            <p>${project.description}</p>
            </div>
          </div>
    `;
  }
  domString += '</div>';
  utilities.printToDom('projects', domString);
};

export default { buildProjects };
