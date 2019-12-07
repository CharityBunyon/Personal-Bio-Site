import './projects.scss';


const buildProjectCard = (projects) => {
  let domString = '';
  domString += `
    <div class="card projectCards">
      <a href="${projects.url}"><img class="cardImg" style="width:400px; height:400px;" class="planetImage back" src="${projects.projectImg}" alt="${projects.title}"></a>
      <div class="card-body">
      <h4 class="front">${projects.title.toUpperCase()}</h4>
      <p>${projects.description}</p>
      </div>
      `;
  return domString;
};
export default { buildProjectCard };
