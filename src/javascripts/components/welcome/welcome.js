import './welcome.scss';
import utilities from '../../helpers/utilities';

const buildAnimation = () => {
  const domString = `
  <div class="fadeInText">
  <p class="myName">Charity Bunyon</p>
  <hr class="fadeInLine">
  <p class="myTitle">A Software Developer</p>
  </div>
  <div class="caption">
  <span class="border">SCROLL DOWN</span>
  </div>
    `;
  utilities.printToDom('welcome', domString);
};

export default { buildAnimation };
