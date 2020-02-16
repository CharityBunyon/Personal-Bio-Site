import './skills.scss';
// import skillsImg from '../../../images/skillsImg.png';
import utilities from '../../helpers/utilities';


const buildSkills = () => {
  // const monkeyButt = skillsImg;
  const domString = `
  <div class="wrapper">
    <h4 class="skillsTitle">Technologies</h4>
    <div>
    <img class="responsive" src="https://raw.githubusercontent.com/CharityBunyon/Personal-Bio-Site/master/src/images/skills2.png" alt="">
    </div>
  </div>
      
    `;
  utilities.printToDom('skills', domString);
};

export default { buildSkills };
