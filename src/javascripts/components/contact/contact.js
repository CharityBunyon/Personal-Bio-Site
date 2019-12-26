import './contact.scss';
import utilities from '../../helpers/utilities';
// import $ from 'jquery';

const animateOne = () => {
  $('#squareOne').animate({ height: 'toogle' });
};

const buildContact = () => {
  const domString = ` 
  <div id="squareThree" class="hwh-slide">
  <img class="contactImg"src="https://images.unsplash.com/photo-1493918767339-f968bf7bfd70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="">
  </div>


  <div id="squareFour" class="hwh-slide">
    <div class="contactSection">
      <h1 class="text-center justify-content-center">Connect With Me</h1> <hr class="contactUnderline">
      
      <div class="space"><h3 class="contactTitles">Location</h3>
      <p class="contactPara">Nashville, TN</p></div>

      <div class="space"><h3 class="contactTitles">Email Me</h3>
      <p class="contactPara"><a href="mailto: charitycbunyon@gmail.com" target="_blank">charitycbunyon@gmail.com</a></p></div>


      <div class="space"><h3 class="contactTitles">Social</h3>
      <p class="contactPara"><a href="https://www.instagram.com/charitybunyon/" target="_blank">Instagram</a> - <a href="https://twitter.com/CharityBunyon" target="_blank">Twitter</a></p></div>
    </div>
  </div>

    `;
  utilities.printToDom('contact', domString);
  $(document).on('load', animateOne);
};

export default { buildContact };
