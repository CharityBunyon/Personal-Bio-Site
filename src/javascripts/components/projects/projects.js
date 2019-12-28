import './projects.scss';


const buildProjectCard = (projects) => {
  let domString = '';
  domString += `
      <div class="row">
      <div class="card projectCard" style="width:550px;">
      <div class="card-body">
      <a href="${projects.url}"><img style="width:500px; height: 300px;" class="card-img-top projectImg" src="${projects.projectImg}" alt="${projects.title}"></a>
      <h4 class="projectTitle">${projects.title.toUpperCase()}</h4>
      <p class="projectInfo">${projects.description}</p>  
      <p class="projectInfo">Technologies Used:${projects.technologies}</p>
      <p class="projectClick">${projects.click}</p>
      </div>
      </div>
      </div>
      `;
  return domString;
};
export default { buildProjectCard };
