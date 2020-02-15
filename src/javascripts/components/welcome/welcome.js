import './welcome.scss';
import utilities from '../../helpers/utilities';

const buildAnimation = () => {
  const domString = `
  <div class="col-12 fadeInText landing">
    <p class="myName">Charity Bunyon</p>
    <p class="myTitle">A Software Developer</p>
  </div>
  <div class="caption" id="chevron">
    <a href="#about">
      <i class="fa fa-angle-down vert-move" style="font-size:36px"></i>
      <p>
      <span class="char1">S</span>
      <span class="char2">C</span>
      <span class="char3">R</span>
      <span class="char4">O</span>
      <span class="char5">L</span>
      <span class="char6">L</span>
      </p>
    </a>
  </div>
    `;
  utilities.printToDom('welcome', domString);
};

export default { buildAnimation };
