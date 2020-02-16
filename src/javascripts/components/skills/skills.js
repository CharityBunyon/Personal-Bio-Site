import './skills.scss';
// import skillsImg from '../../../images/skillsImg.png';
import utilities from '../../helpers/utilities';


const buildSkills = () => {
  // const monkeyButt = skillsImg;
  const domString = `
  <div class="wrapper">
    <h4 class="skillsTitle">Technologies</h4>
  </div>
    <div class="text-center">
    <img class="responsive justify-content-center" src="https://raw.githubusercontent.com/CharityBunyon/Personal-Bio-Site/master/src/images/skills3.png" alt="">
    </div>
      
    `;
  utilities.printToDom('skills', domString);
};

export default { buildSkills };
