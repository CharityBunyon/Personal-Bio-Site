import './projects.scss';


const buildProjectCard = (projects) => {
  let domString = '';
  domString += `
  <div class="row projectCard">
  <div class="col">
  <img class="projectImg" src="${projects.projectImg}" alt="${projects.title}">
  </div>
  <div class="col projectContents text-center">
  <h4 class="projectTitle">${projects.title.toUpperCase()}</h4>
    <p class="projectInfo">${projects.description}</p>  
    <p class="projectInfo"><strong>Technologies Used:</strong> ${projects.technologies}</p>
    <div class="col">
      <a href="${projects.url}" class="projectInfo viewBtn">View Project</a>
      <a href="${projects.github}" class="projectInfo viewBtn">View Github</a>
    </div>
  </div>
</div>
      `;
  return domString;
};
export default { buildProjectCard };
