import './projectTitle.scss';
import utilities from '../../helpers/utilities';


const buildTitle = () => {
  const domString = `
  <div class="wrapper3">
    <h4 class="project">Projects</h4>
  </div>
  `;
  utilities.printToDom('title', domString);
};

export default { buildTitle };
