import './skills.scss';
import utilities from '../../helpers/utilities';


const buildSkills = () => {
  const domString = `
  <h1 class="skillsTitle d-flex justify-content-center">SKILLS</h1>
  <div class="d-flex justify-content-center">
    <li class="skillsIcons"><i class="fab fa-js"></i></li>
    <li class="skillsIcons"><i class="fab fa-html5"></i></li>
    <li class="skillsIcons"><i class="fab fa-sass"></i></li>
    <li class="skillsIcons"><i class="fab fa-css3-alt"></i></li>
    <li class="skillsIcons"><i class="fab fa-react"></i></li>
    <li class="skillsIcons"><i class="fab fa-git"></i></li>
  </div>
    `;
  utilities.printToDom('skills', domString);
};

export default { buildSkills };
