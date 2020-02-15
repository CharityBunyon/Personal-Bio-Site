import './skills.scss';
// import skillsImg from '../../../images/skillsImg.png';
import utilities from '../../helpers/utilities';


const buildSkills = () => {
  // const monkeyButt = skillsImg;
  const domString = `
  <div class= "container">
    <div class="row">
      <div class="col-12">
        <h1 class="skillsTitle d-flex justify-content-center">TECHNOLOGIES</h1>
        <hr id="underline">
        <div class="skillsGraphic">
        </div>
      </div>
    `;
  utilities.printToDom('skills', domString);
};

export default { buildSkills };
