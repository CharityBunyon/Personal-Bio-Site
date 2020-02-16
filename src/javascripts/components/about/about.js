import './about.scss';
import utilities from '../../helpers/utilities';
// import $ from 'jquery';


const buildAbout = () => {
  const domString = ` 
  <div class="wrapper">
    <h4 class="hello">Why, hello there!</h4>
    <div>
    <p class="aboutPara">I'm Charity Bunyon, welcome to my portfolio! I am a Nashville based software developer who loves building platforms that live on the internet.Throughout my career, I have held several positions that allow me to design innovative e-learning courses and learning materials for companies. It has been my pleasure to be a part of teams that have allowed me to problem solve and express myself creatively.</p>
    <p class="aboutPara2">I love working with clients that value the design process, collaboration, and want to be leaders in their respective industries. The full rundown of my projects and their focus is right below.</p>
    </div>
  </div>

 
    
    `;
  utilities.printToDom('about1', domString);
};

export default { buildAbout };
