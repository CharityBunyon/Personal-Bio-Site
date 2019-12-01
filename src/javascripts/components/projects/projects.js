// import $ from 'jquery';
import utilities from '../../helpers/utilities';
import './projects.scss';
import projects from '../../helpers/data/projectData';


const buildProjects = () => {
  const projectList = projects.getProject();
  let domString = `<div class="text-center projectTitle container"><h1>PROJECTS</h1></div>
  `;
  for (let i = 0; i < projectList.length; i += 1) {
    const project = projectList[i];
    domString += `
        <div class="card-deck mx-auto">
        <div class="col">
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
