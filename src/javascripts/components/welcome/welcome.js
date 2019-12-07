import './welcome.scss';
import utilities from '../../helpers/utilities';
// import $ from 'jquery';

const animateOne = () => {
  $('#squareOne').animate({ height: 'toogle' });
};

const buildAnimation = () => {
  const domString = `
  <div id="squareOne" class="hwh-slide"></div>
  <div id="squareTwo" class="hwh-slide"></div>
    `;
  utilities.printToDom('welcome', domString);
  $(document).on('load', animateOne);
};

export default { buildAnimation };
