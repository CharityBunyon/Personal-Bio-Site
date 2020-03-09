import './carousel.scss';
import utilities from '../../helpers/utilities';


const buildCarousel = () => {
  const domString = `
      <div id="carouselExampleIndicators" class="carousel slide data-ride="carousel" id="mainCaro">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100 caroImages img-fluid" src="https://permanenteyelinerinfo.files.wordpress.com/2016/08/makeup-banner-1.jpg">
            <div class="carousel-caption d-md-block projectDeets text-left">
            <p class="projectTitles">Create Beauty</p>
            <a class="projectLink" href="https://create-beauty.firebaseapp.com/auth">View Project</a>
            </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100 caroImages img-fluid" src="https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80">
          <div class="carousel-caption d-md-block projectDeets text-left">
            <p class="projectTitles">Pardon Us</p>
            <a class="projectLink" href="https://pardon-us.firebaseapp.com/">View Project</a>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100 caroImages img-fluid" src="https://images.unsplash.com/photo-1558985250-27a406d64cb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80">
          <div class="carousel-caption d-md-block projectDeets text-left">
            <p class="projectTitles">Hit the Spot</p>
            <a class="projectLink href="https://sandwich-maker-a04f9.firebaseapp.com/">View Project</a>
          </div>
        </div>
        
      </div>
      <a class="carousel-control-prev previousBtn" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next nextBtn" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  `;
  utilities.printToDom('carousel', domString);
};

export default { buildCarousel };
