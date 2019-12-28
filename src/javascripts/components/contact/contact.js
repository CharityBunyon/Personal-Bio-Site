import './contact.scss';
import utilities from '../../helpers/utilities';
// import $ from 'jquery';

const animateOne = () => {
  $('#squareOne').animate({ height: 'toogle' });
};

const buildContact = () => {
  const domString = ` 
    <div class="contactSection">
      <h1 class="text-center justify-content-center">CONNECT WITH ME</h1> <hr class="contactUnderline">
      
      <div class="space"><h3 class="contactTitles">Location</h3>
      <p class="contactPara">Nashville, TN</p></div>

      <div class="space"><h3 class="contactTitles">Email Me</h3>
      <p class="contactPara"><a href="mailto: charitycbunyon@gmail.com" target="_blank">charitycbunyon@gmail.com</a></p></div>


      <div class="space"><h3 class="contactTitles">Social</h3>
      <p class="contactPara"><a href="https://www.instagram.com/charitybunyon/" target="_blank">Instagram</a> - <a href="https://twitter.com/CharityBunyon" target="_blank">Twitter</a></p></div>
    </div>

    `;
  utilities.printToDom('contact', domString);
  $(document).on('load', animateOne);
};

export default { buildContact };
