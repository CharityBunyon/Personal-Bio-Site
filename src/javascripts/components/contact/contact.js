import './contact.scss';
import utilities from '../../helpers/utilities';


const buildContact = () => {
  const domString = ` 
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6">
        <img class="leaves" src="https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Floating Green Leaves">
        </div>
        <div class="contactDiv col-sm-6">
          <div class="contactInfo">
            <h2 class="connectTitle">Connect</h2>
            <p class="contactPara">I'm currently available for hire. If you have any opportunities, projects, or if you want to say hi, contact me. I'd love to connect.</p>
            <p class="contactWays">Nashville, TN</p>
            <p class="contactWays">615.967.6153</p>
            <p class="contactWays"><a href="mailto: charitycbunyon@gmail.com" target="_blank">charitycbunyon@gmail.com</a></p>
          </div>
        </div>
      </div>
    </div>
    `;
  utilities.printToDom('contact', domString);
};

export default { buildContact };
