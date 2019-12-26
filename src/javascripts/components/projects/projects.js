import './projects.scss';


const buildProjectCard = (projects) => {
  let domString = '';
  domString += `
      <div class= "row">
      <div class="col card projectCard" style="width: 600px;">
      <div class="card-body">
      <a href="${projects.url}"><img class="card-img-top" src="${projects.projectImg}" alt="${projects.title}"></a>
      <h4 class="front">${projects.title.toUpperCase()}</h4>
      <p>${projects.description}</p>  
      <p>Technologies Used:${projects.technologies}</p>
      </div>
      </div>
      </div>
      `;
  return domString;
};
export default { buildProjectCard };
