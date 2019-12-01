import './navbar.scss';
import utilities from '../../helpers/utilities';

import logo from '../../../images/CBLOGO.png';

const buildNav = () => {
  const domString = `
  <nav class="navbar navbar-expand-lg navbar-light mainNav">
  <a class="navbar-brand" href="#">
  <img src=${logo} class="navImage">
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse navLinks" id="navbarSupportedContent">
    <ul class="navbar-nav container">
      <li class="nav-item active">
        <a class="nav-link" href="#">ABOUT</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">SKILLS</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">PROJECTS</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">CONTACT</a>
      </li>
    </ul>
  </div>

</nav>

    `;
  utilities.printToDom('nav', domString);
};

export default { buildNav };
