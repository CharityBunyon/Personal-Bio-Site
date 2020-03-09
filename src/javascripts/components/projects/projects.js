import './projects.scss';


const buildProjectCard = (projects) => {
  let domString = '';
  domString += `
  <div class="card projectCard" style="width: 30rem;">
  <div class="text-center ">
  <a href="${projects.url}"><img src="${projects.projectImg}" alt="${projects.title}" class="card-img-top icons"></a>
  </div>
  <div class="card-body text-center ">
    <p class="card-title projectTitle">${projects.title.toUpperCase()}</p>  
  </div>
  <div class="overlay">
    <p class="projectInfo ">${projects.description}</p> 
    <div class="text-center">
      <a href="${projects.url}" class="projectInfo viewProject">View Project</a>
      <a href="${projects.github}" class="projectInfo viewGit">View Github</a>  
    </div>
  </div>
</div>
      `;
  return domString;
};
export default { buildProjectCard };
