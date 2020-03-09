import './contact.scss';
import utilities from '../../helpers/utilities';

import me from '../../../images/me2.jpg';


const buildContactSection = () => {
  const domString = `
  <div class="container-fluid d-flex row flex-wrap contactArea">

    <div class="col text-center">
      <img src=${me} class="emoji" alt="Emoji Image">
    </div>

    <div class="col contactInfo">
      <h3 class="connectTitle">Let's Chat</h3>
      <p class="contactPara">I'm currently available for hire. If you have any opportunities, projects, or if you want to say hi, contact me. I'd love to connect.</p>
      <p>Nashville, TN</p>
      <p class="contactEmail"><a href="mailto: charitycbunyon@gmail.com" target="_blank">Click to Contact Me!</a></p>     
    </div>

  </div>
  `;
  utilities.printToDom('contact', domString);
};


export default { buildContactSection };
