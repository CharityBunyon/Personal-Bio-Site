import './skills.scss';
import utilities from '../../helpers/utilities';
import workspace from '../../../images/iStock-538306567 2.jpg';

const buildSkillSection = () => {
  const domString = `
  <div class="container-fluid wrapper2 d-flex row flex-wrap justify-content-center skillsArea">
    <div class="col-6 text-center">
    <img src=${workspace} class="workspaceImg " alt="Flat Work Space Image">
    </div>
    <div class="col skillSet">
      <h4 class="skillTitle text-right img-fluid">What I Know!</h4>
    
      <p class="skillsDescription img-fluid">Software development is hard, but I'm totally <strong>LOVING</strong> it! Here is a list of skills and technologies I'm proficient in:</p>
      <ul class="container d-flex row flex-wrap skillsList img-fluid">
        <div class="col-6">
          <li>React</li>
          <li>Sass</li>
          <li>C#</li>
          <li>Firebase</li>
          <li>.NET</li>
          <li>Problem Solving</li>
          <li>Communication</li>
        </div>
        <div class="col-6">
          <li>Javascript</li>
          <li>SQL</li>
          <li>HTML5</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>Team Player</li>
          <li>Adaptable</li>
        </div>
      </ul>
    </div>

  </div>
  `;
  utilities.printToDom('skills', domString);
};

export default { buildSkillSection };
