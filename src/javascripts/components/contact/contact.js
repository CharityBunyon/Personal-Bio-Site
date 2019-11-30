import './contact.scss';
import utilities from '../helpers/utilities';

// import profile from '../../../images/IMG_1147.JPG';

const buildContactSection = () => {
  const domString = `
  <div class="container">
  <h3 class="text-center ml-1">Let's Connect</h3>
  <p class="text-center">Want to talk more? Please fill out the form below and click
      submit. I look forward to hearing from you!</p>
  <form>
      <div class="form-row">
          <div class="form-group col-md-6">
              <!-- <label for="inputEmail4">Your Name</label> -->
              <input type="text" class="form-control" placeholder="Your Name">
          </div>
          <div class="form-group col-md-6">
              <!-- <label for="inputPassword4">Your Email</label> -->
              <input type="email" class="form-control" placeholder="Your Email">
          </div>
      </div>
      <div class="form-group">
          <!-- <label for="inputAddress">Your Phone (optional)</label> -->
          <input type="number" class="form-control" placeholder="Your Phone (optional)">
      </div>

      <div class="form-group">
          <!-- <label for="inputZip">Message</label> -->
          <textarea class="form-control" name="contact" cols="30" rows="10" aria-label="Your message"
              placeholder="Your Message" required></textarea>
      </div>

      <button id="valid" type="button" class="btn btn-block btn-outline-dark" data-toggle="modal"
          data-target="#exampleModal">Submit Message</button>
  

    `;
  utilities.printToDom('contact', domString);
};

export default { buildContactSection };
