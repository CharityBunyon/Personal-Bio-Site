import './skills.scss';
import utilities from '../../helpers/utilities';


const buildSkills = () => {
  const domString = `
  <div class= "container-fluid">
    <div class="row">
      <div class="col-12">
        <h1 class="skillsTitle d-flex justify-content-center">SKILLS</h1>
        <div class="d-flex flex-wrap text-center">
          <li class="col-6 skillsIcons"><i class="fab fa-js"></i></li>
          <li class=" col-6 skillsIcons"><i class="fab fa-html5"></i></li>
          <li class="col-6 skillsIcons"><i class="fab fa-sass"></i></li>
          <li class="col-6 skillsIcons"><i class="fab fa-css3-alt"></i></li>
          <li class="col-6 skillsIcons"><i class="fab fa-react"></i></li>
          <li class="col-6 skillsIcons"><i class="fab fa-git"></i></li>
        </div>
      </div>

      <div class="col-12">
      <h1 class="skillsTitle d-flex justify-content-center">EXPERIENCE</h1>
      <div class="d-flex flex-wrap text-center">
        <li class="col-6 skillsIcons"><i class="fab fa-js"></i></li>
        <li class=" col-6 skillsIcons"><i class="fab fa-html5"></i></li>
        <li class="col-6 skillsIcons"><i class="fab fa-sass"></i></li>
        <li class="col-6 skillsIcons"><i class="fab fa-css3-alt"></i></li>
        <li class="col-6 skillsIcons"><i class="fab fa-react"></i></li>
        <li class="col-6 skillsIcons"><i class="fab fa-git"></i></li>
      </div>
    </div>
    </div>
  </div>
    `;
  utilities.printToDom('skills', domString);
};

export default { buildSkills };