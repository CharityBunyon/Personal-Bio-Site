import './projects.scss';


const buildProjectCard = (projects) => {
  let domString = '';
  domString += `
  <div class="row projectCard">
    <div class="col">
      <img class="projectImg" src="${projects.projectImg}" alt="${projects.title}">
    </div>
    <div class="col projectContents">
      <h4 class="projectTitle">${projects.title.toUpperCase()}</h4>
        <p class="projectInfo"><strong>Project Description: </strong>${projects.description}</p>  
        <p class="projectInfo"><strong>Technologies Used:</strong> ${projects.technologies}</p>
        
          <a href="${projects.url}" class="projectInfo viewProject">View Project</a>
          <a href="${projects.github}" class="projectInfo viewGit">View Github</a>  
    </div>
</div>
      `;
  return domString;
};
export default { buildProjectCard };
