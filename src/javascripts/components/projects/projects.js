import './projects.scss';


const buildProjectCard = (projects) => {
  let domString = '';
  domString += `
  <div class="row projectCard">
  <div class="col">
  <a href="${projects.url}"><img class="projectImg" src="${projects.projectImg}" alt="${projects.title}"></a>
  </div>
  <div class="col projectContents text-center">
  <h4 class="projectTitle">${projects.title.toUpperCase()}</h4>
    <p class="projectInfo">${projects.description}</p>  
    <p class="projectInfo"><strong>Technologies Used:</strong> ${projects.technologies}</p>
    <p class="projectClick">${projects.click}</p>
  </div>
</div>
      `;
  return domString;
};
export default { buildProjectCard };
